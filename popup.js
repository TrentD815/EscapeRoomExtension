//Trent Davis

//Get set/clear boolean value
chrome.storage.local.get(['ClearOrSetKey'], function(result){
  SetClue = result.ClearOrSetKey;
  console.log("Local set is " + SetClue);

  //Determine if setting or clearing
  if (SetClue === true){
    chrome.storage.local.get(['ClueKey'], function(result) {
      document.getElementById("LatestClue").innerHTML = result.ClueKey;
    })

    chrome.storage.local.get(['ClueCountKey'], function(result) {
      document.getElementById("ClueCounter").innerHTML = result.ClueCountKey;
    })
    chrome.storage.local.get(['TimeKey'], function(result){
      document.getElementById("ClueTimestamp").innerHTML = result.TimeKey;
    })
  } else {
    chrome.storage.local.get(['ClearClueKey'], function(result){
      document.getElementById("LatestClue").innerHTML = result.ClearClueKey;
    })

    chrome.storage.local.get(['ClearClueCount'], function(result){
      document.getElementById("ClueCounter").innerHTML = result.ClearClueCount;
    })

    chrome.storage.local.get(['ClearTime'], function(result){
      document.getElementById("ClueTimestamp").innerHTML = result.ClearTime;
    })
  }

})
