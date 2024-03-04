// console.log('hello saurabh')
// let songIndex = 0;
let audioElement = new Audio('1.mp3','paradox.mp3');
// var masterPlay = document.getElementById('master');
// // let myProgressBar = document.getElementById('myprogressbar');
// masterPlay.addEventListener('click',()=>{
//     if(audioElement.paused || audioElement.currentTime<=0){
//         audioElement.play();
//     }
// })
function play(){
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
    }else{
        audioElement.pause();
    }
     
}
function next(){
    
}