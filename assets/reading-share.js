(() => {
  const section = document.querySelector('.reading-share');
  if (!section) return;
  const url = section.dataset.shareUrl;
  const title = document.title;
  const status = section.querySelector('.share-status');
  const copy = section.querySelector('[data-copy-link]');
  const fallback = section.querySelector('.share-fallback');
  const manualCopy = () => {
    fallback.hidden = false;
    const input = fallback.querySelector('input');
    input.focus();
    input.select();
    status.textContent = 'Select and copy the link below.';
  };
  copy.hidden = false;
  copy.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(url);
      fallback.hidden = true;
      status.textContent = 'Link copied.';
    } catch {
      manualCopy();
    }
  });
  const native = section.querySelector('[data-native-share]');
  if (typeof navigator.share === 'function') {
    native.hidden = false;
    native.addEventListener('click', async () => {
      try {
        await navigator.share({title, url});
        status.textContent = '';
      } catch (error) {
        if (error.name !== 'AbortError') manualCopy();
      }
    });
  }
})();
