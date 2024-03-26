function sumTable() {
    let  textToExtract = Array.from(document.getElementsByTagName("td"));
    let sum = 0;
    for (let i = 1; i < textToExtract.length; i++)
    
        if (!isNaN(textToExtract[i].textContent)) {
            
            
        sum += Number(textToExtract[i].textContent);
        }

    document.getElementById("sum").textContent = sum;
    
}