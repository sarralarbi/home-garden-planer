try{

let cards = document.getElementsByClassName("categ");

for(let i = 0 ; i < cards.length ; i++){
    cards.item(i).addEventListener('click',()=>{
        if(cards.item(i).id=="c")   window.location.href = "./signInPageCompany.html";
        else  window.location.href = "./signInPageNormal.html";
    })
}

}catch(e){
    // element is not in that html page = normal
}

try{

let goBack = document.getElementsByClassName("go-back")[0];

goBack.addEventListener("click",()=>{
    window.location.href = "./index.html";
})

}catch(e){
    // element is not in that html page = normal
}

try{

let goBack2 = document.getElementsByClassName("go-back2")[0];

goBack2.addEventListener("click",()=>{
    window.location.href = "./signin.html";
})

}catch(e){
    // element is not in that html page = normal
}




/*
let othercomp = document.getElementById("c-type");


othercomp.addEventListener("click", () => {
    // if default value is changed
    othercomp.addEventListener("change", () => {

        if (othercomp.value == "other" || othercomp.value == "commercial") {
          document.getElementById("info-sg").innerHTML+='<input type="text" class="sform-control" id="type-cm" placeholder="Tell us more" required>';
        }
    });

});

*/

