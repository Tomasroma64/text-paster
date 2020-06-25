document.getElementById('updateemoji').onclick = () => {
    chrome.storage.local.set({ "text": document.getElementById("text-input").value });
};