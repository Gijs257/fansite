let fotomain =document.querySelector("#fotomain")
;
fotomain.addEventListener("click", function(){
    fotomain.style.backgroundColor = "darkblue";
});

let mail =document.querySelector("#mail");

mail.addEventListener("click", function(){
    mail.style.backgroundColor = "darkblue";
});


 


// const fotomain = document.querySelector("#fotomain");
// const mail = document.querySelector("#mail");

let geklikt = false;

fotomain.addEventListener("click", function(){
    if (geklikt) {
        fotomain.style.backgroundColor = "red";
    } else {
        fotomain.style.backgroundColor = "darkblue";
    }

    geklikt = !geklikt;
});
mail.addEventListener("click", function(){
    mail.style.backgroundColor = "darkblue";
});