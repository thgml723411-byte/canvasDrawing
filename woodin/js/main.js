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






        // 옵저브? 부분 연습
        let mainImageBox=document.querySelectorAll(".mainImageBox")
        let observer=new IntersectionObserver(function(entries){
            entries.forEach(function(item){
                if(item.isIntersecting){
                    item.target.classList.add("on")
                }else{
                    item.target.classList.remove("on")
                }
            })
        },{
            // threshold: 0.1
        })
        mainImageBox.forEach(function(item){
            observer.observe(item)
        })
// 위에 이미지의 글자도
        let textMain=document.querySelectorAll(".textMain")
        let observer2=new IntersectionObserver(function(text){
            text.forEach(function(item){
                if(item.isIntersecting){
                    item.target.classList.add("on")
                }else{
                    item.target.classList.remove("on")
                }
            })
        },{
            threshold: 0.1
        })
        textMain.forEach(function(item){
            observer2.observe(item)
        })
// 검은색 부분의 이미지 움직이기---------------------------------
        let imageBox2=document.querySelectorAll(".imageBox2")
        let observer3=new IntersectionObserver(function(entries){
            entries.forEach(function(item){
                if(item.isIntersecting){
                    item.target.classList.add("on")
                }else{
                    item.target.classList.remove("on")
                }
            })
        },{
            // threshold: 0.1
        })
        imageBox2.forEach(function(item){
            observer.observe(item)
        })
// -------------여기 하단의 큰 이미지의 글자 부분
        let hdText=document.querySelectorAll(".hdText")
        let observer4=new IntersectionObserver(function(text){
            text.forEach(function(item){
                if(item.isIntersecting){
                    item.target.classList.add("on")
                }else{
                    item.target.classList.remove("on")
                }
            })
        },{
            threshold: 0.1
        })
        hdText.forEach(function(item){
            observer4.observe(item)
        })


// 검은 박스 움직이기
        let blackBox=document.querySelectorAll(".blackBox")
        let observer5=new IntersectionObserver(function(entries){
            entries.forEach(function(item){
                if(item.isIntersecting){
                    item.target.classList.add("on")
                }else{
                    item.target.classList.remove("on")
                }
            })
        },{
            // threshold: 0.1
        })
        blackBox.forEach(function(item){
            observer5.observe(item)
        })

        let movieBox=document.querySelectorAll(".movieBox")
        let observer6=new IntersectionObserver(function(entries){
            entries.forEach(function(item){
                if(item.isIntersecting){
                    item.target.classList.add("on")
                }else{
                    item.target.classList.remove("on")
                }
            })
        },{
            // threshold: 0.1
        })
        movieBox.forEach(function(item){
            observer6.observe(item)
        })

        // 남은 글자들 움직이자-------------------------------------
        let textBox=document.querySelectorAll(".textBox")
        let observer7=new IntersectionObserver(function(text){
            text.forEach(function(item){
                if(item.isIntersecting){
                    item.target.classList.add("on")
                }else{
                    item.target.classList.remove("on")
                }
            })
        },{
            threshold: 0.1
        })
        textBox.forEach(function(item){
            observer7.observe(item)
        })


        let mini2=document.querySelectorAll(".mini2")
        let observer8=new IntersectionObserver(function(text){
            text.forEach(function(item){
                if(item.isIntersecting){
                    item.target.classList.add("on")
                }else{
                    item.target.classList.remove("on")
                }
            })
        },{
            threshold: 0.1
        })
        mini2.forEach(function(item){
            observer8.observe(item)
        })

        let textBox2=document.querySelectorAll(".textBox2")
        let observer9=new IntersectionObserver(function(text){
            text.forEach(function(item){
                if(item.isIntersecting){
                    item.target.classList.add("on")
                }else{
                    item.target.classList.remove("on")
                }
            })
        },{
            threshold: 0.1
        })
        textBox2.forEach(function(item){
            observer9.observe(item)
        })


        // -----------------------------------------
        let txtBox=document.querySelectorAll(".txtBox")
        let observer10=new IntersectionObserver(function(text){
            text.forEach(function(item){
                if(item.isIntersecting){
                    item.target.classList.add("on")
                }else{
                    item.target.classList.remove("on")
                }
            })
        },{
            threshold: 0.1
        })
        txtBox.forEach(function(item){
            observer10.observe(item)
        })

        let txtLast=document.querySelectorAll(".txtLast")
        let observer11=new IntersectionObserver(function(text){
            text.forEach(function(item){
                if(item.isIntersecting){
                    item.target.classList.add("on")
                }else{
                    item.target.classList.remove("on")
                }
            })
        },{
            threshold: 0.1
        })
        txtLast.forEach(function(item){
            observer11.observe(item)
        })