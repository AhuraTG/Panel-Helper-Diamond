let diamondPanel = null;

function createDiamondPanel(){

if(diamondPanel) return;

diamondPanel = document.createElement("div");

Object.assign(diamondPanel.style,{
position:"fixed",
left:"75px",
bottom:"15px",
width:"300px",
background:"#111827",
borderRadius:"12px",
padding:"12px",
boxShadow:"0 0 20px rgba(0,0,0,.5)",
zIndex:"1000000",
display:"none"
});

diamondPanel.innerHTML = `

<div style="
color:#60a5fa;
font-size:18px;
font-weight:bold;
text-align:center;
margin-bottom:10px;
">
💎 Diamond
</div>

<button id="diamond-settings-btn" style="
width:100%;
padding:10px;
margin-bottom:8px;
background:#6d28d9;
color:white;
border:none;
border-radius:8px;
font-weight:bold;
cursor:pointer;
">
تنظیمات فرم درصد باخت
</button>

<button id="diamond-loss-btn" style="
width:100%;
padding:10px;
background:#8b5cf6;
color:white;
border:none;
border-radius:8px;
font-weight:bold;
cursor:pointer;
">
بررسی درصد باخت
</button>

`;

document.body.appendChild(diamondPanel);
setTimeout(()=>{
const settingsBtn =
document.getElementById("diamond-settings-btn");

if(settingsBtn){

settingsBtn.onclick = ()=>{

diamondPanel.innerHTML = `

<div style="
color:#60a5fa;
font-size:18px;
font-weight:bold;
text-align:center;
margin-bottom:10px;
">
💎 Diamond
</div>

<div style="
color:white;
margin-bottom:4px;
">
انتخاب پنل
</div>

<select
id="diamond-panel-select"
style="
width:100%;
padding:8px;
margin-bottom:10px;
border-radius:6px;
">

<option>JET BET</option>
<option>ACE BET</option>

</select>

<div style="
color:white;
margin-bottom:4px;
">
بررسی از تاریخ
</div>

<input
id="diamond-date-from"
type="date"
style="
width:100%;
padding:8px;
margin-bottom:10px;
border-radius:6px;
">

<div style="
color:white;
margin-bottom:4px;
">
بررسی تا تاریخ
</div>

<input
id="diamond-date-to"
type="date"
style="
width:100%;
padding:8px;
margin-bottom:10px;
border-radius:6px;
">

<div style="
color:white;
margin-bottom:4px;
">
انتخاب ماه میلادی
</div>

<select
id="diamond-month"
style="
width:100%;
padding:8px;
margin-bottom:10px;
border-radius:6px;
">

<option>January</option>
<option>February</option>
<option>March</option>
<option>April</option>
<option>May</option>
<option>June</option>
<option>July</option>
<option>August</option>
<option>September</option>
<option>October</option>
<option>November</option>
<option>December</option>

</select>

<button
id="diamond-save-settings"
style="
width:100%;
padding:10px;
background:#16a34a;
color:white;
border:none;
border-radius:8px;
font-weight:bold;
cursor:pointer;
">
ذخیره تنظیمات
</button>

`;

setTimeout(()=>{

const saveBtn =
document.getElementById("diamond-save-settings");

if(saveBtn){

saveBtn.onclick = ()=>{

const dateFrom =
document.getElementById("diamond-date-from").value;

const dateTo =
document.getElementById("diamond-date-to").value;

if(!dateFrom || !dateTo){

const errorBox =
document.createElement("div");

errorBox.innerText =
"تاریخ ها را انتخاب کنید";

Object.assign(errorBox.style,{
position:"fixed",
top:"15px",
left:"50%",
transform:"translateX(-50%)",
background:"#dc2626",
color:"#fff",
padding:"10px 20px",
borderRadius:"8px",
fontWeight:"bold",
zIndex:"9999999"
});

document.body.appendChild(errorBox);

setTimeout(()=>{

errorBox.remove();

},2000);

return;

}

localStorage.setItem(
"diamond_panel",
document.getElementById("diamond-panel-select").value
);

localStorage.setItem(
"diamond_date_from",
dateFrom
);

localStorage.setItem(
"diamond_date_to",
dateTo
);

localStorage.setItem(
"diamond_month",
document.getElementById("diamond-month").value
);

const successBox =
document.createElement("div");

successBox.innerText =
"تنظیمات ذخیره شد";

Object.assign(successBox.style,{
position:"fixed",
top:"15px",
left:"50%",
transform:"translateX(-50%)",
background:"#16a34a",
color:"#fff",
padding:"10px 20px",
borderRadius:"8px",
fontWeight:"bold",
zIndex:"9999999"
});

document.body.appendChild(successBox);

setTimeout(()=>{

successBox.remove();

},2000);

diamondPanel.remove();

diamondPanel = null;

createDiamondPanel();

diamondPanel.style.display = "block";

};
}

},50);

};

}

const lossBtn =
document.getElementById("diamond-loss-btn");

if(lossBtn){

lossBtn.onclick = ()=>{

showLossMenu();

setTimeout(()=>{

const affBtn =
document.getElementById("diamond-aff-btn");

if(affBtn){

affBtn.onclick = ()=>{

const affName =
document.getElementById("diamond-aff-name").value.trim();

if(!affName){

return;

}

affBtn.style.background =
"#16a34a";

affBtn.innerText =
"ثبت شد";
const successBox =
document.createElement("div");

successBox.innerText =
"افلیت کاربر ثبت شد";

Object.assign(successBox.style,{
position:"fixed",
top:"15px",
left:"50%",
transform:"translateX(-50%)",
background:"#16a34a",
color:"#fff",
padding:"10px 20px",
borderRadius:"8px",
fontWeight:"bold",
zIndex:"9999999"
});

document.body.appendChild(successBox);

setTimeout(()=>{

successBox.remove();

},2000);

};

}

},50);

setTimeout(()=>{

const depositBtn =
document.getElementById("diamond-deposit-btn");

if(depositBtn){

depositBtn.onclick = ()=>{

const depositTag =
[...document.querySelectorAll("span")]
.find(el =>
el.textContent.trim() === "Deposit"
);

if(!depositTag){

const errorBox =
document.createElement("div");

errorBox.innerText =
"وارد واریزی های کاربر شوید";

Object.assign(errorBox.style,{
position:"fixed",
top:"15px",
left:"50%",
transform:"translateX(-50%)",
background:"#dc2626",
color:"#fff",
padding:"10px 20px",
borderRadius:"8px",
fontWeight:"bold",
zIndex:"9999999"
});

document.body.appendChild(errorBox);

setTimeout(()=>{

errorBox.remove();

},2000);

return;

}

const totalDeposit =
document.querySelector(
"body > div.full_absolute > div.main_container > div.main_content > div.xw.mt15.mb15.p15.form_container > div.data_table_footer > div.right.right_align"
)?.innerText.trim();

if(!totalDeposit){

return;

}

localStorage.setItem(
"diamond_total_deposit",
totalDeposit
);

depositBtn.style.background =
"#16a34a";

depositBtn.innerText =
"🟢 واریزی ثبت شد";

const successBox =
document.createElement("div");

successBox.innerText =
"مقدار واریزی " +
totalDeposit +
" ثبت شد";

Object.assign(successBox.style,{
position:"fixed",
top:"15px",
left:"50%",
transform:"translateX(-50%)",
background:"#16a34a",
color:"#fff",
padding:"10px 20px",
borderRadius:"8px",
fontWeight:"bold",
zIndex:"9999999"
});

document.body.appendChild(successBox);

setTimeout(()=>{

successBox.remove();

},2000);

};

}

},50);

setTimeout(()=>{

const withdrawBtn =
document.getElementById("diamond-withdraw-btn");

if(withdrawBtn){

withdrawBtn.onclick = ()=>{

const successTag =
[...document.querySelectorAll("span")]
.find(el =>
el.textContent.trim() === "Success"
);

if(!successTag){

const errorBox =
document.createElement("div");

errorBox.innerText =
"وارد برداشت های کاربر شوید";

Object.assign(errorBox.style,{
position:"fixed",
top:"15px",
left:"50%",
transform:"translateX(-50%)",
background:"#dc2626",
color:"#fff",
padding:"10px 20px",
borderRadius:"8px",
fontWeight:"bold",
zIndex:"9999999"
});

document.body.appendChild(errorBox);

setTimeout(()=>{

errorBox.remove();

},2000);

return;

}

const totalWithdraw =
document.querySelector(
"body > div.full_absolute > div.main_container > div.main_content > div.xw.mt15.mb15.p15.form_container > div.data_table_footer > div:nth-child(2)"
)?.innerText.trim();

if(!totalWithdraw){

return;

}

localStorage.setItem(
"diamond_total_withdraw",
totalWithdraw
);

withdrawBtn.style.background =
"#16a34a";

withdrawBtn.innerText =
"🟢 برداشت ثبت شد";

const successBox =
document.createElement("div");

successBox.innerText =
"مقدار برداشت " +
totalWithdraw +
" ثبت شد";

Object.assign(successBox.style,{
position:"fixed",
top:"15px",
left:"50%",
transform:"translateX(-50%)",
background:"#16a34a",
color:"#fff",
padding:"10px 20px",
borderRadius:"8px",
fontWeight:"bold",
zIndex:"9999999"
});

document.body.appendChild(successBox);

setTimeout(()=>{

successBox.remove();

},2000);

};

}

const cashbackBtn =
document.getElementById("diamond-cashback-btn");

if(cashbackBtn){

cashbackBtn.onclick = ()=>{

diamondPanel.innerHTML = `

<div style="
color:#60a5fa;
font-size:18px;
font-weight:bold;
text-align:center;
margin-bottom:10px;
">
💎 کش بک دریافتی
</div>

<button
id="diamond-cashback-back"
style="
width:100%;
padding:10px;
background:#374151;
color:white;
border:none;
border-radius:8px;
font-weight:bold;
">
بازگشت
</button>

`;

setTimeout(()=>{

const cashbackBackBtn =
document.getElementById("diamond-cashback-back");

if(cashbackBackBtn){

cashbackBackBtn.onclick = ()=>{

diamondPanel.remove();

diamondPanel = null;

createDiamondPanel();

diamondPanel.style.display = "block";

setTimeout(()=>{

const lossBtn =
document.getElementById("diamond-loss-btn");

if(lossBtn){

lossBtn.click();

}

},100);

};

}

},50);

};

}

const profileBtn =
document.getElementById("diamond-profile-btn");

if(profileBtn){

profileBtn.onclick = ()=>{

const userInput =
document.getElementById("id");

if(!userInput){

const errorBox =
document.createElement("div");

errorBox.innerText =
"وارد پروفایل کاربر مورد نظر شوید";

Object.assign(errorBox.style,{
position:"fixed",
top:"15px",
left:"50%",
transform:"translateX(-50%)",
background:"#dc2626",
color:"#fff",
padding:"10px 20px",
borderRadius:"8px",
fontWeight:"bold",
zIndex:"9999999"
});

document.body.appendChild(errorBox);

setTimeout(()=>{

errorBox.remove();

},2000);

return;

}

const userId =
userInput.value;

const userName =
document.getElementById("name")?.value || "";

console.log(
document.querySelectorAll(".holder")
);

localStorage.setItem(
"diamond_user_id",
userId
);

localStorage.setItem(
"diamond_user_name",
userName
);

profileBtn.style.background =
"#16a34a";

profileBtn.innerText =
"🟢 پروفایل ثبت شد";

const successBox =
document.createElement("div");

successBox.innerText =
"پروفایل کاربر با یوزر " +
userId +
" ثبت شد";

Object.assign(successBox.style,{
position:"fixed",
top:"15px",
left:"50%",
transform:"translateX(-50%)",
background:"#16a34a",
color:"#fff",
padding:"10px 20px",
borderRadius:"8px",
fontWeight:"bold",
zIndex:"9999999"
});

document.body.appendChild(successBox);

setTimeout(()=>{

successBox.remove();

},2000);

};

}

},50);

setTimeout(()=>{

const backBtn =
document.getElementById("diamond-back-btn");

if(backBtn){

backBtn.onclick = ()=>{

diamondPanel.remove();

diamondPanel = null;

createDiamondPanel();

diamondPanel.style.display = "block";

};

}

},50);

setTimeout(()=>{

const newUserBtn =
document.getElementById("diamond-new-user-btn");

if(newUserBtn){

newUserBtn.onclick = ()=>{

localStorage.removeItem(
"diamond_aff_name"
);

document.getElementById(
"diamond-aff-name"
).value = "";

const affBtn =
document.getElementById("diamond-aff-btn");

if(affBtn){

affBtn.style.background =
"#dc2626";

affBtn.innerText =
"ثبت افلیت";

}

const profileBtn =
document.getElementById("diamond-profile-btn");

if(profileBtn){

profileBtn.style.background =
"#dc2626";

profileBtn.innerText =
"🔴 ثبت پروفایل کاربر";

}

const withdrawBtn =
document.getElementById("diamond-withdraw-btn");

if(withdrawBtn){

withdrawBtn.style.background =
"#dc2626";

withdrawBtn.innerText =
"🔴 ثبت مقدار برداشت";

}

const successBox =
document.createElement("div");

successBox.innerText =
"اطلاعات کاربر قبلی پاک شد";

Object.assign(successBox.style,{
position:"fixed",
top:"15px",
left:"50%",
transform:"translateX(-50%)",
background:"#16a34a",
color:"#fff",
padding:"10px 20px",
borderRadius:"8px",
fontWeight:"bold",
zIndex:"9999999"
});

document.body.appendChild(successBox);

setTimeout(()=>{

successBox.remove();

},2000);

};

}

},50);

};

}

},100);
}

