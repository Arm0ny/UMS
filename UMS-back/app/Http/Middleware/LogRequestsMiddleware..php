<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\File;
use Symfony\Component\HttpFoundation\Response;

class LogRequestsMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {

        $logDirectory = storage_path('logs');
        File::makeDirectory($logDirectory, 0755, true, true);
        $logFile = $logDirectory . '/requests.log';

        $user = $request->user();
        $username = $user ? $user->username : 'unauthenticated';
        $logMessage = '['
            .'created_at'. date('Y-m-d H:i:s') . '] ' .'user: '.$username.'method:'. $request->method() .'url:'. ' ' . $request->fullUrl() . PHP_EOL;
        file_put_contents($logFile, $logMessage, FILE_APPEND);

        return $next($request);
    }
}
