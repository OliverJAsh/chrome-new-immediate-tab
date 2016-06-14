let current;
chrome.tabs.onActivated.addListener(activeInfo => {
    current = activeInfo;
});

const newImmediateTab = () => {
    if (current) {
        chrome.tabs.get(current.tabId, tab => {
            chrome.tabs.create({ index: tab.index + 1 })
        })
    } else throw new Error('No current tab.');
}
chrome.commands.onCommand.addListener(command => {
    if (command === 'new-immediate-tab') {
        newImmediateTab();
    }
});
