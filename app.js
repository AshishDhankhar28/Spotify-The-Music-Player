let progress=document.querySelector("#progress");
let songs= new Audio ('Songs/1.mp3');
let master_button=document.querySelector("#masterplay");
const songslist=["Songs/1.mp3","Songs/2.mp3","Songs/3.mp3","Songs/4.mp3","Songs/5.mp3","Songs/6.mp3","Songs/7.mp3","Songs/8.mp3","Songs/9.mp3", "Songs/10.mp3"];
let index=0;
let array=Array.from(document.querySelectorAll("#pratice"));
let volumeSlide = document.querySelector("#volume");


// play/pause button
master_button.addEventListener('click',()=>{
    if(songs.paused){
        songs.play();
        master_button.src="Image/pause.svg";
        document.querySelector("#Play").src="Image/pause.svg";
    }
    else{
        songs.pause();
        master_button.src="Image/play.svg";
        document.querySelector("#Play").src="Image/play.svg";
    }
})




// Updating progress bar
songs.onloadedmetadata=function(){
    progress.max=songs.duration;
    progress.value=songs.currentTime;
    document.querySelector("#endTime").innerHTML= in_seconds(songs.duration);
}

if(songs.played){
    setInterval(()=>{
        progress.value=songs.currentTime;
        document.querySelector("#currentTime").innerHTML= in_seconds(songs.currentTime);
    },400);
}1

progress.onchange=function(){
    songs.currentTime=progress.value; 
}


function in_seconds(x){
    let minutes = "0" + Math.floor(x / 60);
    let seconds = "0" +  Math.floor(x - minutes * 60);
    let dur = minutes.substr(-2) + ":" + seconds.substr(-2);
    return dur;
}





// Scrollbar wale songs
array.forEach((element,i) => {
    element.addEventListener('click',()=>{
        makeallnormal();
        index=i;
        element.classList.add("hovers");
        songs.src=`Songs/${index+1}.mp3`;
        songs.currentTime=0;
        songs.play();
        master_button.src="Image/pause.svg";
        document.querySelector(".p1").innerHTML=element.querySelector(".item2").innerHTML;
        document.querySelector("#Play").src="Image/pause.svg";
        
    })
})

function makeallnormal(){
    array.forEach((element,i) => {
        element.classList.remove("hovers");
    })  
}


// Next and previous button

document.querySelector(".forwardButton").addEventListener('click',()=>{
    if(index>=9){
        index=0;
        array[index].classList.add("hovers");
        array[9].classList.remove("hovers");
    }
    else{
        index=index+1;
        array[index].classList.add("hovers");
        array[index-1].classList.remove("hovers");
    }
    console.log(index);
    songs.src=`Songs/${index+1}.mp3`;
    songs.currentTime=0;
    songs.play();
    master_button.src="Image/pause.svg";
    document.querySelector(".p1").innerHTML=array[index].querySelector(".item2").innerHTML;
})

document.querySelector(".backButton").addEventListener('click',()=>{
    if(index<=0){
        index=9;
        array[index].classList.add("hovers");
        array[0].classList.remove("hovers");
    }
    else{
        index=index-1;
        array[index].classList.add("hovers");
        array[index+1].classList.remove("hovers");
    }
    console.log(index);
    songs.src=`Songs/${index+1}.mp3`;
    songs.currentTime=0;
    songs.play();
    master_button.src="Image/pause.svg";
    document.querySelector(".p1").innerHTML=array[index].querySelector(".item2").innerHTML;
})


// Volume Button

volumeSlide.addEventListener("change", function(e) {
    songs.volume = volumeSlide.value / 100;
})


// Play Button
document.querySelector("#Play").addEventListener('click',()=>{
    if(songs.paused){
        songs.play();
        master_button.src="Image/pause.svg";
        document.querySelector("#Play").src="Image/pause.svg";
        
    }
    else{
        songs.pause();
        master_button.src="Image/play.svg";
        document.querySelector("#Play").src="Image/play.svg";
    }
})

// Like Button 
document.querySelector("#likes").addEventListener('click',()=>{
    if(document.querySelector("#likes").src.includes("WhiteHeart")){
        document.querySelector("#likes").src="Image/like.svg";
    }
    else{
        document.querySelector("#likes").src="Image/WhiteHeart.svg";
    }
})
