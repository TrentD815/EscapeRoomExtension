chrome.storage.local.get(['ClearOrSetKey'], function(result){
  SetClue = result.ClearOrSetKey;
  console.log("Local set is " + SetClue);

  if (SetClue === true){
    chrome.storage.local.get(['ClueKey'], function(result) {
      document.getElementById("LatestClue").innerHTML = result.ClueKey;
    })

    chrome.storage.local.get(['ClueCountKey'], function(result) {
      document.getElementById("ClueCounter").innerHTML = result.ClueCountKey;
    })
  } else {
    chrome.storage.local.get(['ClearClueKey'], function(result){
      document.getElementById("LatestClue").innerHTML = result.ClearClueKey;
    })

    chrome.storage.local.get(['ClearClueCount'], function(result){
      document.getElementById("ClueCounter").innerHTML = result.ClearClueCount;
    })
  }

})
