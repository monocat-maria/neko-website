let menuToggle = document.querySelector('.menuToggle');
let header = document.querySelector('header');
let headerSelect = document.querySelector('header ul');

menuToggle.onclick = function(){
    header.classList.toggle('active');
    
}
headerSelect.onclick = function(){//close the menu when select an option
    header.classList.remove('active');
    
}



