roopb();
let rootxa=0,rootba=0,rooloa=0,rootxba=false;
const idtx=document.getElementById('tc');
if(localStorage.hion==undefined){
localStorage.hion=1;
}
function tsc(tsca,tscb,time){

setTimeout(function(){
idtx.style.transition = "0.3s";idtx.style.marginTop = "-96px";
},time);

setTimeout(function(){
idtx.style.transition = "0.3s";idtx.style.marginTop = "96px";
document.getElementById("tcp").innerHTML=`<spen style="margin-right:10px;margin-left:-10px;">`+tsca+`</spen>`+tscb;
},100);
}
if(localStorage.tx==undefined||localStorage.tx==1){
tsc("✿","欢迎!祝你使用愉快_",3000);
document.getElementById("rootx_bc").style.background="#eee";
}else{
if(localStorage.tx==2){
GetOldPoems().then(data=>{
tsc("✿",data,5000);
rootxba=true;
document.getElementById("rootx_bc").style.background="#DB000A";
document.getElementById("rootx_b").style.background="#eee";
rootxa=1;
});
}else{
document.getElementById("rootx_b").style.background="#eee";
rootxa=1;
}
}

async function GetOldPoems(){
let Data = await fetch('https://api.apiopen.top/api/sentences',{method: 'GET'}).then((res)=>{
if (res.ok) {
return res.text()
}
}).then(data =>{
return data;
})
return JSON.parse(Data).result.name
}


if(localStorage.lo==undefined){

}else{
if(localStorage.lo==1){
roologo();
}
}
if(localStorage.bl==undefined){

}else{
if(localStorage.bl==1){
document.getElementById("roobl_b").style.background="#DB000A";
document.body.style.background= "#2B2B2B";
document.getElementById("yue_black").style.display= "inline";
document.getElementById("div_ipt").style.background= "#2B2B2B";
document.getElementById("div_ul").style.background= "#2B2B2B";
document.getElementById("div_ipt_di").style.background= "#2B2B2B";
document.getElementById("di_ipt").style.background="#cccccc";
rootba=1;
}else{
document.getElementById("roobl_b").style.background="#eee";
document.body.style.background= "white";
document.getElementById("div_ipt").style.background= "white";
document.getElementById("div_ipt_di").style.background= "white";
document.getElementById("yue_black").style.display= "none";
document.getElementById("div_ul").style.background= "white";
document.getElementById("di_ipt").style.background="white";
rootba=0;
}
}
function roopb(){
var sizeb = 0;
  for(item in window.localStorage) {
    if(window.localStorage.hasOwnProperty(item)) {
      sizeb += window.localStorage.getItem(item).length;
    }
  }

  document.getElementById("roo_p_b").innerHTML=`清理数据<span style="color:rgb(0%, 0%, 0%,35%);Float:right;margin-right:5vw;">`+(sizeb / 1024).toFixed(2) + "KB</span>";
}
window.onstorage = function () {
roopb()
}
var way;
var starimq=document.getElementById('star_im');
var starscimq=document.getElementById('starsc_im');
locstar();
if(localStorage.s==undefined){
var i=[0];
}else{
var i=JSON.parse(localStorage.s);}
function locstar(){
if(localStorage.s==undefined){
document.getElementById("starb").innerHTML="";
}else{
var i=JSON.parse(localStorage.s);
var u=1;
document.getElementById("starb").innerHTML="";
for(var y=1;y <= i[0];y++){

if(i[u]==""){
document.getElementById("starb").innerHTML+=`<div data-img="`+i[u+2]+`" oncontextmenu="starq(`+u+`)" onclick="starba(this)">
<img src="acquiesce.png" >
<p class="starb_p" >`+i[u+1].charAt(0)+`</p>
<p class="starb_n">`+i[u+1]+`</p>
</div>`;
}else{
document.getElementById("starb").innerHTML+=`<div data-img="`+i[u+2]+`" oncontextmenu="starq(`+u+`)" onclick="starba(this)">
<img src="`+i[u]+`" >

<p class="starb_n">`+i[u+1]+`</p>
</div>`;
}

u=u+3;
}
}
}
function starim(){
document.getElementById("star_im").src=document.getElementById("star_int_b").value;
document.getElementById("star_im_p").style.display="none";
starimn=1;
}
var starimn=0;
var starscimn=0;
starimq.onerror =function (){
document.getElementById("star_im").src="acquiesce.png";
document.getElementById("star_im_p").style.display="flex";
starimn=0;
}

