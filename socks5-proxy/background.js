const proxyConfig = {
    mode: "fixed_servers",
    rules: {
        singleProxy: {
            scheme: "socks5",
            host: "0.0.0.0",
            port: 9050
        },
        bypassList: ["localhost", "127.0.0.1", "*.onion"]
    }
}


chrome.runtime.onMessage.addListener((message) => {
    if (message.command === "enable_proxy") {
        chrome.proxy.settings.set(
            { value: proxyConfig, scope: "regular" },
            () => { console.log("Proxy set to SOCKS5: 0.0.0.0:9050"); }
        );
    }
});


chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.command === "disable_proxy") {
        chrome.proxy.settings.clear({}, () => { console.log("Proxy disabled"); });
    }
});
