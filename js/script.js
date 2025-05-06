// toggle menu button
function toggleMenu(){
    const manu=document.querySelector(".menu")
    const nav=document.querySelector(".nav")
    manu.classList.toggle("active")
    nav.classList.toggle("active")
}

function changeWideo(name){
    const byWideoList=document.querySelectorAll(".bg-video")
    const trailes=document.querySelectorAll(".trailer")
    const models=document.querySelectorAll(".model")

    byWideoList.forEach((video)=>{
        video.classList.remove("active")
        if(video.classList.contains(name)){
            video.classList.add("active")
        }
    })
    models.forEach((model)=>{
        model.classList.remove("active")
        if(model.classList.contains(name)){
            model.classList.add("active")
        }
    })
    trailes.forEach((video)=>{
        video.classList.remove("active")
        if(video.classList.contains(name)){
            video.classList.add("active")
        }
    })
}

//wideo play avd pause
function toggleplay(){
    const play=document.querySelector(".play")
    const pause=document.querySelector(".pause")
    play.classList.toggle('active');
    pause.classList.toggle('active');
}

function pauseVideo(){
    const byWideoList=document.querySelectorAll(".bg-video")
    byWideoList.forEach((video)=>{
        video.pause()
    })
    toggleplay()
}

function playVideo(){
    const byWideoList=document.querySelectorAll(".bg-video")
    byWideoList.forEach((video)=>{
        video.play()
    })
    toggleplay()
}