function rootxb(){
if(rootxba==false){
document.getElementById("rootx_bc").style.background="#DB000A";
document.getElementById("rootx_b").style.background="#eee";
localStorage.tx=2;
}else{
document.getElementById("rootx_bc").style.background="#eee";
localStorage.tx=0;
}
}
function rootx(){
rootxa=rootxa+1;
if(rootxa==2){
rootxa=0;
}
if(rootxa==1){
document.getElementById("rootx_b").style.background="#eee";
localStorage.tx=0;
}
if(rootxa==0){
document.getElementById("rootx_b").style.background="#DB000A";
document.getElementById("rootx_bc").style.background="#eee";
localStorage.tx=1;
}
}
function roobl(){
rootba=rootba+1;
if(rootba==2){
rootba=0;
}
if(rootba==0){
document.getElementById("roobl_b").style.background="#eee";
document.body.style.background= "white";
document.getElementById("div_ipt").style.background= "white";
document.getElementById("yue_black").style.display= "none";
document.getElementById("div_ul").style.background= "white";
document.getElementById("di_ipt").style.background="white";
document.getElementById("div_ipt_di").style.background="white";
localStorage.bl=0;
}
if(rootba==1){
document.getElementById("roobl_b").style.background="#DB000A";
document.getElementById("di_ipt").style.background="#cccccc";
document.body.style.background= "#2B2B2B";
document.getElementById("div_ipt").style.background= "#2B2B2B";
document.getElementById("div_ipt_di").style.background= "#2B2B2B";
document.getElementById("yue_black").style.display= "inline";
document.getElementById("div_ul").style.background= "#2B2B2B";
localStorage.bl=1;
}
}
function roologo(){
rooloa=rooloa+1;
if(rooloa==2){
rooloa=0;
}
if(rooloa==0){
document.getElementById("roologo_b").style.background="#eee";
document.getElementById("ki").style.display="none";
localStorage.lo=0;
}
if(rooloa==1){
document.getElementById("roologo_b").style.background="#DB000A";
document.getElementById("ki").style.display="inline";

localStorage.lo=1;
}
}
function starscim(){
document.getElementById("starsc_im").src=document.getElementById("starsc_i").value;
document.getElementById("starsc_im_p").style.display="none";
starscimn=1;
}
starscimq.onerror =function (){
document.getElementById("starsc_im").src="acquiesce.png";
document.getElementById("starsc_im_p").style.display="flex";
starscimn=0;
}
function starna(){
if(document.getElementById("star_int_n").value.charAt(0)==""){
document.getElementById("star_im_p").innerHTML="默";
}else{
document.getElementById("star_im_p").innerHTML=document.getElementById("star_int_n").value.charAt(0); 
  }
  }
function starscna(){
if(document.getElementById("starsc_n").value.charAt(0)==""){
document.getElementById("starsc_im_p").innerHTML="默";
}else{
document.getElementById("starsc_im_p").innerHTML=document.getElementById("starsc_n").value.charAt(0); 
  }
  }
if(localStorage.way==undefined){
way='https://m.baidu.com/s?word=';
}else{
way=localStorage.way;
}
var wayx;
if(localStorage.wayj==undefined){
wayx=1;
}else{
wayx=localStorage.wayj;
}
function staryes(){
if(document.getElementById("star_int_u").value.trim()==""){
return
}
if(document.getElementById("star_int_n").value.trim()==""){
return
}
if(document.getElementById("star_int_u").value.substr(0,8)=="https://"||document.getElementById("star_int_u").value.substr(0,7)=="http://"){
}else{
return
}
starno();

if(starimn==1){

i.push(document.getElementById("star_int_b").value,document.getElementById("star_int_n").value,document.getElementById("star_int_u").value);
}else{
i.push('',document.getElementById("star_int_n").value,document.getElementById("star_int_u").value);
}
i[0]=i[0]+1;
localStorage.s=JSON.stringify(i);
locstar();
roopb();
document.getElementById("star_int_n").value="";
document.getElementById("star_int_u").value="https://";
document.getElementById("star_int_b").value="";
document.getElementById("star_im_p").innerHTML="默";
document.getElementById("star_im").src="acquiesce.png";
document.getElementById("star_im_p").style.display="flex";
starimn=0;
}
var idstarb=document.getElementById('star_b');
var idstar=document.getElementById('star');
var idstarsc=document.getElementById('starsc');
var idstarscb=document.getElementById('starsc_b');
var idstarsq=document.getElementById('starsq');
function rooba(){
roo();
setTimeout(function(){
idstar.style.transition = "0.3s";idstar.style.marginTop = "0vh";
idstarb.style.transition = "0.3s";idstarb.style.opacity = "1";
idstar.style.transition = "0.3s";idstar.style.opacity = "1";
},300);
idstarb.style.display="inline";
idstar.style.display="inline";
}

