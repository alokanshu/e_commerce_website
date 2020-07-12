// alert("hello")
function search_product() { 
    let input = document.getElementById('srchFld').value 
    input=input.toLowerCase(); 
    let x = document.getElementsByClassName('caption'); 
      
    for (i = 0; i < x.length; i++) {  
        if (!x[i].innerHTML.toLowerCase().includes(input)) { 
            x[i].style.display="none"; 
        } 
        else { 
            x[i].style.display="index.html";                  
        } 
    } 
} 