function showLossMenu(){

diamondPanel.innerHTML = `

<div style="
color:#60a5fa;
font-size:18px;
font-weight:bold;
text-align:center;
margin-bottom:10px;
">
💎 Diamond
</div>

<div style="
display:flex;
gap:6px;
margin-bottom:10px;
">

<input
id="diamond-aff-name"
placeholder="Aff Name"
style="
flex:1;
padding:8px;
border-radius:6px;
border:none;
">

<button
id="diamond-aff-btn"
style="
width:70px;
background:#dc2626;
color:white;
border:none;
border-radius:6px;
cursor:pointer;
font-size:12px;
">
ثبت افلیت
</button>

</div>

<button
id="diamond-profile-btn"
style="
width:100%;
padding:10px;
margin-bottom:6px;
background:#dc2626;
color:white;
border:none;
border-radius:8px;
font-weight:bold;
cursor:pointer;
">
🔴 ثبت پروفایل کاربر
</button>

<button
id="diamond-deposit-btn"
style="
width:100%;
padding:10px;
margin-bottom:6px;
background:#dc2626;
color:white;
border:none;
border-radius:8px;
font-weight:bold;
">
🔴 ثبت مقدار واریزی
</button>

<button
id="diamond-withdraw-btn"
style="
width:100%;
padding:10px;
margin-bottom:6px;
background:#dc2626;
color:white;
border:none;
border-radius:8px;
font-weight:bold;
">
🔴 ثبت مقدار برداشت
</button>

<button
id="diamond-cashback-btn"
style="
width:100%;
padding:10px;
margin-bottom:6px;
background:#dc2626;
color:white;
border:none;
border-radius:8px;
font-weight:bold;
">
🔴 کش بک دریافتی
</button>

<button
style="
width:100%;
padding:10px;
margin-bottom:6px;
background:#dc2626;
color:white;
border:none;
border-radius:8px;
font-weight:bold;
">
🔴 مابقی برداشت
</button>

<button
style="
width:100%;
padding:10px;
margin-bottom:10px;
background:#dc2626;
color:white;
border:none;
border-radius:8px;
font-weight:bold;
">
🔴 شارژ دستی
</button>

<button
style="
width:100%;
padding:10px;
margin-bottom:8px;
background:#2563eb;
color:white;
border:none;
border-radius:8px;
font-weight:bold;
">
کپی فرم درصد باخت این کاربر
</button>

<button
id="diamond-new-user-btn"
style="
width:100%;
padding:10px;
margin-bottom:8px;
background:#f59e0b;
color:white;
border:none;
border-radius:8px;
font-weight:bold;
cursor:pointer;
">
بررسی کاربر جدید
</button>

<button
id="diamond-back-btn"
style="
width:100%;
padding:10px;
background:#374151;
color:white;
border:none;
border-radius:8px;
font-weight:bold;
">
بازگشت
</button>

`;

}

