document.addEventListener('DOMContentLoaded', () => {
    // スクロールアニメーション
    const reveal = () => {
        const elements = document.querySelectorAll('.reveal, .reveal-text');
        elements.forEach(el => {
            const windowHeight = window.innerHeight;
            const elementTop = el.getBoundingClientRect().top;
            const elementVisible = 100;
            if (elementTop < windowHeight - elementVisible) {
                el.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', reveal);
    // 初回実行
    reveal();

    // ロゴのフェードインなどの追加演出もここで行えます
});