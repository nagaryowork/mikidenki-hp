// 共通部品操作用スクリプト（必要に応じて拡張）
document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll("nav a");
  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      console.log(`リンクがクリックされました: ${link.href}`);
    });
  });
});
