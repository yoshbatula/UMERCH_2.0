<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>UMerch - Verification Code</title>
    <style>
        body {
            font-family: 'Montserrat', Arial, sans-serif;
            background-color: #f6f6f6;
            margin: 0;
            padding: 20px;
        }
        .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 10px;
            padding: 40px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }
        .header {
            text-align: center;
            margin-bottom: 30px;
        }
        .logo {
            color: #9C0306;
            font-size: 28px;
            font-weight: bold;
            margin-bottom: 10px;
        }
        .title {
            color: #333;
            font-size: 24px;
            font-weight: 600;
            margin-bottom: 20px;
        }
        .otp-code {
            background-color: #9C0306;
            color: white;
            font-size: 32px;
            font-weight: bold;
            letter-spacing: 8px;
            padding: 20px;
            text-align: center;
            border-radius: 8px;
            margin: 30px 0;
        }
        .content {
            color: #555;
            line-height: 1.6;
            font-size: 16px;
        }
        .warning {
            background-color: #fff3cd;
            border: 1px solid #ffeaa7;
            color: #856404;
            padding: 15px;
            border-radius: 5px;
            margin: 20px 0;
        }
        .footer {
            text-align: center;
            margin-top: 30px;
            color: #888;
            font-size: 14px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <div class="logo">UMERCH</div>
            <div class="title">Email Verification</div>
        </div>

        <div class="content">
            <p>Hello {{ $user->name ?? 'User' }},</p>
            
            <p>You have requested to verify your email address. Please use the verification code below:</p>
            
            <div class="otp-code">
                {{ $otp }}
            </div>
            
            <p>Enter this code on the verification page to complete your email verification.</p>
            
            <div class="warning">
                <strong>Important:</strong> This verification code will expire in 10 minutes. If you didn't request this verification, please ignore this email.
            </div>
            
            <p>If you have any questions or need assistance, please contact our support team.</p>
            
            <p>Best regards,<br>
            The UMerch Team</p>
        </div>
        
        <div class="footer">
            <p>This is an automated message, please do not reply to this email.</p>
        </div>
    </div>
</body>
</html>