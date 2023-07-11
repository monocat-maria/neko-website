 let list = document.querySelectorAll('.nav li'); //variable element list that selects the var document with the method querySelect to select the html code 
 
 function active(){ //function called active 
    list.forEach((i) =>
    i.classList.remove('active')); // allows manipulation of element's class content in this case on the html .nav li.active
    this.classList.add('active');
 }

 list.forEach((i) =>
 i.addEventListener('click',active)); //by clicking, callback the function active