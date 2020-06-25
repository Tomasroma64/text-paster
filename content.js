chrome.storage.local.get('text', function(result) {
    document.execCommand('insertText', false, result.text);

});