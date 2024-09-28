document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.style.backgroundColor = '#222'; // スクロール時の背景色
            header.style.padding = '10px'; // スクロール時のパディング
        } else {
            header.style.backgroundColor = '#333'; // 元の背景色
            header.style.padding = '20px'; // 元のパディング
        }
    });
});
