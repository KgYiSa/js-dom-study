//����л�ͼƬ
function showPic(whichpic){
    var source=whichpic.getAttribute("href");
    var placeholder=document.getElementById("placeholder");
    placeholder.setAttribute("src",source);
}
//ͳ��bodyԪ�ص�������Ԫ�ظ���
function countBodyChildren(){
    var body_element=document.getElementsByTagName("body")[0];
    console.log("countBodyChildren:"+body_element.childNodes.length);
}
window.onload=countBodyChildren;