function starsc(){
starqn();
document.getElementById("starsc_u").value=i[starqb+2];
if(i[starqb]==''){
document.getElementById("starsc_i").value="";
document.getElementById("starsc_im").src="acquiesce.png";
starscimn=0;
document.getElementById("starsc_im_p").style.display="flex";
}else{
document.getElementById("starsc_i").value=i[starqb];
document.getElementById("starsc_im").src=i[starqb];
document.getElementById("starsc_im_p").style.display="none";
starscimn=1;
}
document.getElementById("starsc_n").value=i[starqb+1];
document.getElementById("starsc_im_p").innerHTML=i[starqb+1].charAt(0);
setTimeout(function(){
idstarsc.style.transition = "0.3s";idstarsc.style.marginTop = "0vh";
idstarscb.style.transition = "0.3s";idstarscb.style.opacity = "1";
idstarsc.style.transition = "0.3s";idstarsc.style.opacity = "1";
idstarscb.style.display="inline";
},300);
idstarscb.style.display="inline";
idstarsc.style.display="inline";
}
function starscyes(){
starscno();
i.splice(starqb,3);
i[0]=i[0]-1;
localStorage.s=JSON.stringify(i);
locstar();
roopb();
}
function starscdon(){
if(document.getElementById("starsc_u").value.trim()==""){
return
}
if(document.getElementById("starsc_n").value.trim()==""){
return
}
starscno();


if(starscimn==1){
i[starqb]=document.getElementById("starsc_i").value;
i[starqb+1]=document.getElementById("starsc_n").value;
i[starqb+2]=document.getElementById("starsc_u").value;
}else{
i[starqb]="";
i[starqb+1]=document.getElementById("starsc_n").value;
i[starqb+2]=document.getElementById("starsc_u").value;
}
localStorage.s=JSON.stringify(i);
locstar();roopb();
}
function starscno(){
starqn()
setTimeout(function(){
idstarscb.style.display="none";
idstarsc.style.display="none";
},300);
idstarsc.style.transition = "0.3s";idstarsc.style.marginTop = "5vh";
idstarscb.style.transition = "0.3s";idstarscb.style.opacity = "0";
idstarsc.style.transition = "0.3s";idstarsc.style.opacity = "0";

}
starscno();
function starno(){
setTimeout(function(){
idstarb.style.display="none";
idstar.style.display="none";
},300);
idstar.style.transition = "0.3s";idstar.style.marginTop = "5vh";
idstarb.style.transition = "0.3s";idstarb.style.opacity = "0";
idstar.style.transition = "0.3s";idstar.style.opacity = "0";
}

starno();
function starba(starurl){
let sytaroo=starurl.getAttribute("data-img");
window.location.assign(sytaroo)
}

var a=document.getElementById("div_di_ul").getElementsByTagName("li");
a[wayx].style.background="#DB000A";
a[wayx].style.color="white";

