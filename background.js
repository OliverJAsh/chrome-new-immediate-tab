chrome.tabs.onActivated.addListener(activeInfo => {
    chrome.storage.sync.set({ current: activeInfo })
});

const newImmediateTab = () => {
    chrome.storage.sync.get('current', ({ current }) => {
        if (current) {
            chrome.tabs.get(current.tabId, tab => {
                chrome.tabs.create({ index: tab.index + 1 })
            })
        } else throw new Error('No current tab.');
    })
}
chrome.commands.onCommand.addListener(command => {
    if (command === 'new-immediate-tab') {
        newImmediateTab();
    }
});