function toggleDiamondPanel(){

createDiamondPanel();

if(diamondPanel.style.display === "none"){

diamondPanel.style.display = "block";

}else{

diamondPanel.style.display = "none";

}

}

function createDiamondButton(){

if(document.getElementById("diamond-helper-btn")) return;

const btn = document.createElement("div");

btn.id = "diamond-helper-btn";

btn.innerText = "💎";

Object.assign(btn.style,{
position:"fixed",
left:"15px",
bottom:"15px",
width:"50px",
height:"50px",
borderRadius:"50%",
background:"#2563eb",
color:"#fff",
fontSize:"24px",
fontWeight:"bold",
display:"flex",
alignItems:"center",
justifyContent:"center",
cursor:"pointer",
zIndex:"999999",
boxShadow:"0 0 15px rgba(37,99,235,.8)"
});

document.body.appendChild(btn);

btn.onclick = ()=>{

toggleDiamondPanel();

};

}

function removeDiamondButton(){

const btn = document.getElementById("diamond-helper-btn");

if(btn) btn.remove();

if(diamondPanel){

diamondPanel.remove();

diamondPanel = null;

}

}

function checkState(){

chrome.storage.local.get(["diamondEnabled"],(result)=>{

if(result.diamondEnabled === true){

createDiamondButton();

}else{

removeDiamondButton();

}

});

}

chrome.storage.local.set({
diamondEnabled:false
});

checkState();

setInterval(checkState,1000);