document.getElementById('zd_ipt').value=way;
function xway(ways,wayj){
way=ways;
var a=document.getElementById("div_di_ul").getElementsByTagName("li");
for(var i=0;i<=8;i++){
a[i].style.background="white";
a[i].style.color="black";
}
a[wayj].style.background="#DB000A";
a[wayj].style.color="white";
localStorage.setItem("way",way);
localStorage.setItem("wayj",wayj);

setTimeout(function(){
xlway();},200)
}
var divdidiv=document.getElementById("div_di_div");
var divdi=document.getElementById("div_di");
var zddi=document.getElementById("div_di_zd");
xlway();
zdno();
function xlway(){
setTimeout(function(){
divdidiv.style.display="none";
divdi.style.display="none";
},300);
divdi.style.transition = "0.3s";divdi.style.marginTop = "5vh";
divdidiv.style.transition = "0.3s";divdidiv.style.opacity = "0";
divdi.style.transition = "0.3s";divdi.style.opacity = "0";
zdno();
}

function zd(){
setTimeout(function(){
divdi.style.display="none";
},300);
divdi.style.transition = "0.3s";divdi.style.marginTop = "5vh";
divdi.style.transition = "0.3s";divdi.style.opacity = "0";
zdb();
}
function zdno(){
setTimeout(function(){
divdidiv.style.display="none";
zddi.style.display="none";
},300);
zddi.style.transition = "0.3s";zddi.style.marginTop = "5vh";
divdidiv.style.transition = "0.3s";divdidiv.style.opacity = "0";
zddi.style.transition = "0.3s";zddi.style.opacity = "0";
}
function zdyes(zdj){
if(document.getElementById('zd_ipt').value.startsWith("https://")==false&document.getElementById('zd_ipt').value.startsWith("http://")==false){
tsc("!","请输入正确的链接",3000);
return
}
var a=document.getElementById("div_di_ul").getElementsByTagName("li");
for(var i=0;i<=8;i++){
a[i].style.background="white";
a[i].style.color="black";
}
a[0].style.background="#DB000A";
a[0].style.color="white";
localStorage.setItem("wayj",zdj);

zdno();
way=document.getElementById('zd_ipt').value;
localStorage.setItem("way",way);

}
function zdb(){
setTimeout(function(){
zddi.style.transition = "0.3s";zddi.style.marginTop = "0vh";
divdidiv.style.transition = "0.3s";divdidiv.style.opacity = "1";
zddi.style.transition = "0.3s";zddi.style.opacity = "1";
},300);
divdidiv.style.display="inline";
zddi.style.display="inline";
}
let hu=null;
function feela(){
clearTimeout(hu);
hu=setTimeout(function () {
feel();
clearTimeout(hu);
},200);
}
function wayla(){
clearTimeout(hu);
setTimeout(function(){
divdi.style.transition = "0.3s";divdi.style.marginTop = "0vh";
divdidiv.style.transition = "0.3s";divdidiv.style.opacity = "1";
divdi.style.transition = "0.3s";divdi.style.opacity = "1";
},300);
divdidiv.style.display="inline";
divdi.style.display="inline";

}

var ul=document.getElementById("div_ul");


function tss(){
ul.innerHTML="";
Search_Data(localStorage.wayj,document.getElementById('div_ipt').value)
if(document.getElementById('div_ipt').value.trim()==""){
document.title="\u200E";
ul.innerHTML="";
document.getElementById("div_ul").style.display="none";
document.getElementById("div_ipt_p").style.visibility="hidden";
}else{
document.getElementById("div_ul").style.display="list-item";
document.title=document.getElementById('div_ipt').value;
document.getElementById("div_ipt_p").style.visibility="visible";
var text=document.getElementById('div_ipt').value;
let textno = text.split(" ");
if(textno.length > 2){
let ta =Number(textno[0]);
let tb =Number(textno[2]);
if( isNaN(ta) == true||isNaN(tb) == true){
}else{
ul.innerHTML="";
ul.innerHTML+=`<li style="border-bottom-style:solid;" id="math_p">计算 </li>`;
turnon();
}}
if(document.getElementById('div_ipt').value.match(/http/)!=null){
ul.innerHTML="";
let httexl="http"+document.getElementById('div_ipt').value.match(/http(\S*)/)[1];
ul.innerHTML+=`<li style="border-bottom-style:solid;" onclick="liopen('`+httexl+`')">打开 `+httexl+`</li>`;
}
ul.innerHTML+=`<li style="border-bottom-style:solid;" onclick="Translate('`+document.getElementById('div_ipt').value+`')">翻译 `+document.getElementById('div_ipt').value+`</li>`;
}
}
function Translate(text){
way = localStorage.wayj;
if(way==='2'){
window.location.assign('https://fanyi.sogou.com/text?fr=wapsearch&keyword='+text+'&transfrom=auto&transto=zh-CHS&model=general')
}else{
window.location.assign('https://fanyi.baidu.com/?aldtype=38319#auto/zh/'+text)
}
}

