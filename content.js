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

const systemBtn =
document.getElementById("diamond-system-btn");

if(systemBtn){

systemBtn.onclick = ()=>{

document.getElementById(
"diamond-aff-name"
).value = "0-system";

};

}

const affBtn =
document.getElementById("diamond-aff-btn");

if(affBtn){

affBtn.onclick = ()=>{

const affName =
document.getElementById("diamond-aff-name").value.trim();

localStorage.setItem(
"diamond_aff_name",
affName
);

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

console.log(
localStorage.getItem(
"diamond_total_deposit"
)
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

<input
id="diamond-cashback-input"
type="text"
placeholder="مبلغ کش بک"
style="
width:100%;
padding:10px;
margin-bottom:8px;
background:#1f2937;
color:white;
border:none;
border-radius:8px;
box-sizing:border-box;
">

<button
id="diamond-cashback-add"
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
افزودن مبلغ </button>

<div
id="diamond-cashback-list"
style="
max-height:120px;
overflow:auto;
margin-bottom:8px;
">
</div>

<div
id="diamond-cashback-total"
style="
text-align:center;
font-weight:bold;
margin-bottom:8px;
color:#22c55e;
">
مجموع: 0
</div>

<button
id="diamond-cashback-save"
style="
width:100%;
padding:10px;
margin-bottom:8px;
background:#16a34a;
color:white;
border:none;
border-radius:8px;
font-weight:bold;
">
ثبت کش بک </button>

<button
id="diamond-cashback-reset"
style="
width:100%;
padding:10px;
margin-bottom:8px;
background:#dc2626;
color:white;
border:none;
border-radius:8px;
font-weight:bold;
">
ریست </button>

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
بازگشت </button>

`;


setTimeout(()=>{

const cashbackBackBtn =
document.getElementById("diamond-cashback-back");

let cashbackValues = [];


const cashbackInput =
document.getElementById("diamond-cashback-input");

cashbackInput.addEventListener("input",()=>{

cashbackInput.value =
cashbackInput.value.replace(
/[^0-9,]/g,
""
);

});

const cashbackAddBtn =
document.getElementById("diamond-cashback-add");

const cashbackList =
document.getElementById("diamond-cashback-list");

const cashbackTotal =
document.getElementById("diamond-cashback-total");

const cashbackSaveBtn =
document.getElementById("diamond-cashback-save");

const cashbackResetBtn =
document.getElementById("diamond-cashback-reset");


cashbackResetBtn.onclick = ()=>{

cashbackValues = [];

cashbackList.innerHTML = "";

cashbackTotal.innerText =
"مجموع: 0";

cashbackInput.value = "";

localStorage.removeItem(
"diamond_cashback"
);

localStorage.removeItem(
"diamond_cashback_list"
);

cashbackSaveBtn.style.background =
"#16a34a";

cashbackSaveBtn.innerText =
"ثبت کش بک";

};

const savedCashbackList =
JSON.parse(
localStorage.getItem(
"diamond_cashback_list"
) || "[]"
);

if(savedCashbackList.length){

cashbackValues =
savedCashbackList;

savedCashbackList.forEach(value=>{

cashbackList.innerHTML +=
`
<div style="
background:#1f2937;
padding:6px;
border-radius:6px;
margin-bottom:4px;
text-align:center;
">
${value.toLocaleString()}
</div>
`;

});

const total =
cashbackValues.reduce(
(a,b)=>a+b,
0
);

cashbackTotal.innerText =
"مجموع: " +
total.toLocaleString();

cashbackSaveBtn.style.background =
"#15803d";

cashbackSaveBtn.innerText =
"🟢 ثبت شد";

}

cashbackSaveBtn.onclick = ()=>{

const total =
cashbackValues.reduce(
(a,b)=>a+b,
0
);

localStorage.setItem(
"diamond_cashback",
total
);

localStorage.setItem(
"diamond_cashback_list",
JSON.stringify(cashbackValues)
);

cashbackSaveBtn.style.background =
"#15803d";

cashbackSaveBtn.innerText =
"🟢 ثبت شد";

const successBox =
document.createElement("div");

successBox.innerText =
"مجموع کش بک دریافتی " +
total.toLocaleString() +
" تومان ثبت شد";

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

document.body.appendChild(
successBox
);

setTimeout(()=>{

successBox.remove();

},3000);

};


cashbackAddBtn.onclick = ()=>{

const value =
parseInt(
cashbackInput.value.replaceAll(",","")
);

if(isNaN(value)){

return;

}

cashbackValues.push(value);

cashbackList.innerHTML +=
`
<div style="
background:#1f2937;
padding:6px;
border-radius:6px;
margin-bottom:4px;
text-align:center;
">
${value.toLocaleString()}
</div>
`;

const total =
cashbackValues.reduce(
(a,b)=>a+b,
0
);

cashbackTotal.innerText =
"مجموع: " +
total.toLocaleString();

cashbackInput.value = "";

cashbackSaveBtn.style.background =
"#16a34a";

cashbackSaveBtn.innerText =
"ثبت کش بک";

};

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

const remainingWithdrawBtn =
document.getElementById(
"diamond-remaining-withdraw-btn"
);

if(remainingWithdrawBtn){

remainingWithdrawBtn.onclick = ()=>{

diamondPanel.innerHTML = `

<div style="
color:#60a5fa;
font-size:18px;
font-weight:bold;
text-align:center;
margin-bottom:10px;
">
💎 مابقی برداشت
</div>

<input
id="diamond-remaining-input"
type="text"
placeholder="مبلغ مابقی برداشت"
style="
width:100%;
padding:10px;
margin-bottom:8px;
background:#1f2937;
color:white;
border:none;
border-radius:8px;
box-sizing:border-box;
">

<button
id="diamond-remaining-add"
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
افزودن مبلغ
</button>

<div
id="diamond-remaining-list"
style="
max-height:120px;
overflow:auto;
margin-bottom:8px;
">
</div>

<div
id="diamond-remaining-total"
style="
text-align:center;
font-weight:bold;
margin-bottom:8px;
color:#22c55e;
">
مجموع: 0
</div>

<button
id="diamond-remaining-save"
style="
width:100%;
padding:10px;
margin-bottom:8px;
background:#16a34a;
color:white;
border:none;
border-radius:8px;
font-weight:bold;
">
ثبت مابقی برداشت
</button>

<button
id="diamond-remaining-reset"
style="
width:100%;
padding:10px;
margin-bottom:8px;
background:#dc2626;
color:white;
border:none;
border-radius:8px;
font-weight:bold;
">
ریست
</button>

<button
id="diamond-remaining-back"
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

let remainingValues = [];

const remainingInput =
document.getElementById(
"diamond-remaining-input"
);

remainingInput.addEventListener(
"input",
()=>{

remainingInput.value =
remainingInput.value.replace(
/[^0-9,]/g,
""
);

}
);

const remainingAddBtn =
document.getElementById(
"diamond-remaining-add"
);

const remainingList =
document.getElementById(
"diamond-remaining-list"
);

const remainingTotal =
document.getElementById(
"diamond-remaining-total"
);

const remainingSaveBtn =
document.getElementById(
"diamond-remaining-save"
);

const remainingResetBtn =
document.getElementById(
"diamond-remaining-reset"
);

const savedRemainingList =
JSON.parse(
localStorage.getItem(
"diamond_remaining_withdraw_list"
) || "[]"
);

if(savedRemainingList.length){

remainingValues =
savedRemainingList;

savedRemainingList.forEach(value=>{

remainingList.innerHTML +=
`
<div style="
background:#1f2937;
padding:6px;
border-radius:6px;
margin-bottom:4px;
text-align:center;
">
${value.toLocaleString()}
</div>
`;

});

const total =
remainingValues.reduce(
(a,b)=>a+b,
0
);

remainingTotal.innerText =
"مجموع: " +
total.toLocaleString();

remainingSaveBtn.style.background =
"#15803d";

remainingSaveBtn.innerText =
"🟢 ثبت شد";

}

remainingSaveBtn.onclick = ()=>{

const total =
remainingValues.reduce(
(a,b)=>a+b,
0
);

localStorage.setItem(
"diamond_remaining_withdraw",
total
);

localStorage.setItem(
"diamond_remaining_withdraw_list",
JSON.stringify(
remainingValues
)
);

remainingSaveBtn.style.background =
"#15803d";

remainingSaveBtn.innerText =
"🟢 ثبت شد";

const successBox =
document.createElement("div");

successBox.innerText =
"مجموع مابقی برداشت " +
total.toLocaleString() +
" تومان ثبت شد";

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

document.body.appendChild(
successBox
);

setTimeout(()=>{

successBox.remove();

},3000);

};

remainingResetBtn.onclick = ()=>{

remainingValues = [];

remainingList.innerHTML = "";

remainingTotal.innerText =
"مجموع: 0";

remainingInput.value = "";

localStorage.removeItem(
"diamond_remaining_withdraw"
);

localStorage.removeItem(
"diamond_remaining_withdraw_list"
);

localStorage.removeItem(
"diamond_manual_charge"
);

localStorage.removeItem(
"diamond_manual_charge_list"
);

remainingSaveBtn.style.background =
"#16a34a";

remainingSaveBtn.innerText =
"ثبت مابقی برداشت";

};

const remainingBackBtn =
document.getElementById(
"diamond-remaining-back"
);

if(remainingBackBtn){

remainingBackBtn.onclick = ()=>{

diamondPanel.remove();

diamondPanel = null;

createDiamondPanel();

diamondPanel.style.display = "block";

setTimeout(()=>{

const lossBtn =
document.getElementById(
"diamond-loss-btn"
);

if(lossBtn){

lossBtn.click();

}

},100);

};

}

remainingAddBtn.onclick = ()=>{

const value =
parseInt(
remainingInput.value.replaceAll(
",",
""
)
);

if(isNaN(value)){

return;

}

remainingValues.push(value);

remainingList.innerHTML += `
<div style="
background:#1f2937;
padding:6px;
border-radius:6px;
margin-bottom:4px;
text-align:center;
">
${value.toLocaleString()}
</div>
`;

const total =
remainingValues.reduce(
(a,b)=>a+b,
0
);

remainingTotal.innerText =
"مجموع: " +
total.toLocaleString();

remainingInput.value = "";

remainingSaveBtn.style.background =
"#16a34a";

remainingSaveBtn.innerText =
"ثبت مابقی برداشت";

};

},50);

};
}

