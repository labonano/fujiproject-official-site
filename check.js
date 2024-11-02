<script>
async function checkIPWithGAS() {
  try {
    // クライアントのIP情報を取得
    const ipInfoResponse = await fetch('https://ipinfo.io/json');
    const ipInfo = await ipInfoResponse.json(); // IP情報をすべて取得

    // IP情報をGASに送信するために、パラメータとしてエンコード
    const gasUrl = `https://script.google.com/macros/s/AKfycbxO98r4bgD3F86CBwUYtVuagrg01NJO53TSGoNL060SrG7hSYRyZK_-hE7-uRwDau-W/exec`;
    const params = new URLSearchParams(ipInfo); // ipInfo オブジェクトをURL形式に変換
    const response = await fetch(`${gasUrl}?${params.toString()}`); // GASへ送信

    if (!response.ok) {
      throw new Error(`GAS リクエストが失敗しました: ${response.status}`);
    }

    const data = await response.json();

    if (data.blacklisted) {
      // ブラックリスト入りならリダイレクト
      window.location.href = 'https://fujiproject-off1cial.f5.si/403.html';
    } else {
      alert('アクセス許可されています');
    }
  } catch (error) {
    alert('エラーが発生しました: ' + error.message);
  }
}

// ページ読み込み時に IP チェックを実行
checkIPWithGAS();
</script>