function b(){
document.getElementById("div_ul").style.display="none";

}

function lia(l){
document.getElementById('div_ipt').value=l;
feel();
}
function feel(){
var text=document.getElementById('div_ipt').value;
if(text.trim()==""){
document.title="\u200E";
tsc("!","输入不能为空",3000);
}else{
document.title=text;
if(localStorage.hion==0){
if(localStorage.hi==undefined){
var abod=[0];
}else{

abod=JSON.parse(localStorage.hi);
}
abod[0]=abod[0]+1;
abod.splice(1,0,text);
localStorage.hi=JSON.stringify(abod);
}
window.location.assign(way+text)
}
        

}
function ent(ev) {
	var ev = ev || window.event
	if(ev.keyCode == "13") {
  feel();
	}
}
function liopen(liopena){
window.location.assign(liopena)
}
var rooa=0;
function roo(){
rooa++
if(rooa==2){
rooa=0;
}
if(rooa==1){
var roo = document.getElementById('roo_div');roo.style.transition = "0.5s"; roo.style.marginLeft = "0vh";
var rooi= document.getElementById('roo_im');rooi.style.transition = "0.5s"; rooi.style.transform = "rotate(200deg)";
document.getElementById('roo_bas').style.display="inline";
}else if(rooa==0){
var roo = document.getElementById('roo_div');roo.style.transition = "0.5s"; roo.style.marginLeft = "-70vw";
var rooi= document.getElementById('roo_im');rooi.style.transition = "0.5s"; rooi.style.transform = "rotate(0deg)";
document.getElementById('roo_bas').style.display="none";
}
}
var starqb;
function starq(starqa){
starqb=starqa;
setTimeout(function(){
idstarsq.style.transition = "0.3s";idstarsq.style.marginTop = "0vh";
idstarscb.style.transition = "0.3s";idstarscb.style.opacity = "1";
idstarsq.style.transition = "0.3s";idstarsq.style.opacity = "1";
},300);
idstarscb.style.display="inline";
idstarsq.style.display="inline";
}
starqn()
function starqn(){
setTimeout(function(){
idstarscb.style.display="none";
idstarsq.style.display="none";
},300);
idstarsq.style.transition = "0.3s";idstarsq.style.marginTop = "-20vh";
idstarscb.style.transition = "0.3s";idstarscb.style.opacity = "0";
idstarsq.style.transition = "0.3s";idstarsq.style.opacity = "0";
}
if(localStorage.pica!=undefined){
document.getElementById('picture').style.background=`url('`+localStorage.pica+`')`;
document.getElementById('picture').style.backgroundSize="cover";
document.getElementById('picture').style.backgroundRepeat="no-repeat";
document.getElementById('picture').style.backgroundPosition="center";
document.getElementById('pic_u').value=localStorage.pica;
}
if(localStorage.picb!=undefined){
document.getElementById('picture').style.background=localStorage.picb;
document.getElementById('pic_ub').value=localStorage.picb;
}
function picu(picua){
if(picua===1){
document.getElementById('picture').style.background=`url('`+document.getElementById('pic_u').value+`')`;
document.getElementById('picture').style.backgroundRepeat="no-repeat";
document.getElementById('picture').style.backgroundSize="cover"; 
document.getElementById('picture').style.backgroundPosition="center";

localStorage.pica=document.getElementById('pic_u').value;
localStorage.picb="";
localStorage.removeItem("picb");
}else{
document.getElementById('picture').style.background=document.getElementById('pic_ub').value;
localStorage.picb=document.getElementById('pic_ub').value;
localStorage.pica="";
localStorage.removeItem("pica");
}

}
var idpic=document.getElementById('pic');
var idpicb=document.getElementById('pic_b');
function picno(){
setTimeout(function(){
idpic.style.display="none";
idpicb.style.display="none";
},300);
idpic.style.transition = "0.3s";idpic.style.marginTop = "5vh";
idpicb.style.transition = "0.3s";idpicb.style.opacity = "0";
idpic.style.transition = "0.3s";idpic.style.opacity = "0";
}
function picyes(){
roo();
setTimeout(function(){
idpic.style.transition = "0.3s";idpic.style.marginTop = "0vh";
idpicb.style.transition = "0.3s";idpicb.style.opacity = "1";
idpic.style.transition = "0.3s";idpic.style.opacity = "1";
},300);

idpic.style.display="inline";
idpicb.style.display="inline";
}
picno();
function iptno(){
if(document.getElementById('div_ipt').value==""){document.getElementById('div_ipt').focus();}else{
document.getElementById('div_ipt').value="";
document.getElementById("div_ipt_p").style.visibility="hidden";
document.getElementById("div_ul").style.display="none";
document.title="\u200E";
}
}
const params = new URLSearchParams(location.search);
const textp=params.get('p');
if(textp!=null&textp!=""){
document.getElementById('div_ipt').value=textp;
feel()
}
function tssa(){
let texta=document.getElementById('di_ipt_p').innerText;
if(texta.trim()==""){
document.title="\u200E";
tsc("!","输入不能为空",3000);
}else{
document.title=texta;
if(localStorage.hion==0){
if(localStorage.hi==undefined){
var abod=[0];
}else{

abod=JSON.parse(localStorage.hi);
}
abod[0]=abod[0]+1;
abod.splice(1,0,texta);
localStorage.hi=JSON.stringify(abod);
}
window.location.assign(way+texta)
}
}
function dino(){
document.getElementById('div_ipt').value=document.getElementById('di_ipt_p').innerText;
if(document.getElementById('di_ipt_p').innerText.trim()!=""){
document.getElementById("div_ipt_p").style.visibility="visible";
tss();
}
setTimeout(function(){
document.getElementById('di_ipt').style.display="none";
},150);
document.getElementById('di_ipt').style.transition = "0.15s";document.getElementById('di_ipt').style.opacity="0";
}
function diye(){
document.getElementById('di_ipt_p').innerText=document.getElementById('div_ipt').value;
setTimeout(function(){
document.getElementById('di_ipt').style.transition = "0.15s";document.getElementById('di_ipt').style.opacity="1";
},150);
document.getElementById('di_ipt').style.display="inline";
}
function tit(){
let texta=document.getElementById('di_ipt_p').innerText;
if(texta.trim()==""){
document.title="\u200E";
}else{
document.title=texta;
}
}
var idnew=document.getElementById("new");
var idnewback=document.getElementById("new_back");
function newo(){
newpturn();
setTimeout(function(){
idnew.style.transition = "0.3s";idnew.style.marginTop = "0vh";
idnew.style.transition = "0.3s";idnew.style.opacity = "1";
idnewback.style.transition = "0.3s";idnewback.style.opacity = "0.7";
},300);
idnew.style.display="inline";
idnewback.style.display="inline";
}
function newno(){
setTimeout(function(){
idnew.style.display="none";
idnewback.style.display="none";
},300);
idnew.style.transition = "0.3s";idnew.style.marginTop = "50px";
idnew.style.transition = "0.3s";idnew.style.opacity = "0";
idnewback.style.transition = "0.3s";idnewback.style.opacity = "0";
}
newno();


