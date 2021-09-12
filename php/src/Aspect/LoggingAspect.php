<?php

namespace App\Aspect;

use Go\Aop\Aspect;
use Go\Lang\Annotation\After;
use Go\Lang\Annotation\Before;
use Go\Aop\Intercept\MethodInvocation;

/**
 * Monitor aspect
 */
class LoggingAspect implements Aspect
{

    /**
     * Logging methods
     *
     * @param MethodInvocation $invocation Invocation
     *
     * @After("@execution(App\Annotation\Logging)")
     */
    public function beforeMethodExecution(MethodInvocation $invocation)
    {
        $obj = $invocation->getThis();
        echo 'Calling Before Interceptor for method: ',
             is_object($obj) ? get_class($obj) : $obj,
             $invocation->getMethod()->isStatic() ? '::' : '->',
             $invocation->getMethod()->getName(),
             '()',
             ' with arguments: ',
             json_encode($invocation->getArguments());
    }
}