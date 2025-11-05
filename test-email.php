<?php

require __DIR__.'/vendor/autoload.php';

$app = require_once __DIR__.'/bootstrap/app.php';
$app->make('Illuminate\Contracts\Console\Kernel')->bootstrap();

use Illuminate\Support\Facades\Mail;
use App\Mail\OtpMail;
use App\Models\User;

try {
    echo "Testing email configuration...\n";
    echo "MAIL_MAILER: " . config('mail.default') . "\n";
    echo "MAIL_HOST: " . config('mail.mailers.smtp.host') . "\n";
    echo "MAIL_PORT: " . config('mail.mailers.smtp.port') . "\n";
    echo "MAIL_USERNAME: " . config('mail.mailers.smtp.username') . "\n";
    echo "MAIL_FROM: " . config('mail.from.address') . "\n\n";
    
    // Get first user
    $user = User::first();
    
    if (!$user) {
        echo "No user found in database!\n";
        exit(1);
    }
    
    echo "Sending test OTP to: {$user->email}\n";
    
    $testOtp = '123456';
    
    Mail::to($user->email)->send(new OtpMail($testOtp, $user));
    
    echo "Email sent successfully!\n";
    echo "Check your inbox: {$user->email}\n";
    
} catch (Exception $e) {
    echo "ERROR: " . $e->getMessage() . "\n";
    echo "Stack trace:\n" . $e->getTraceAsString() . "\n";
}
