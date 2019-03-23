console.log("test");
list = ["Web Designer", "Data Analyst", "Business Analyst", "Social Media Strategist"];
var current_text = 0;

var element_heading = document.getElementById("heading_description");


function animate_heading() {
    
    if (current_text!= 3){
        current_text+=1;
    }
    else{
        current_text=0;
    }

    element_heading.classList.add("anim_heading");
    setTimeout(change_text, 500);   
}

function change_text(){
    element_heading.innerHTML=list[current_text];
    setTimeout(remove_class, 500);
}

function remove_class(){
    element_heading.classList.remove("anim_heading");
}

setInterval(animate_heading, 4000);

function change_text_tooltip(x){
    document.getElementById("tooltiptext").innerHTML=x;
}

/* ------- Tooltips ------ */

/* Linkedin Tooltip */

document.getElementsByClassName("linkedin_link")[0].addEventListener("mouseover", function() {
    document.getElementById("tooltiptext").style.opacity="1";
    change_text_tooltip("Linkedin");
})

document.getElementsByClassName("linkedin_link")[0].addEventListener("mouseleave", function() {
    document.getElementById("tooltiptext").style.opacity="0";
})

/* GitHub Tooltip */

document.getElementsByClassName("github_link")[0].addEventListener("mouseover", function() {
    document.getElementById("tooltiptext").style.opacity="1";
    change_text_tooltip("GitHub");
})

document.getElementsByClassName("github_link")[0].addEventListener("mouseleave", function() {
    document.getElementById("tooltiptext").style.opacity="0";
})

/* E-Mail Tooltip */

document.getElementsByClassName("email_link")[0].addEventListener("mouseover", function() {
    document.getElementById("tooltiptext").style.opacity="1";
    change_text_tooltip("E-Mail: nguyen.victoria@gmail.com");
})

document.getElementsByClassName("email_link")[0].addEventListener("mouseleave", function() {
    document.getElementById("tooltiptext").style.opacity="0";
})

/* Phone Tooltip */

document.getElementsByClassName("phone_link")[0].addEventListener("mouseover", function() {
    document.getElementById("tooltiptext").style.opacity="1";
    change_text_tooltip("Phone: 267-752-7444");
})

document.getElementsByClassName("phone_link")[0].addEventListener("mouseleave", function() {
    document.getElementById("tooltiptext").style.opacity="0";
})
