const slider = document.querySelector(".slider")
const slides = document.querySelectorAll(".slide")
const hamburger = document.querySelector(".hamburger")
const menu = document.querySelector(".menu")

let index = 1 //0번째는 3번카피동영상,실제는1번째있는동영상
let realTotal = 3
let isMoving = false

slider.style.transform = `translateX(-${index*100}vw)`

//타이틀애니메이션
function showTitle(){

    slides.forEach(function(slide){
        slide.classList.remove("on")
    })

    void slides[index].offsetHeight; //리플로우
    slides[index].classList.add("on")
}

//슬라이드이동
function showTitle(){
    slider.style.transition = `all 1s liner`
    slider.style.transform = `translateX(-${index*100}vw)`
}

//다음
function slideNext(){
    if(isMoving){//isMoving이true입니까
      return
    }
    isMoving = true
    index++
    slideMove()
}
//이전
function slidePrev(){
    if(isMoving){//isMoving이true입니까
      return  
    }
    isMoving = true
    index--
    slideMove()
}
//트렌지션이끝났을때
     //마지막(복제1번)에도달하였을떄진짜1번동영상으로순간이동
slider.addEventListener("transitionend",function(){
    if(index === realTotal+1){
        slider.style.transition = "none"

        index = 1
        slider.style.transform = `translateX(-${index*100}vw)`
    }
    //제일앞쪽(복제3번)에도달하였을떄진짜3번으로순간이동
    if(index ===0){
        slider.style.transition = "none"

        index = realTotal
        slider.style.transform = `translateX(-${index*100}vw)`
    }
    showTitle()
    isMoving = false
})
//처음동영상타이틀실행
showTitle()
setInterval(slideNext(),5000)