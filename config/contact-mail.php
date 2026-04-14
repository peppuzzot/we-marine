<?php

return [
    'smtp' => [
        'host' => 'smtps.aruba.it',
        'port' => 465,
        'encryption' => 'ssl',
        'username' => 'info@wemarine.it',
        'password' => 'CHANGE_ME',
        'timeout' => 15,
    ],
    'mail' => [
        'from_address' => 'info@wemarine.it',
        'from_name' => 'WEMARINE',
        'to_address' => 'info@wemarine.it',
        'to_name' => 'WEMARINE',
        'subject_prefix' => 'Nuova richiesta dal sito',
    ],
];
