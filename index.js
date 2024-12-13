// js for header list starts from here ================================================================

// js for game_info
let game_info=document.getElementById("game_info");
game_info.addEventListener("mouseover",function(){
    let header_list1 = document.getElementById("header_list1");
    header_list1.style.display="inline-block";
});
game_info.addEventListener("mouseout",function(){
    let header_list1 = document.getElementById("header_list1");
    header_list1.style.display="none";
});

// js for support
let support=document.getElementById("support");
support.addEventListener("mouseover",function(){
    let header_list2 = document.getElementById("header_list2");
    header_list2.style.display="inline-block";
});
support.addEventListener("mouseout",function(){
    let header_list2 = document.getElementById("header_list2");
    header_list2.style.display="none";
});

// js for our_social
let our_social=document.getElementById("our_social");
our_social.addEventListener("mouseover",function(){
    let header_list3 = document.getElementById("header_list3");
    header_list3.style.display="inline-block";
});
our_social.addEventListener("mouseout",function(){
    let header_list3 = document.getElementById("header_list3");
    header_list3.style.display="none";
});

// js for search button
let search_button=document.getElementById("search_button");
search_button.addEventListener("click",function(){
    let search_box = document.getElementById("search_box");
    search_box.style.display="inline";
});
let close_button = document.getElementById("close_button");
close_button.addEventListener("click",function(){
    let search_box = document.getElementById("search_box");
    search_box.style.display="none"; 

});
