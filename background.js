chrome.commands.onCommand.addListener(function(command) {

    if (command === "scroll") {
        chrome.tabs.executeScript({ file: 'content.js' });

    }
});