// زر الرجوع للأعلى

let topBtn = document.getElementById("topBtn");

window.onscroll = function () {

    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

};

function topFunction() {

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

}
// FAQ

document.querySelectorAll(".faq-question").forEach(button=>{

    button.onclick=function(){

        let answer=this.nextElementSibling;

        if(answer.style.display==="block"){

            answer.style.display="none";

        }else{

            answer.style.display="block";

        }

    }

});