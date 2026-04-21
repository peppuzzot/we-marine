<?php

declare(strict_types=1);

use PHPMailer\PHPMailer\Exception;
use PHPMailer\PHPMailer\PHPMailer;

require __DIR__ . '/vendor/autoload.php';

$config = require __DIR__ . '/config/contact-mail.php';

function wantsJsonResponse(): bool
{
    $accept = $_SERVER['HTTP_ACCEPT'] ?? '';
    return str_contains($accept, 'application/json');
}

function respond(array $payload, int $statusCode = 200): void
{
    http_response_code($statusCode);

    if (wantsJsonResponse()) {
        header('Content-Type: application/json; charset=UTF-8');
        echo json_encode($payload, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
        exit;
    }

    $status = !empty($payload['success']) ? 'success' : 'error';
    $message = urlencode((string) ($payload['message'] ?? ''));
    header("Location: /pages/contact.html?status={$status}&message={$message}");
    exit;
}

function postValue(string $key): string
{
    $value = $_POST[$key] ?? '';
    return is_string($value) ? trim($value) : '';
}

function isMailConfigReady(array $config): bool
{
    $smtp = $config['smtp'] ?? [];
    $mail = $config['mail'] ?? [];

    $required = [
        $smtp['host'] ?? null,
        $smtp['port'] ?? null,
        $smtp['encryption'] ?? null,
        $smtp['username'] ?? null,
        $smtp['password'] ?? null,
        $mail['from_address'] ?? null,
        $mail['to_address'] ?? null,
    ];

    foreach ($required as $value) {
        if (!$value || $value === 'CHANGE_ME') {
            return false;
        }
    }

    return true;
}

if (($_SERVER['REQUEST_METHOD'] ?? 'GET') !== 'POST') {
    respond([
        'success' => false,
        'message' => 'Metodo non consentito.',
    ], 405);
}

$name = postValue('name');
$email = postValue('email');
$phone = postValue('phone');
$service = postValue('service');
$boat = postValue('boat');
$area = postValue('area');
$message = postValue('message');
$honeypot = postValue('company');

if ($honeypot !== '') {
    respond([
        'success' => true,
        'message' => 'Richiesta inviata con successo.',
    ]);
}

if ($name === '' || $email === '' || $service === '' || $message === '') {
    respond([
        'success' => false,
        'message' => 'Compila tutti i campi obbligatori prima di inviare la richiesta.',
    ], 422);
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    respond([
        'success' => false,
        'message' => 'Inserisci un indirizzo email valido.',
    ], 422);
}

if (!isMailConfigReady($config)) {
    respond([
        'success' => false,
        'message' => 'La configurazione email non è ancora completa. Aggiorna i dati SMTP prima di usare il form.',
    ], 500);
}

$name = mb_substr($name, 0, 120);
$email = mb_substr($email, 0, 160);
$phone = mb_substr($phone, 0, 60);
$service = mb_substr($service, 0, 120);
$boat = mb_substr($boat, 0, 120);
$area = mb_substr($area, 0, 120);
$message = mb_substr($message, 0, 5000);

$summaryRows = [
    'Nome e cognome' => $name,
    'Email' => $email,
    'Telefono' => $phone !== '' ? $phone : 'Non indicato',
    'Servizio di interesse' => $service,
    'Modello o tipo di mezzo' => $boat !== '' ? $boat : 'Non indicato',
    'Area o provenienza' => $area !== '' ? $area : 'Non indicato',
];

$escapedRows = '';
$plainRows = [];

foreach ($summaryRows as $label => $value) {
    $escapedLabel = htmlspecialchars($label, ENT_QUOTES, 'UTF-8');
    $escapedValue = nl2br(htmlspecialchars($value, ENT_QUOTES, 'UTF-8'));
    $escapedRows .= "<tr><td style=\"padding:8px 12px;border:1px solid #d8e0e8;font-weight:700;background:#f4f7fa;\">{$escapedLabel}</td><td style=\"padding:8px 12px;border:1px solid #d8e0e8;\">{$escapedValue}</td></tr>";
    $plainRows[] = "{$label}: {$value}";
}

$escapedMessage = nl2br(htmlspecialchars($message, ENT_QUOTES, 'UTF-8'));
$htmlBody = <<<HTML
<div style="font-family:Arial,sans-serif;color:#17212b;line-height:1.6;">
  <h2 style="margin:0 0 16px;color:#0b2a4a;">Nuova richiesta dal sito WEMARINE</h2>
  <p style="margin:0 0 18px;">Hai ricevuto una nuova richiesta dal modulo contatti.</p>
  <table style="width:100%;border-collapse:collapse;margin-bottom:20px;">
    {$escapedRows}
  </table>
  <h3 style="margin:0 0 8px;color:#0b2a4a;">Messaggio</h3>
  <div style="padding:14px 16px;border-radius:16px;background:#f4f7fa;border:1px solid #d8e0e8;">{$escapedMessage}</div>
</div>
HTML;

$plainBody = "Nuova richiesta dal sito WEMARINE\n\n"
    . implode("\n", $plainRows)
    . "\n\nMessaggio:\n{$message}\n";

$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->Host = (string) $config['smtp']['host'];
    $mail->SMTPAuth = true;
    $mail->Username = (string) $config['smtp']['username'];
    $mail->Password = (string) $config['smtp']['password'];
    $mail->Port = (int) $config['smtp']['port'];
    $mail->Timeout = (int) ($config['smtp']['timeout'] ?? 15);
    $mail->CharSet = 'UTF-8';
    $mail->SMTPOptions = is_array($config['smtp']['options'] ?? null)
        ? $config['smtp']['options']
        : [];

    $encryption = strtolower((string) $config['smtp']['encryption']);
    if ($encryption === 'ssl') {
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    } elseif ($encryption === 'tls') {
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    }

    $mail->setFrom(
        (string) $config['mail']['from_address'],
        (string) ($config['mail']['from_name'] ?? 'WEMARINE')
    );
    $mail->addAddress(
        (string) $config['mail']['to_address'],
        (string) ($config['mail']['to_name'] ?? 'WEMARINE')
    );
    $mail->addReplyTo($email, $name);
    $mail->Subject = sprintf(
        '%s - %s',
        (string) ($config['mail']['subject_prefix'] ?? 'Nuova richiesta dal sito'),
        $service
    );
    $mail->isHTML(true);
    $mail->Body = $htmlBody;
    $mail->AltBody = $plainBody;
    $mail->send();

    respond([
        'success' => true,
        'message' => 'Richiesta inviata con successo. Ti risponderemo il prima possibile.',
    ]);
} catch (Exception $exception) {
    respond([
        'success' => false,
        'message' => 'Invio non riuscito. Controlla la configurazione SMTP oppure riprova tra poco.',
    ], 500);
}
