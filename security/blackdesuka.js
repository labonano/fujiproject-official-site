async function checkIPWithGAS() {
  try {
    // クライアントの IP を取得
    const ipResponse = await fetch('https://api64.ipify.org?format=json');
    const { ip } = await ipResponse.json();

    // GAS Web アプリに IP を送信
    const gasUrl = `https://script.google.com/a/macros/mict.ed.jp/s/AKfycby-lZHtsAGa4sNWhfhivM7vK8YLEJb6HLWeqJCD5oygRhY5iz10fcAKEdEOLC8M5Dx_/exec?ip=${ip}`;
    const response = await fetch(gasUrl);
    const data = await response.json();

    if (data.blacklisted) {
      // ブラックリスト入りならリダイレクト
      window.location.href = 'https://fujiproject-off1cial.f5.si/403.html';
    } else {
      console.log('アクセス許可されています');
    }
  } catch (error) {
    console.error('エラーが発生しました:', error);
  }
}

// ページ読み込み時に IP チェックを実行
checkIPWithGAS();
