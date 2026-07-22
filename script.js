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

let limit = 3;

if(buyer=="H&M"){
limit=3;
}
else if(buyer=="ZARA"){
limit=2;
}
else if(buyer=="C&A"){
limit=2.5;
}
else if(buyer=="PRIMARK"){
limit=3;
}

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
