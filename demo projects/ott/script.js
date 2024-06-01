window.addEventListener("scroll",function(){
    var header=document.querySelector("header");
    header.classList.toggle("sticky",window.scrollY >10);
})

function StrangerThing() {
    document.getElementById("content").innerHTML='When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.';
    document.getElementById("mainimg").src = "images/stranger_things_Background_image.jpg";
    document.getElementById("TrailerFrame").src="https://www.youtube.com/embed/l5OAxkuq850?si=pNRzOiEJrqV9AU-a";
}

function moneyheiest() {
    document.getElementById("content").innerHTML='When the mint and a touring school group are held hostage by robbers, police believe that the thieves have no way out. Little do they know that the thieves have a bigger plan in store.';
    document.getElementById("mainimg").src = "https://wallpapercave.com/wp/wp8751913.jpg";
    document.getElementById("TrailerFrame").src = "https://www.youtube.com/embed/_8KHfbpNXUQ?si=PQzM6YGoAWH2Yn1E";
}

function dunki() {
    document.getElementById("content").innerHTML='A group of friends set out on a perilous journey to emigrate to the United Kingdom via a clandestine route called donkey flight, risking their lives in the process.';
    document.getElementById("mainimg").src = "https://i.ytimg.com/vi/Xz8dqWohhrc/maxresdefault.jpg";
    document.getElementById("TrailerFrame").src = "https://www.youtube.com/embed/Zd69FfhBmSc?si=-VJCaM3ALWT5eZZ8";

}

function Jawan() {
    document.getElementById("content").innerHTML='A man is driven by a personal vendetta to rectify the wrongs in society, while keeping a promise made years ago. He comes up against a monstrous outlaw with no fear, who has caused extreme suffering to many.';
    document.getElementById("mainimg").src = "images/Jawan_Background_image.jpg";
    document.getElementById("TrailerFrame").src = "https://www.youtube.com/embed/MWOlnZSnXJo?si=ad1L-SGijXYmpk2C";
}



function GodzillaVSKong() {
    document.getElementById("content").innerHTML='King Kong is transported out of his containment zone after Godzilla resurfaces and creates mayhem. Humans need his help to reach Hollow Earth and find a way to subdue the king of the monsters.';
    document.getElementById("mainimg").src = "https://beam-images.warnermediacdn.com/BEAM_LWM_DELIVERABLES/f1c6ef16-40b2-4ef5-89ed-547decd9e620/5dea83be6452c285c4bcf58f0f1c951146040f2b.jpg?host=wbd-images.prod-vod.h264.io&partner=beamcom";
    document.getElementById("TrailerFrame").src = "https://www.youtube.com/embed/odM92ap8_c0?si=UdZzRdMKfBJyIVwX";
}

// function StrangerThingsTrailerPlay() {
//     document.getElementById("TrailerFrame").src = "https://www.youtube.com/embed/l5OAxkuq850?si=pNRzOiEJrqV9AU-a";
// }




$(document).ready(function(){
    $("#watchTrailerBtn").click(function(){
        
        $(".TrailerContainer").toggle();
        // $('body').css('filter', 'blur(6px)');



    });

    $(".TrailerContainerCloseBtn").click(function(){
        

        $(".TrailerContainer").toggle();
        document.getElementById("TrailerFrame").src = "";


    });
});


