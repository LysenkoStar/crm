<?php

namespace Symfony\Component\Routing\Loader\Configurator;


use App\Controller\Admin\MainController;

return function (RoutingConfigurator $routes) {

    $routes->add('admin', '/admin')
        ->controller([MainController::class, 'index']);

};