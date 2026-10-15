// Preserve useful PDF links independently of the preview host or offline folder.
(() => {
  const originals = new Map();
  const docs = 'https://docs.pirired.com/';
  const embeddedOnly = new Set([
    'shared-controls/standard-panel-and-remote.png',
    'shared-controls/prime-panel-and-remote.png',
  ]);
  function prepare() {
    if (originals.size) return;
    const main = document.querySelector('main[data-manual-id]');
    if (!main) return;
    main.querySelectorAll('a[href]').forEach(anchor => {
      const original = anchor.getAttribute('href');
      let href = original;
      if (href === '#specifications') href = '#print-specifications';
      else if (href === '#package-contents') href = '#print-package-contents';
      else if (href.startsWith('#') || /^(https:|mailto:|tel:)/i.test(href)) return;
      else {
        let relative = href.replace(/^assets\//, '').replace(/^\//, '');
        if (embeddedOnly.has(relative)) href = null;
        else if (relative === 'index.html' || relative === '') href = docs;
        else if (/^[\w-]+\.html$/.test(relative)) href = docs + 'manual/' + relative.replace(/\.html$/, '') + '/';
        else if (!/^[a-z]+:/i.test(relative)) href = new URL(relative, docs).href;
      }
      if (href !== original) {
        originals.set(anchor, original);
        if (href === null) anchor.removeAttribute('href');
        else anchor.setAttribute('href', href);
      }
    });
  }
  function restore() {
    originals.forEach((href, anchor) => anchor.setAttribute('href', href));
    originals.clear();
  }
  window.addEventListener('beforeprint', prepare);
  window.addEventListener('afterprint', restore);
})();
