const express = require('express');
const ping = require('ping');
const cors = require('cors');
const app = express();
const port = 3000;

// CORSの設定
app.use(cors());

// IPアドレス、PING値、リファラ、アクセスしたURL、タイムスタンプを取得するエンドポイント
app.get('/get_info', async (req, res) => {
    const ipAddress = req.ip; // クライアントのIPアドレス
    const referrer = req.get('Referer') || 'リファラなし'; // リファラ
    const requestUrl = req.protocol + '://' + req.get('host') + req.originalUrl; // アクセスしたURL
    const timestamp = new Date().toISOString(); // タイムスタンプ

    // PING値を取得するために、GoogleにPINGを送信
    let pingValue;
    try {
        const pingResult = await ping.promise.probe('google.com');
        pingValue = pingResult.time; // PING値（ms）
    } catch (error) {
        pingValue = '取得失敗';
    }

    // クライアント情報をJSON形式で返す
    res.json({
        ipAddress,
        pingValue,
        requestUri: requestUrl,
        referrer,
        timestamp,
    });
});

// サーバーの起動
app.listen(port, () => {
    console.log(`サーバーが http://localhost:${port} で動作しています`);
});
