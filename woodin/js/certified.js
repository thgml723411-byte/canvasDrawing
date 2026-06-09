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

    //     let area1=document.querySelectorAll(".area1")
    //     let area2=document.querySelectorAll(".area2")
    //     let html=``
    //     let img=["/img/cr3.jpg",
    //             "/img/cr4.jpg",
    //             "/img/cr5.jpg",
    //              "/img/cr6.jpg",
    //             "/img/cr7.jpg",
    //             "/img/cr8.jpg"]
    //     for(let i=0; i<img.length; i++){
    //         html+=`<div class="area1"><img src="${img[i]}"/></div>`
    //         console.log(img[i])
    //     }
    //    area1.forEach(function(item){
    //     item.innerHTML=html
    //    })

    //    area2.forEach(function(item){
    //     item.innerHTML=html
    //    })