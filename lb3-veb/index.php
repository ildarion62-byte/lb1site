<?php

$page = $_GET['page'] ?? 'home';


$pages = [
    'home' => [
        'title' => 'ПРАВДА ПОРУЧ - Головна',
        'header' => '
            <div class="header-top">
                <img src="img/radiation.gif" alt="Радіація" class="retro-icon">
                <h1 class="main-title">ПРАВДА ПОРУЧ</h1>
                <img src="img/radiation.gif" alt="Радіація" class="retro-icon">
            </div>
            <div class="warning-banner">УВАГА: Цей сайт відстежується ілюмінатами. Читайте швидко!</div>
        ',
        'file' => 'index.html'
    ],
    'theories' => [
        'title' => 'АРХІВ ТЕОРІЙ',
        'header' => '<h1 class="main-title">КЛАСИФІКОВАНІ МАТЕРІАЛИ</h1>',
        'file' => 'theories.html'
    ],
    'shop' => [
        'title' => 'СЕКРЕТНИЙ МАГАЗИН',
        'header' => '<h1 class="main-title">ВІДДІЛ ПОСТАЧАННЯ ОПОРУ</h1>',
        'file' => 'shop.html'
    ],
    'contact' => [
        'title' => 'ШИФРОВКА',
        'header' => '<h1 class="main-title">ЗВ\'ЯЖІТЬСЯ З ОПОРОМ</h1>',
        'file' => 'contact.html'
    ]
];


if (!array_key_exists($page, $pages)) {
    $page = 'home';
}

$currentPage = $pages[$page];
?>
<!DOCTYPE html>
<html lang="uk">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?= htmlspecialchars($currentPage['title']) ?></title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <header>
            <?= $currentPage['header'] ?>
        </header>

        <nav>
            <a href="?page=home" <?= $page === 'home' ? 'style="color: #ff0000;"' : '' ?>>ГОЛОВНА</a>
            <a href="?page=theories" <?= $page === 'theories' ? 'style="color: #ff0000;"' : '' ?>>ТЕОРІЇ ТА ДОКАЗИ</a>
            <a href="?page=shop" <?= $page === 'shop' ? 'style="color: #ff0000;"' : '' ?>>СЕКРЕТНИЙ МАГАЗИН</a>
            <a href="?page=contact" <?= $page === 'contact' ? 'style="color: #ff0000;"' : '' ?>>ЗВ'ЯЗОК ЧЕРЕЗ ШИФР</a>
        </nav>

        <?php 
            if (file_exists($currentPage['file'])) {
                include $currentPage['file']; 
            } else {
                echo '<div class="warning-banner">Помилка 404: Секретний файл викрадено рептилоїдами (файл не знайдено)!</div>';
            }
        ?>
    </div>
</body>
</html>