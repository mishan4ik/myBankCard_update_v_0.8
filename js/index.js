let come = document.getElementById("come");


let info = document.getElementById("info");

come.onclick = function() {


    let password = document.getElementById("pass").value;

    if(password.value == ""){

        info.innerHTML = "Введіть пароль до свого акаунту"

    }
    if(password.length < 4){

        info.innerHTML = "Не вірний пароль! Пароль повинен бути не менше 4 символів."

    }
    else {

        window.location.href = './myBank.html';

    }
    
    

}