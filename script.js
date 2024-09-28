document.addEventListener('DOMContentLoaded', function() {
    const footer = document.getElementById('dynamic-footer');
    let lastScrollTop = 0;
    let isFooterVisible = false;

    window.addEventListener('scroll', function() {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        let windowHeight = window.innerHeight;
        let documentHeight = document.documentElement.scrollHeight;

        // スクロールが下向きで、ページの下部に近づいたとき
        if (scrollTop > lastScrollTop && scrollTop + windowHeight > documentHeight - 100) {
            if (!isFooterVisible) {
                footer.classList.add('visible');
                isFooterVisible = true;
            }
        } else {
            if (isFooterVisible) {
                footer.classList.remove('visible');
                isFooterVisible = false;
            }
        }

        lastScrollTop = scrollTop;
    });
});
