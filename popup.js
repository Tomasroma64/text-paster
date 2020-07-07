// Fill in text input with previous settings
$(document).ready(function() {

    chrome.storage.local.get('text', function(result) {
        $('#text-input').val(result.text);
    });

});

// Store new settings when text input has been changed
$('#text-input').change(function() {
    chrome.storage.local.set({ "text": $("#text-input").val() });
});