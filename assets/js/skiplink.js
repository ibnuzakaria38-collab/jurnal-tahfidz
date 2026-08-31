// Adds an accessible "Skip to content" link at top of the page.
// This is injected dynamically to avoid modifying the large HTML file immediately.
(function () {
  document.addEventListener('DOMContentLoaded', function () {
    try {
      var link = document.createElement('a');
      link.href = '#appShell';
      link.className = 'skip-link';
      link.textContent = 'Lewati ke konten utama';

      var css = '.skip-link{position:absolute;left:-999px;top:auto;width:1px;height:1px;overflow:hidden}' +
                '.skip-link:focus{position:fixed;left:12px;top:12px;width:auto;height:auto;padding:8px 12px;background:#fff;color:#022c22;border-radius:6px;box-shadow:0 6px 18px rgba(2,44,34,0.12);z-index:9999;text-decoration:none}' ;
      var style = document.createElement('style');
      style.type = 'text/css';
      style.appendChild(document.createTextNode(css));
      document.head.appendChild(style);

      if (document.body.firstChild) document.body.insertBefore(link, document.body.firstChild);
      else document.body.appendChild(link);
    } catch (e) {
      // fail silently — non-critical helper
      console.warn('skip-link injection failed', e);
    }
  });
})();
