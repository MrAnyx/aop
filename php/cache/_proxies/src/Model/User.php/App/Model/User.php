<?php
namespace App\Model;

use App\Annotation\Logging as Logging;

class User extends User__AopProxied implements \Go\Aop\Proxy
{

    /**
     * Property was created automatically, do not change it manually
     */
    private static $__joinPoints = [
        'method' => [
            'displayInfo' => [
                'advisor.App\\Aspect\\LoggingAspect->beforeMethodExecution'
            ]
        ]
    ];
    
    /**
    * Display info about the user
    * @Logging
    * @return string
    */
    public function displayInfo() : string
    {
        return self::$__joinPoints['method:displayInfo']->__invoke($this);
    }
    
}
\Go\Proxy\ClassProxy::injectJoinPoints(User::class);