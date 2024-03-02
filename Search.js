function Search_Data(engine,text){
let url;
if(engine==='3'){
url='http://sg1.api.bing.com/qsonhs.aspx?type=cb&cb=Search_Data_Bing&q='+text;
}else if(engine==='5'){
url='https://sug.so.360.cn/suggest?encodein=utf-8&encodeout=utf-8&format=json&word='+text+'&callback=Search_Data_Suggest'
}else{
url='https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?cb=Search_Data_Babu&wd='+text
}
let script=document.createElement("script");
script.src=url;
document.body.appendChild(script);
}
function Search_Data_Suggest(data){
let arr = data.result;
for(var i=0;i < arr.length;i++){
ul.innerHTML+=`<li onclick="lia('`+arr[i].word+`')">`+arr[i].word+`</li>`;
}
}
function Search_Data_Babu(data){
let arr = data.s;
for(var i=0;i < arr.length;i++){
ul.innerHTML+=`<li onclick="lia('`+arr[i]+`')">`+arr[i]+`</li>`;
}
}
function Search_Data_Bing(data){
let arr=data.AS.Results;
ul.innerHTML+=`<li onclick="lia('`+arr[0].Suggests[0].Txt+`')">`+arr[0].Suggests[0].Txt+`</li>`;
for(let i=0;i<arr[1].Suggests.length;i++){
ul.innerHTML+=`<li onclick="lia('`+arr[1].Suggests[i].Txt+`')">`+arr[1].Suggests[i].Txt+`</li>`;
}
}