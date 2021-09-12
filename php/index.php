<?php

require __DIR__ . "/vendor/autoload.php";

use App\Model\User;
use App\AppKernel;

$applicationAspectKernel = AppKernel::getInstance();
$applicationAspectKernel->init([
        'debug' => true, // Use 'false' for production mode
        // Cache directory
        'cacheDir' => __DIR__ . './cache/', // Adjust this path if needed
        // Include paths restricts the directories where aspects should be applied, or empty for all source files
        'includePaths' => [
            __DIR__ . '/src/'
        ],
        'appDir' => "/"
]);

$user = new User("John", "Doe");
echo $user->displayInfo();