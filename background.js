chrome.commands.onCommand.addListener((command) => {
  if (command === "toggle-rtl") {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs.length === 0) return;
      chrome.tabs.sendMessage(tabs[0].id, { action: "toggle" }, (response) => {
        // Optional: update badge or do nothing
        console.log("RTL toggled:", response?.rtlActive);
      });
    });
  }
});