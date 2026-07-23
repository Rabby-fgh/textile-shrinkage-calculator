function calculate(){

let warpBefore=parseFloat(document.getElementById("warpBefore").value);
let warpAfter=parseFloat(document.getElementById("warpAfter").value);

let weftBefore=parseFloat(document.getElementById("weftBefore").value);
let weftAfter=parseFloat(document.getElementById("weftAfter").value);

if(
isNaN(warpBefore)||
isNaN(warpAfter)||
isNaN(weftBefore)||
isNaN(weftAfter)
){
document.getElementById("result").innerHTML=
"<h3 style='color:red;'>Please enter all values.</h3>";
return;
}

let warp=((warpAfter-warpBefore)/warpBefore)*100;
let weft=((weftAfter-weftBefore)/weftBefore)*100;

let buyer = document.getElementById("buyer").value.trim().toUpperCase();

let limit = 5;



let warpStatus=Math.abs(warp)<=limit?"✅ PASS":"❌ FAIL";
let weftStatus=Math.abs(weft)<=limit?"✅ PASS":"❌ FAIL";
document.getElementById("result").innerHTML=`

<div class="report">

<div class="title">
TEXTILE LAB REPORT
</div>

<p><b>Buyer:</b> ${buyer}</p>
<p><b>Limit:</b> ±${limit}%</p>

<hr>

<div class="${Math.abs(warp)<=limit?'pass':'fail'}">
Warp : ${warp.toFixed(2)}% (${warpStatus})
</div>

<br>


<div class="${Math.abs(weft)<=limit?'pass':'fail'}">
Weft : ${weft.toFixed(2)}% (${weftStatus})
</div>

</div>

`;
}
function saveReport(){

let buyer=document.getElementById("buyer").value;
let style=document.getElementById("style").value;
let fabric=document.getElementById("fabric").value;
let operator=document.getElementById("operator").value;
let date=document.getElementById("date").value;

let report={
  id: reportId,
buyer,
style,
fabric,
operator,
date,
result:document.getElementById("result").innerText
};

let reports=JSON.parse(localStorage.getItem("reports"))||[];

reports.push(report);

localStorage.setItem("reports",JSON.stringify(reports));

alert("✅ Report Saved Successfully");
loadHistory();
}
function loadHistory(){

let reports = JSON.parse(localStorage.getItem("reports")) || [];
let reportId = "LAB-" + (reports.length + 1).toString().padStart(4,"0");

let search = document.getElementById("searchBox").value.toLowerCase();

let tbody = document.querySelector("#historyTable tbody");

tbody.innerHTML = "";

let pass = 0;
let fail = 0;

reports.forEach(function(report){

if(
!report.buyer.toLowerCase().includes(search) &&
!report.style.toLowerCase().includes(search)
){
return;
}

tbody.innerHTML += `
<tr>
<td>${report.id}</td>
<td>${report.buyer}</td>
<td>${report.style}</td>
<td>${report.date}</td>
<td>${report.result.substring(0,30)}...</td>
<td>
<button onclick="deleteReport(${reports.indexOf(report)})">
🗑 Delete
</button>
</td>
</tr>
`;

if(report.result.includes("PASS")){
pass++;
}else{
fail++;
}

});

document.getElementById("totalReports").innerText = reports.length;
document.getElementById("totalPass").innerText = pass;
document.getElementById("totalFail").innerText = fail;

let rate = reports.length == 0 ? 0 : (pass / reports.length) * 100;
document.getElementById("passRate").innerText = rate.toFixed(0) + "%";

}

window.onload = loadHistory;
function deleteReport(index){

let reports = JSON.parse(localStorage.getItem("reports")) || [];

if(confirm("Are you sure you want to delete this report?")){

reports.splice(index,1);

localStorage.setItem("reports",JSON.stringify(reports));

loadHistory();

}

}
function deleteAllReports(){

localStorage.removeItem("reports");

loadHistory();

}
