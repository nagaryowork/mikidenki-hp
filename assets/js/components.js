document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll("nav a");
  const header = document.querySelector('header');

  // スクロールでヘッダーの背景色を変更
  window.addEventListener('scroll', function () {
    if (window.scrollY > 50) { // 50px以上スクロールしたら
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // 共通部品操作用スクリプト（必要に応じて拡張）
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      console.log(`リンクがクリックされました: ${link.href}`);
    });
  });
});
