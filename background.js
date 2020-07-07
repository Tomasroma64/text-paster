// Check for key activation
chrome.commands.onCommand.addListener(function(command) {
    if (command === "paste") {
        chrome.tabs.executeScript({ file: 'content.js' });
    }

});