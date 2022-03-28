

const sendMessageToBot = message => chrome.tabs.query(
        {active: true, currentWindow: true},
        tabs => chrome.tabs.sendMessage(tabs[0].id, message)
    )
;

const listenForMessage = (callback) => chrome.runtime.onMessage.addListener(callback);