(function () {
  if (window.__MAZEQUBE_CHAT_LOADED__) return;
  window.__MAZEQUBE_CHAT_LOADED__ = true;

  const script = document.createElement('script');
  script.src = 'chatbot-loader.js';
  script.async = true;

  script.onload = () => {
    const el = document.createElement('mazeqube-chat');
    document.body.appendChild(el);
  };

  document.head.appendChild(script);
})();
