let playbtn = document.querySelector('.playbtn');
let resetbtn = document.querySelector('.resetbtn');
let resultAera = document.querySelector('.resultAera');
let chanceArea = document.querySelector('.chanceArea');
let inputNum = document.querySelector('.inputNum');

let computerNum = 0;
let chance = 5;

function randomNum(){
    computerNum =Math.floor( Math.random()*10+1)
    // console.log(computerNum)
}
randomNum()

playbtn.addEventListener('click',function(e){
 e.preventDefault()//새로고침방지
 let inputvalue = Number(inputNum.value)
 if(computerNum > inputvalue){
//  console.log( inputvalue)
   resultAera.textContent = '숫자를 올리세요'//글자만받아드리고훨씬빠름
 }else if(computerNum < inputvalue){
   resultAera.textContent = '숫자를 내리세요'
 }else{
    resultAera.textContent = 'bingo!!!'
 }
 chance = chance - 1 
 chanceArea.textContent = `찬스가 ${chance}`
 if(chance === 0){
    chanceArea.textContent = '찬스가 없습니다'
    playbtn.disabled=true
 }
})

resetbtn.addEventListener('click',function(){
//    inputvalue = ''
   inputNum.value = ''
   resultArea.textContent = '빙고게임힌트'
   chanceArea.textContent = '기회는 5번입니다'
   let chance = 5;
   playbtn.disabled=false
   randomNum()
})