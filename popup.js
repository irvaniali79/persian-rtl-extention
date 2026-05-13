const toggleBtn = document.getElementById('toggleBtn');
const statusDiv = document.getElementById('status');

// دریافت وضعیت فعلی از content script هنگام باز شدن popup
chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
  chrome.tabs.sendMessage(tabs[0].id, { action: "getState" }, (response) => {
    if (response && response.rtlActive) {
      statusDiv.textContent = 'وضعیت: فعال';
      toggleBtn.textContent = 'غیرفعال‌سازی راست‌چین';
    } else {
      statusDiv.textContent = 'وضعیت: غیرفعال';
      toggleBtn.textContent = 'فعال‌سازی راست‌چین';
    }
  });
});

// کلیک روی دکمه
toggleBtn.addEventListener('click', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, { action: "toggle" }, (response) => {
      if (response) {
        if (response.rtlActive) {
          statusDiv.textContent = 'وضعیت: فعال';
          toggleBtn.textContent = 'غیرفعال‌سازی راست‌چین';
        } else {
          statusDiv.textContent = 'وضعیت: غیرفعال';
          toggleBtn.textContent = 'فعال‌سازی راست‌چین';
        }
      }
    });
  });
});