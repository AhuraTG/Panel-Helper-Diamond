const toggle =
document.getElementById("toggle");

function updateButton(state){

const slider =
toggle.querySelector(".slider");

if(state){

toggle.className =
"switch on";

slider.innerText =
"ON";

}else{

toggle.className =
"switch off";

slider.innerText =
"OFF";

}

}

let enabled = false;

chrome.storage.local.get(
["diamondEnabled"],
(result)=>{

enabled =
result.diamondEnabled === true;

updateButton(enabled);

});

toggle.onclick = ()=>{

enabled = !enabled;

chrome.storage.local.set({
diamondEnabled:enabled
});

updateButton(enabled);

};
