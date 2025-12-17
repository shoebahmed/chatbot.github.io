(function () {
  const scripts = [
    'https://chatbot.mazeqube.com/runtime.e32b8adfe84f440f.js',
    'https://chatbot.mazeqube.com/main.4338fb12db08e2d4.js'
  ];

  scripts.forEach(src => {
    const script = document.createElement('script');
    script.type = 'module';
    script.src = src;
   // document.body.appendChild(script);

    script.onload = () => {
    const el = document.createElement('app-route');
    document.body.appendChild(el);
  };

  document.head.appendChild(script);
  });
})();

