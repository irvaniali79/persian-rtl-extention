// نگهداری وضعیت در حافظه همان تب
let rtlActive = false;

// اعمال تغییرات راست‌چین
function applyRTL() {
  document.documentElement.setAttribute('dir', 'rtl');
  document.documentElement.setAttribute('lang', 'fa');
  // اضافه کردن استایل‌های پایه
  const style = document.createElement('style');
  style.id = 'persian-rtl-style';
  style.textContent = `
    html, body {
      direction: rtl !important;
      text-align: right !important;
    }
    /* برخی عناصر خاص برای اطمینان */
    input, textarea, select {
      direction: rtl !important;
      text-align: right !important;
    }
  `;
  document.head.appendChild(style);
  rtlActive = true;
}

// حذف تغییرات راست‌چین
function removeRTL() {
  document.documentElement.removeAttribute('dir');
  document.documentElement.removeAttribute('lang');
  const style = document.getElementById('persian-rtl-style');
  if (style) style.remove();
  rtlActive = false;
}

// گوش دادن به پیام‌های popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'toggle') {
    if (rtlActive) {
      removeRTL();
    } else {
      applyRTL();
    }
    sendResponse({ rtlActive: rtlActive });
  } else if (request.action === 'getState') {
    sendResponse({ rtlActive: rtlActive });
  }
});