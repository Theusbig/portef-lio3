function toggleMode() {
    const html = DocumentElement;
    html.classlist.toggle("light");

const img = document.querySelector("#profile img");

if(html.classlist.contains("light")){
    img.setAttribute("src", "./img/avatar2.jpg");
}else {
    imh.setAttribute("src", "./img/avatar1.jfif");
}


}