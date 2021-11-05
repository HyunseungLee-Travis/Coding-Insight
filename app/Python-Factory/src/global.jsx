const global = {
  ishome(link, home) {
    return (
      link == home ||
      link == home + "/" ||
      link == home + "/index.html" ||
      link == home + "/index-en.html"
    );
  },
  javascript: `const meta = document.createElement('meta'); meta.setAttribute('content', 'width=device-width, initial-scale=0.5, maximum-scale=0.5, user-scalable=0'); meta.setAttribute('name', 'viewport'); document.getElementsByTagName('head')[0].appendChild(meta);`,
  browsername: "CIAV",
  screenopt: { headerShown: false, gestureEnabled: true },
};

export default global;