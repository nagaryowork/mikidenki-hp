document.addEventListener("DOMContentLoaded", () => {
  // 応募フォーム追従ボタンの制御
  const entryBtn = document.querySelector('.floating-entry-btn');
  const entryForm = document.querySelector('#entry-form');
  const footer = document.querySelector('footer');

  if (entryBtn && entryForm) {
    let isSwitching = false;

    const updateToPhoneMode = () => {
      entryBtn.classList.add('is-phone-mode');
      entryBtn.innerHTML = `
        <img src="/assets/img/phone.svg" alt="" width="20" height="20" style="margin-right: 8px; filter: brightness(0) invert(1);">
        お電話でのご応募も可能です！
      `;
      entryBtn.href = '#contact-info';
    };

    const updateToNormalMode = () => {
      entryBtn.classList.remove('is-phone-mode');
      entryBtn.textContent = '応募フォームへ進む';
      entryBtn.href = '#entry-form';
    };

    const handleScroll = () => {
      if (isSwitching) return;

      const formRect = entryForm.getBoundingClientRect();
      const footerRect = footer ? footer.getBoundingClientRect() : null;
      const windowHeight = window.innerHeight;

      // フッターが見えたら（一番下までスクロールしたら）ボタンを隠す
      if (footerRect && footerRect.top < windowHeight) {
        if (!entryBtn.classList.contains('is-hidden')) {
          entryBtn.classList.add('is-hidden');
        }
        return;
      }

      // フォームの上端が画面下端より少し上に来たら、ボタンの表示とリンク先を変更
      const shouldBePhoneMode = formRect.top < windowHeight - 100;
      const isCurrentlyPhoneMode = entryBtn.classList.contains('is-phone-mode');

      // 隠れていた状態からの復帰
      if (entryBtn.classList.contains('is-hidden')) {
        entryBtn.classList.remove('is-hidden');
        // 復帰時は即座に正しいモードを適用
        if (shouldBePhoneMode && !isCurrentlyPhoneMode) {
          updateToPhoneMode();
        } else if (!shouldBePhoneMode && isCurrentlyPhoneMode) {
          updateToNormalMode();
        }
        return;
      }

      // モード切り替えが必要な場合（フェードアニメーション）
      if (shouldBePhoneMode !== isCurrentlyPhoneMode) {
        isSwitching = true;
        entryBtn.classList.add('is-switching'); // フェードアウト

        setTimeout(() => {
          if (shouldBePhoneMode) {
            updateToPhoneMode();
          } else {
            updateToNormalMode();
          }
          entryBtn.classList.remove('is-switching'); // フェードイン
          isSwitching = false;
        }, 300); // CSSのtransition時間(0.3s)に合わせる
      }
    };

    // スクロールイベントにリスナーを追加
    window.addEventListener('scroll', handleScroll);
    // 初期表示時にも実行
    handleScroll();
  }
});
