<?php

return [
    'smtp' => [
        'host' => 'smtps.aruba.it',
        'port' => 465,
        'encryption' => 'ssl',
        'username' => 'info@tuodominio.it',
        'password' => 'PASSWORD',
        'timeout' => 15,
    ],
    'mail' => [
        'from_address' => 'info@tuodominio.it',
        'from_name' => 'WEMARINE',
        'to_address' => 'info@tuodominio.it',
        'to_name' => 'WEMARINE',
        'subject_prefix' => 'Nuova richiesta dal sito',
    ],
];

