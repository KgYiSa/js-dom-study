//点击切换图片
function showPic(whichpic){
    var source=whichpic.getAttribute("href");
    var placeholder=document.getElementById("placeholder");
    placeholder.setAttribute("src",source);
}
//统计body元素的所有子元素个数
function countBodyChildren(){
    var body_element=document.getElementsByTagName("body")[0];
    console.log("countBodyChildren:"+body_element.childNodes.length);
}
window.onload=countBodyChildren;