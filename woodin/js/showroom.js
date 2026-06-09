let gnb=document.querySelector(".gnb")
let nav=document.querySelector(".nav")
// let ses=document.querySelectorAll(".wrap>section")


gnb.addEventListener("mouseenter", function(){
            nav.classList.add("on")
        })

        gnb.addEventListener("mouseleave", function(){
            nav.classList.remove("on")
        })

        // 햄버거바 아래로
        let ses=document.querySelectorAll(".wrap>section")
        let HAMBURGER=document.querySelector(".HAMBURGER")
        let fullMenu=document.querySelector(".fullMenu")
        let closeBtn=document.querySelector(".closeBtn")

         HAMBURGER.addEventListener("click", function(){
            HAMBURGER.classList.toggle("on")
            fullMenu.classList.toggle("on")
        })
        closeBtn.addEventListener("click", function(){
            HAMBURGER.classList.remove("on")
            fullMenu.classList.remove("on")
        })
        function showPage(num){
            ses.forEach(function(item){
               item.classList.remove("on")
            })
            ses[num].classList.add("on")
            HAMBURGER.classList.remove("on")
            fullMenu.classList.remove("on")
        }