function turnon(){
var pinnerText = document.getElementById('math_p');
var text=document.getElementById('div_ipt').value;
let textno = text.split(" ");
switch(textno[1])
{
    case "+":
let result = Number(textno[0]) + Number(textno[2]);
pinnerText.innerHTML += Number(textno[0]) +"+"+ Number(textno[2])+"="+result;
document.getElementById("myInput").value=result;
    break;
    case "-":
let resultb = Number(textno[0])-Number(textno[2]);
pinnerText.innerHTML += Number(textno[0]) +"-"+ Number(textno[2])+"="+resultb;
document.getElementById("myInput").value=resultb;
    break;
    case "－":
let resultc = Number(textno[0])-Number(textno[2]);
pinnerText.innerHTML += Number(textno[0]) +"-"+ Number(textno[2])+"="+resultc;
document.getElementById("myInput").value=resultc;
    break;
    case "×":
let resultd = Number(textno[0]) * Number(textno[2]);
pinnerText.innerHTML += Number(textno[0]) +"×"+ Number(textno[2])+"="+resultd;
document.getElementById("myInput").value=resultd;
    break;
    case "*":
let resulte = Number(textno[0]) * Number(textno[2]);
pinnerText.innerHTML += Number(textno[0]) +"×"+ Number(textno[2])+"="+resulte;
document.getElementById("myInput").value=resulte;
    break;
    case "÷":
let resultf = Number(textno[0]) /Number(textno[2]);
if(resultf==Infinity){
pinnerText.innerHTML += Number(textno[0]) +"÷"+ Number(textno[2])+"=∞";
document.getElementById("myInput").value="∞";
}else{
pinnerText.innerHTML += Number(textno[0]) +"÷"+ Number(textno[2])+"="+resultf;
document.getElementById("myInput").value=resultf;
}
    break;
    case "/":
let resultg = Number(textno[0]) /Number(textno[2]);
if(resultg==Infinity){
pinnerText.innerHTML += Number(textno[0]) +"÷"+ Number(textno[2])+"=∞";
document.getElementById("myInput").value="∞";
}else{
pinnerText.innerHTML += Number(textno[0]) +"÷"+ Number(textno[2])+"="+resultg;
document.getElementById("myInput").value=resultg;
}
    break;
}

}


