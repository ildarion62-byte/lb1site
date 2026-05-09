<?php
header('Content-Type: application/json; charset=utf-8');

header('Access-Control-Allow-Origin: *');

$data = [
    'status' => 'success',
    'products' => [
        [
            'id' => 'p1',
            'name' => 'Шапочка з фольги (Класична)',
            'price' => 15.00,
            'desc' => 'Захист від читання думок супутниками та вишками.',
            'image' => 'img/foil.jpg'
        ],
        [
            'id' => 'p2',
            'name' => 'Пташки "Анті-гравіті"',
            'price' => 42.50,
            'desc' => 'Чому пташки не падають на землю?',
            'image' => 'img/BIRD.jpg'
        ],
        [
            'id' => 'p3',
            'name' => 'Детектор 5G випромінювання',
            'price' => 99.99,
            'desc' => 'Перевірте свою вакцину вже сьогодні! Звукове сповіщення.',
            'image' => 'img/detector.jpg'
        ],
        [
            'id' => 'p4',
            'name' => 'Намет-клітка Фарадея',
            'price' => 250.00,
            'desc' => 'Захистить ваш сон від радіохвиль уряду.',
            'image' => 'img/tent.jpg'
        ],
        [
            'id' => 'p5',
            'name' => 'Піраміда "йо-шин-се"',
            'price' => 250.00,
            'desc' => 'Піраміда лисого гуру.',
            'image' => 'img/GORDON.PNG'
        ]
    ]
];



echo json_encode($data, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
?>