const manualChargeBtn =
document.getElementById(
"diamond-manual-charge-btn"
);

if(manualChargeBtn){

manualChargeBtn.onclick = ()=>{

diamondPanel.innerHTML = `

<div style="
color:#60a5fa;
font-size:18px;
font-weight:bold;
text-align:center;
margin-bottom:10px;
">
💎 شارژ دستی
</div>

<input
id="diamond-manual-input"
type="text"
placeholder="مبلغ شارژ دستی"
style="
width:100%;
padding:10px;
margin-bottom:8px;
background:#1f2937;
color:white;
border:none;
border-radius:8px;
box-sizing:border-box;
">

<button
id="diamond-manual-add"
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
افزودن مبلغ
</button>

<div
id="diamond-manual-list"
style="
max-height:120px;
overflow:auto;
margin-bottom:8px;
">
</div>

<div
id="diamond-manual-total"
style="
text-align:center;
font-weight:bold;
margin-bottom:8px;
color:#22c55e;
">
مجموع: 0
</div>

<button
id="diamond-manual-save"
style="
width:100%;
padding:10px;
margin-bottom:8px;
background:#16a34a;
color:white;
border:none;
border-radius:8px;
font-weight:bold;
">
ثبت شارژ دستی
</button>

<button
id="diamond-manual-reset"
style="
width:100%;
padding:10px;
margin-bottom:8px;
background:#dc2626;
color:white;
border:none;
border-radius:8px;
font-weight:bold;
">
ریست
</button>

<button
id="diamond-manual-back"
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

let manualValues = [];

const manualInput =
document.getElementById(
"diamond-manual-input"
);

manualInput.addEventListener(
"input",
()=>{

manualInput.value =
manualInput.value.replace(
/[^0-9,]/g,
""
);

}
);

const manualAddBtn =
document.getElementById(
"diamond-manual-add"
);

const manualList =
document.getElementById(
"diamond-manual-list"
);

const manualTotal =
document.getElementById(
"diamond-manual-total"
);

const manualSaveBtn =
document.getElementById(
"diamond-manual-save"
);

const manualResetBtn =
document.getElementById(
"diamond-manual-reset"
);

const manualBackBtn =
document.getElementById(
"diamond-manual-back"
);

const savedManualList =
JSON.parse(
localStorage.getItem(
"diamond_manual_charge_list"
) || "[]"
);

if(savedManualList.length){

manualValues =
savedManualList;

savedManualList.forEach(value=>{

manualList.innerHTML +=
`
<div style="
background:#1f2937;
padding:6px;
border-radius:6px;
margin-bottom:4px;
text-align:center;
">
${value.toLocaleString()}
</div>
`;

});

const total =
manualValues.reduce(
(a,b)=>a+b,
0
);

manualTotal.innerText =
"مجموع: " +
total.toLocaleString();

manualSaveBtn.style.background =
"#15803d";

manualSaveBtn.innerText =
"🟢 ثبت شد";

}

manualSaveBtn.onclick = ()=>{

const total =
manualValues.reduce(
(a,b)=>a+b,
0
);

localStorage.setItem(
"diamond_manual_charge",
total
);

localStorage.setItem(
"diamond_manual_charge_list",
JSON.stringify(
manualValues
)
);

manualSaveBtn.style.background =
"#15803d";

manualSaveBtn.innerText =
"🟢 ثبت شد";

const successBox =
document.createElement("div");

successBox.innerText =
"مجموع شارژ دستی " +
total.toLocaleString() +
" تومان ثبت شد";

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

document.body.appendChild(
successBox
);

setTimeout(()=>{

successBox.remove();

},3000);

};

manualResetBtn.onclick = ()=>{

manualValues = [];

manualList.innerHTML = "";

manualTotal.innerText =
"مجموع: 0";

manualInput.value = "";

localStorage.removeItem(
"diamond_manual_charge"
);

localStorage.removeItem(
"diamond_manual_charge_list"
);

manualSaveBtn.style.background =
"#16a34a";

manualSaveBtn.innerText =
"ثبت شارژ دستی";

};

if(manualBackBtn){

manualBackBtn.onclick = ()=>{

diamondPanel.remove();

diamondPanel = null;

createDiamondPanel();

diamondPanel.style.display = "block";

setTimeout(()=>{

const lossBtn =
document.getElementById(
"diamond-loss-btn"
);

if(lossBtn){

lossBtn.click();

}

},100);

};

}

manualAddBtn.onclick = ()=>{

const value =
parseInt(
manualInput.value.replaceAll(
",",
""
)
);

if(isNaN(value)){

return;

}

manualValues.push(value);

manualList.innerHTML += `
<div style="
background:#1f2937;
padding:6px;
border-radius:6px;
margin-bottom:4px;
text-align:center;
">
${value.toLocaleString()}
</div>
`;

const total =
manualValues.reduce(
(a,b)=>a+b,
0
);

manualTotal.innerText =
"مجموع: " +
total.toLocaleString();

manualInput.value = "";

manualSaveBtn.style.background =
"#16a34a";

manualSaveBtn.innerText =
"ثبت شارژ دستی";

};

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

const holders =
document.querySelectorAll(".holder");

let totalDeposit = "";
let totalWithdraw = "";
let systemProfit = "";

holders.forEach(holder=>{

const caption =
holder.querySelector(".caption")
?.innerText
?.trim();

const value =
holder.querySelector("input")
?.value || "";

if(caption === "Deposit:"){

totalDeposit = value;

}

if(caption === "Withdraw:"){

totalWithdraw = value;

}

if(caption === "System Profit:"){

systemProfit = value;

}

});

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

localStorage.setItem(
"diamond_profile_total_deposit",
totalDeposit
);

localStorage.setItem(
"diamond_profile_total_withdraw",
totalWithdraw
);

localStorage.setItem(
"diamond_profile_system_profit",
systemProfit
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

localStorage.removeItem(
"diamond_cashback"
);

localStorage.removeItem(
"diamond_cashback_list"
);

localStorage.removeItem(
"diamond_remaining_withdraw"
);

localStorage.removeItem(
"diamond_remaining_withdraw_list"
);

localStorage.removeItem(
"diamond_total_deposit"
);

localStorage.removeItem(
"diamond_total_withdraw"
);

localStorage.removeItem(
"diamond_user_id"
);

localStorage.removeItem(
"diamond_user_name"
);

localStorage.removeItem(
"diamond_profile_total_deposit"
);

localStorage.removeItem(
"diamond_profile_total_withdraw"
);

localStorage.removeItem(
"diamond_profile_system_profit"
);

document.getElementById(
"diamond-aff-name"
).value = "";

const affBtn =
document.getElementById("diamond-aff-btn");

const affInput =
document.getElementById("diamond-aff-name");

if(
affInput &&
affBtn
){

affInput.addEventListener(
"input",
()=>{

affBtn.style.background =
"#dc2626";

affBtn.innerText =
"ثبت افلیت";

}
);

}

if(affBtn){

affBtn.style.background =
"#dc2626";

affBtn.innerText =
"ثبت افلیت";

}

const depositBtn =
document.getElementById("diamond-deposit-btn");

if(depositBtn){

depositBtn.style.background =
"#dc2626";

depositBtn.innerText =
"🔴 ثبت مقدار واریزی";

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

const cashbackBtn =
document.getElementById("diamond-cashback-btn");

if(cashbackBtn){

cashbackBtn.style.background =
"#dc2626";

cashbackBtn.innerText =
"🔴 کش بک دریافتی";

}

const remainingWithdrawBtn =
document.getElementById(
"diamond-remaining-withdraw-btn"
);

if(remainingWithdrawBtn){

remainingWithdrawBtn.style.background =
"#dc2626";

remainingWithdrawBtn.innerText =
"🔴 مابقی برداشت";

}

const manualChargeBtn =
document.getElementById(
"diamond-manual-charge-btn"
);

if(manualChargeBtn){

manualChargeBtn.style.background =
"#dc2626";

manualChargeBtn.innerText =
"🔴 شارژ دستی";

}

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
margin-bottom:8px;
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
id="diamond-system-btn"
style="
width:80px;
background:#2563eb;
color:white;
border:none;
border-radius:6px;
cursor:pointer;
font-size:12px;
">
افلیت سیستم
</button>

</div>

<button
id="diamond-aff-btn"
style="
width:100%;
padding:10px;
margin-bottom:8px;
background:#dc2626;
color:white;
border:none;
border-radius:8px;
font-weight:bold;
cursor:pointer;
">
ثبت افلیت
</button>

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
id="diamond-remaining-withdraw-btn"
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
id="diamond-manual-charge-btn"
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

setTimeout(()=>{

const cashbackBtn =
document.getElementById(
"diamond-cashback-btn"
);

const affInput =
document.getElementById(
"diamond-aff-name"
);

const savedAff =
localStorage.getItem(
"diamond_aff_name"
);

if(
affInput &&
savedAff
){

affInput.value =
savedAff;

const affBtn =
document.getElementById(
"diamond-aff-btn"
);

if(affBtn){

affBtn.style.background =
"#16a34a";

affBtn.innerText =
"ثبت شد";

}

}

const savedCashback =
localStorage.getItem(
"diamond_cashback"
);

if(
cashbackBtn &&
savedCashback !== null
){

cashbackBtn.style.background =
"#15803d";

cashbackBtn.innerText =
"🟢 کش بک ثبت شد";

}

const remainingWithdrawBtn =
document.getElementById(
"diamond-remaining-withdraw-btn"
);

if(
remainingWithdrawBtn &&
localStorage.getItem(
"diamond_remaining_withdraw"
) !== null
){

remainingWithdrawBtn.style.background =
"#15803d";

remainingWithdrawBtn.innerText =
"🟢 مابقی برداشت ثبت شد";

}

const manualChargeBtn =
document.getElementById(
"diamond-manual-charge-btn"
);

if(
manualChargeBtn &&
localStorage.getItem(
"diamond_manual_charge"
) !== null
){

manualChargeBtn.style.background =
"#15803d";

manualChargeBtn.innerText =
"🟢 شارژ دستی ثبت شد";

}

const profileBtn =
document.getElementById(
"diamond-profile-btn"
);

if(
profileBtn &&
localStorage.getItem(
"diamond_user_id"
)
){

profileBtn.style.background =
"#16a34a";

profileBtn.innerText =
"🟢 پروفایل ثبت شد";

}

const depositBtn =
document.getElementById(
"diamond-deposit-btn"
);

if(
depositBtn &&
localStorage.getItem(
"diamond_total_deposit"
)
){

depositBtn.style.background =
"#16a34a";

depositBtn.innerText =
"🟢 واریزی ثبت شد";

}

const withdrawBtn =
document.getElementById(
"diamond-withdraw-btn"
);

if(
withdrawBtn &&
localStorage.getItem(
"diamond_total_withdraw"
)
){

withdrawBtn.style.background =
"#16a34a";

withdrawBtn.innerText =
"🟢 برداشت ثبت شد";

}

},50);

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