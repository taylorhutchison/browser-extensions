chrome.webRequest.onBeforeRequest.addListener(
    function(details) {

      const blockedPatterns = [
        "*://*.google.com/*"
      ];
  
      for (let pattern of blockedPatterns) {
        if (new URL(details.url).hostname.includes(pattern)) {
          // Redirect to the alternative page
          return { redirectUrl: chrome.runtime.getURL("blocked.html") };
        }
      }
    },
    { urls: ["<all_urls>"] },
    ["blocking"]
  );