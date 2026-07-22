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

let warpStatus=Math.abs(warp)<=3?"✅ PASS":"❌ FAIL";
let weftStatus=Math.abs(weft)<=3?"✅ PASS":"❌ FAIL";

document.getElementById("result").innerHTML=`

<h2>Test Result</h2>

<hr>

<p><b>Warp Shrinkage:</b> ${warp.toFixed(2)}%</p>

<p><b>Status:</b> ${warpStatus}</p>

<hr>

<p><b>Weft Shrinkage:</b> ${weft.toFixed(2)}%</p>

<p><b>Status:</b> ${weftStatus}</p>

`;

}
