//Trent Davis

var Count = 0;
var OutgingClue;
var TimeLeft;
var SetClue;

//Create array to index class of btns to find the send message and reset room button because there's no id attached on EscapeRoomMaster
buttons = document.getElementsByClassName('btn btn-sucess');
for (var i = 0, len = buttons.length; i < len; ++i) {}
console.log(buttons);

function saveClueandCount() {
  OutgoingClue = document.getElementById('gmLivePreviewText').innerHTML;
  TimeLeft = document.getElementById('gmTimeRemaining').innerHTML;
  Count += 1;
  console.log(OutgoingClue);
  console.log(Count);
}

function displayClue() {
  //Test Clue and time
  document.getElementById("gmLivePreviewText").innerHTML = "Be sure to brew all 4 potions to move forward...make sure that each of the ingredients sits on it's proper spot...then make sure to close the lid quickly";
  document.getElementById("gmTimeRemaining").innerHTML = "30";
}

function clearStorage(){
  //chrome.storage.local.clear(); -----> works but leaves fields undefined
  Count = 0;
  TimeLeft = 60;
  chrome.storage.local.set({ClearOrSetKey : SetClue}, function(){});
  chrome.storage.local.set({ClearClueKey: 'No clue sent yet'}, function(){});
  chrome.storage.local.set({ClearClueCount: 0}, function(){});
  chrome.storage.local.set({ClearTime: 60} , function(){});

}

//When a clue is put up on the screen, record it's data
buttons[0].onclick = function() {   //Send clue is INDEX_NUMBERth in btn-sucess list
  SetClue = true;
  chrome.storage.local.set({ClearOrSetKey : SetClue}, function(){});
  console.log(SetClue);
  displayClue();
  saveClueandCount();
  sendClueAndCount();

};

//When reset room is clicked, clear fields from previous room
buttons[1].onclick = function() {   //Reset room is INDEX_NUMBERth in btn-sucess list
  SetClue = false;
  clearStorage();

  console.log(SetClue);
  console.log("storage cleared!");
  console.log("Count is "+ Count);
  console.log("Time is now " + TimeLeft);
};

//Storage
function sendClueAndCount(){
    chrome.storage.local.set({ClueKey: OutgoingClue}, function() { //Store Clue
      //console.log('Clue is set to ' + OutgoingClue);
    });
    chrome.storage.local.set({ClueCountKey: Count}, function() {  //Store Clue Count
      //console.log('Count is set to ' + Count);
    });
    chrome.storage.local.set({TimeKey:TimeLeft}, function(){  //Store Time Sent
      //console.log('Time is set to' + TimeLeft);
    });
}
