const elements = document.getElementsByTagName("*");
document.write(`The number of all elements on the page is: ${elements.length}`);
let allElements = "";
for(e of elements){
    allElements = allElements + "</br>" + e.tagName
}
document.write(allElements);