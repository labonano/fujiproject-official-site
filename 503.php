<?php
// IPアドレスの取得
$ip_address = $_SERVER['REMOTE_ADDR'];

// 現在のタイムスタンプを取得
$timestamp = date("Y-m-d H:i:s");

// アクセスしようとしたURLの取得
$request_uri = $_SERVER['REQUEST_URI'];

// リファラの取得
$referrer = isset($_SERVER['HTTP_REFERER']) ? $_SERVER['HTTP_REFERER'] : 'リファラなし';

// PING値の取得（ダミー値を使用）
$ping_value = "応答なし"; // 実際のPING値を取得するためのコマンドはサーバー環境に依存

// 503エラーページを表示
?>
<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>サービス利用不可</title>
    <style>
        body {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            height: 100vh;
            background-color: #f2f2f2;
            color: #333;
            font-family: Arial, sans-serif;
            text-align: center;
        }
        h1 {
            font-size: 72px;
            margin: 0;
        }
        .error-message {
            font-size: 24px;
            margin: 10px 0;
        }
        .alert {
            color: red;
            font-weight: bold;
            font-size: 32px;
        }
        .dev-info {
            font-size: 16px;
            margin-top: 20px;
            background-color: #e0e0e0;
            padding: 10px;
            border-radius: 5px;
        }
        .instructions {
            margin-top: 20px;
            font-size: 16px;
            color: #d9534f; /* 赤色 */
        }
        a {
            display: inline-block;
            margin-top: 20px;
            padding: 10px 20px;
            background-color: #007bff;
            color: #fff;
            text-decoration: none;
            border-radius: 5px;
        }
        a:hover {
            background-color: #0056b3;
        }
    </style>
</head>
<body>
    <div>
        <h1>503</h1>
        <p class="alert">503エラー - アクセス制限中 -</p>
        <p class="error-message">現在、アクセス多重のため、一時的にアクセスを停止しています。</p>
        
        <div class="dev-info">
            <p><strong>開発者情報:</strong></p>
            <p>IPアドレス: <?php echo $ip_address; ?></p>
            <p>PING値: <?php echo $ping_value; ?></p>
            <p>アクセスしたURL: <?php echo htmlspecialchars($request_uri); ?></p>
            <p>リファラ: <?php echo htmlspecialchars($referrer); ?></p>
            <p>タイムスタンプ: <?php echo $timestamp; ?></p>
        </div>

        <div class="instructions">
            <p><strong>開発者への指示:</strong></p>
            <ol>
                <li>GitHub側の情報を確認する</li>
                <li>サイト設定を見直す</li>
                <li>ドメインを切り替える</li>
                <li>メンテナンスに切り替える</li>
            </ol>
            <p>解決した際は以降の操作を行わないこと。</p>
        </div>

        <a href="/">ホームに戻る</a>
    </div>
</body>
</html>
