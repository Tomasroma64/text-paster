$(document).ready(function() {

    chrome.storage.local.get('text', function(result) {

        $('#text-input').val(result.text);
    });

});


$('#text-input').change(function() {
    chrome.storage.local.set({ "text": $("#text-input").val() });
});