const elements = document.getElementsByTagName("*");
document.write(`O número de elementos é: ${elements.length}`)
let allElements = "" 
for (e of elements){
    allElements = allElements+"</br>"+ e.tagName 
}
document.write(allElements)