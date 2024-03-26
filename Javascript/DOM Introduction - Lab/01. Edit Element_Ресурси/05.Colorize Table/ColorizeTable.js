function colorize() {
    let  textToExtract = Array.from(document.getElementsByTagName("tr"));
    for (let i = 1; i < textToExtract.length; i++)
        if (i % 2 != 0){
            textToExtract[i].style.backgroundColor = "Teal";
        }
}