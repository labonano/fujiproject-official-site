   async function checkIPWithGAS() {
      try {
        const ipResponse = await fetch('https://api64.ipify.org?format=json');
        const { ip } = await ipResponse.json();

        const gasUrl = `https://script.google.com/macros/s/AKfycbx8_qSaAOumIIop6g1G0TqCUGJ1iKbxYePkP-1nCT_V9MwVV5ldPL0uHJpfFsZTieY/exec?ip=${ip}`;
        const response = await fetch(gasUrl);
        const data = await response.json();

        if (data.blacklisted) {
          window.location.href = 'https://fujiproject-off1cial.f5.si/403.html';
        } else {
          alert('アクセス許可されています');
        }
      } catch (error) {
        alert('エラーが発生しました: ' + error.message);
      }
    }

    checkIPWithGAS();
