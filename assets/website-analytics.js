// Track visits only on the published author website, never local previews.
(function () {
  if (!["jasonafeingold.com", "www.jasonafeingold.com"].includes(window.location.hostname)) return;
  var script = document.createElement("script");
  script.src = "https://tracker.metricool.com/resources/be.js";
  script.async = true;
  script.onload = function () {
    if (window.beTracker) window.beTracker.t({hash: "3e22a300dc203dd4daf2bb5380954bc8"});
  };
  document.head.appendChild(script);
})();
