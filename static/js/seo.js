/* -----------------------360搜索----------------------- */
(function () {
  var src = "https://s.ssl.qhres2.com/ssl/ab77b6ea7f3fbf79.js";
  document.write('<script src="' + src + '" id="sozz"></script>');
})();

/* -----------------------百度搜索----------------------- */
(function () {
  var canonicalURL, curProtocol;
  //Get the <link> tag
  var x = document.getElementsByTagName("link");
  //Find the last canonical URL
  if (x.length > 0) {
    for (i = 0; i < x.length; i++) {
      if (x[i].rel.toLowerCase() == "canonical" && x[i].href) {
        canonicalURL = x[i].href;
      }
    }
  }
  //Get protocol
  if (!canonicalURL) {
    curProtocol = window.location.protocol.split(":")[0];
  } else {
    curProtocol = canonicalURL.split(":")[0];
  }
  //Get current URL if the canonical URL does not exist
  if (!canonicalURL) canonicalURL = window.location.href;
  //Assign script content. Replace current URL with the canonical URL
  !(function () {
    var e = /([http|https]:\/\/[a-zA-Z0-9\_\.]+\.baidu\.com)/gi,
      r = canonicalURL,
      t = document.referrer;
    if (!e.test(r)) {
      var n =
        String(curProtocol).toLowerCase() === "https"
          ? "https://sp0.baidu.com/9_Q4simg2RQJ8t7jm9iCKT-xh_/s.gif"
          : "//api.share.baidu.com/s.gif";
      t
        ? ((n += "?r=" + encodeURIComponent(document.referrer)),
          r && (n += "&l=" + r))
        : r && (n += "?l=" + r);
      var i = new Image();
      i.src = n;
    }
  })(window);
})();

/* -----------------------头条搜索----------------------- */
(function () {
  (function () {
    var el = document.createElement("script");
    el.src =
      "https://sf1-scmcdn-tos.pstatp.com/goofy/ttzz/push.js?7ba195fade40c93d381c7da8ebc6bc6333b3bae5457e9f0e8017ad7c9cf74984c26e2585b8f4bfda193e82b0f7517b02431fe1e5187b24174fe892c4cb1cf00c0630377f861b7f6846b53633941134fa";
    el.id = "ttzz";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(el, s);
  })(window);
})();
