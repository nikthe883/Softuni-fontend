function isPalindrome(arr) {
    
    for(a=0;a<arr.length;a++){
        
        let numStr = arr[a].toString(); 
        let result = numStr.split('').reverse().join(''); 
        console.log(numStr === result); 
}
}


isPalindrome([123,323,421,121])