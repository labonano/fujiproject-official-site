async function checkIPWithGAS() {
  try {
    // クライアントの IP を取得
    const ipResponse = await fetch('https://api64.ipify.org?format=json');
    const { ip } = await ipResponse.json();

    // GAS Web アプリに IP を送信
    const gasUrl = `https://script.google.com/a/macros/mict.ed.jp/s/AKfycbx8_qSaAOumIIop6g1G0TqCUGJ1iKbxYePkP-1nCT_V9MwVV5ldPL0uHJpfFsZTieY/exec?ip=${ip}`;
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
