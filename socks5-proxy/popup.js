
window.onload = (event) => {
  const flag = window.localStorage.getItem('checked');
  const proxyToggle = document.getElementById("proxy-toggle");

  if (flag === 'true') {
    proxyToggle.checked = true;
  } else {
    proxyToggle.checked = false;
  }
};


const toggle = document.getElementById('proxy-toggle');

const sendChromeRuntimeMessage = message => chrome.runtime.sendMessage({ command: `${message}` });

const switchProxy = e => {
  const checked = e?.target?.checked;

  if (checked) {
    window.localStorage.setItem('checked', true)
    sendChromeRuntimeMessage("enable_proxy");
  } else {
    window.localStorage.setItem('checked', false)
    sendChromeRuntimeMessage("disable_proxy");
  }
}

toggle.addEventListener('click', switchProxy);

