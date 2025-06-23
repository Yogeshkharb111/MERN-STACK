const searchQueryStr=window.location.search;
console.log(": searchQueryStr: ",searchQueryStr);
const res=searchQueryStr.split("=");
console.log(res);
const videoId=res[1];

const inframe= document.getElementsByTagName("iframe")[0];
inframe.setAttribute("src",`https://www.youtube.com/embed/${videoId}`);
