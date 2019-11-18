//console.log("hello from the content script");

var Count = 0;
var OutgingClue = '';
var TimeLeft;
var SetClue;


function saveClueandCount() {
  OutgoingClue = document.getElementById('gmLivePreviewText').innerHTML;
  Count += 1;
  console.log(OutgoingClue);
  console.log(Count);
}

function displayClue() {
  document.getElementById("gmLivePreviewText").innerHTML = "Be sure to brew all 4 potions to move forward...make sure that each of the ingridients sits on it's proper spot...then make sure to close the lid quickly";
}

function clearStorage(){
  //chrome.storage.local.clear(); -----> works but leaves fields undefined
  Count = 0;
  chrome.storage.local.set({ClearOrSetKey : SetClue}, function(){});
  chrome.storage.local.set({ClearClueKey: 'No clue sent yet'}, function(){});
  chrome.storage.local.set({ClearClueCount: 0}, function(){});

}

//When a clue is put up on the screen, record it's data
document.getElementById("button1").onclick = function() {
  SetClue = true;
  chrome.storage.local.set({ClearOrSetKey : SetClue}, function(){});
  //console.log(SetClue);
  displayClue();
  saveClueandCount();
  sendClueAndCount();

};

//When the reset room button is clicked, clear fields from previous room
document.getElementById("button2").onclick = function() {
  SetClue = false;
  clearStorage();

  //console.log(SetClue);
  //console.log("storage cleared!");
  //console.log("Count is "+ Count);
};

//Storage
function sendClueAndCount(){
    chrome.storage.local.set({ClueKey: OutgoingClue}, function() { //Store Clue
      //console.log('Value is set to ' + OutgoingClue);
    });
    chrome.storage.local.set({ClueCountKey: Count}, function() {  //Store Clue Count
      //console.log('Value is set to ' + Count);
    });
}