new ClipboardJS('#math_p', {
    text: function(trigger) {
        return document.getElementById("myInput").value;
    }
}).on('success', function(e) {
tsc("✿","复制成功",3000);
   e.clearSelection();
}).on('error', function(e) {
});


new ClipboardJS('#a', {
    text: function(trigger) {
        return document.getElementById("myInput").value;
    }
}).on('success', function(e) {
tsc("✿","复制成功",3000);
   e.clearSelection();
}).on('error', function(e) {
});


  var idwarnBlack = document.getElementById('warn_black');
  var idwarn = document.getElementById('warn');
  
function warnno(){
 setTimeout(function(){
idwarnBlack.style.display="none";
idwarn.style.display="none";
},300);
idwarn.style.transition = "0.3s";idwarn.style.marginTop = "50px";
idwarnBlack.style.transition = "0.3s";idwarnBlack.style.opacity = "0";
idwarn.style.transition = "0.3s";idwarn.style.opacity = "0"; 
}
function fwarn(warna){
	document.getElementById('warn_p').innerHTML=warna;
	setTimeout(function(){
idwarn.style.transition = "0.3s";idwarn.style.marginTop = "0vh";
idwarnBlack.style.transition = "0.3s";idwarnBlack.style.opacity = "1";
idwarn.style.transition = "0.3s";idwarn.style.opacity = "1";
},300);
idwarnBlack.style.display="inline";
idwarn.style.display="inline";
}
warnno();





/*这是扫描输入内容，进行分析
  document.getElementById('di_ipt_p').innerText是获取输入内容
*/
const scanInput =()=>{
let inputText = document.getElementById('di_ipt_p').innerText;//需处理字符串
if(!/http/.test(inputText)){
return
}

let returnText='';//储存结果字符串
let returnEndText='';

let AfterFirst=inputText.match(/http(\S*)/g);

AfterFirst.forEach(data =>{

returnEndText += inputText.split(data)[0]+`<a onclick="window.open('`+data+`')" contenteditable="false">`+data+`</a>`;
if(inputText.split(data)[1]){
returnText = returnEndText+inputText.split(data)[1];
inputText = inputText.split(data)[1];

}else{
returnText = returnEndText;
}

})


if(/提取码：/.test(returnText)){
let BreturnText='';//储存结果字符串
let BreturnEndText='';
let BAfterFirst=returnText.match(/提取码：(\S*)/);
data=BAfterFirst[0];
BreturnEndText += returnText.split(data)[0]+`提取码：<a contenteditable="false" id="a" onclick="document.getElementById('myInput').value=this.innerText">`+data.replace('提取码：','')+`</a>`;
if(returnText.split(data)[1]){
BreturnText = BreturnEndText+returnText.split(data)[1];
returnText = returnText.split(data)[1];
}else{
BreturnText = BreturnEndText;
}
document.getElementById('di_ipt_p').innerHTML=BreturnText;
}else{

document.getElementById('di_ipt_p').innerHTML=returnText;
}





}