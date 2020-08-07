var slideIndex = 0;

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var slides2 = document.getElementsByClassName("mySlides2");
    var dots = document.getElementsByClassName("dot");
    var dots2 = document.getElementsByClassName("dot2");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        slides2[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
        dots2[i].className = dots2[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    slides2[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    dots2[slideIndex - 1].className += " active";
    setTimeout(showSlides, 4000); // Change image every 2 seconds
}

var i = 0;
var txt = '2019 Social Innovation Challenge Top 5 Finalist';
var speed = 50;

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("typing").innerHTML += txt.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

function initial() {
    showSlides();
}

var count = 0;

function greenTheme() {
    document.getElementById("header").style.backgroundColor = "#04221d"; //dark green
    document.getElementById("features").style.backgroundColor = "#04221d";
    document.getElementById("top").style.backgroundImage = "url('./Images/leaves.jpg')";
    document.getElementById("name").style.backgroundColor = "rgba(11, 59, 51, 0.7)";
    document.getElementById("name").style.color = "white";
    document.getElementById("summary").style.backgroundColor = "#04221d";
    document.getElementById("themebutton").style.display = "none";
    document.getElementById("themebutton2").style.display = "block";
    /*document.getElementsByClassName("new-section")[0].style.backgroundColor = "rgb(15, 80, 71)";*/
    var x = document.getElementsByClassName("new-section");
    var j = 0;
    for (j = 0; j < x.length; j++) {
        x[j].style.backgroundColor = "rgba(209, 62, 4, 0.8)";
    }
    document.getElementById("glowstick").src = "Images/glowstickgreen.gif";
}
function blueTheme() {
    document.getElementById("header").style.backgroundColor = "#060629"; //dark blue
    document.getElementById("features").style.backgroundColor = "#060629";
    document.getElementById("top").style.backgroundImage = "url('./Images/leaves2.jpg')";
    document.getElementById("name").style.backgroundColor = "rgba(77, 110, 201, 0.76)";
    document.getElementById("name").style.color = "#060629";
    document.getElementById("summary").style.backgroundColor = "#060629";
    document.getElementById("themebutton2").style.display = "none";
    document.getElementById("themebutton").style.display = "block";
    var x = document.getElementsByClassName("new-section");
    var j = 0;
    for (j = 0; j < x.length; j++) {
        x[j].style.backgroundColor = "rgb(28, 46, 97)";
    }
    document.getElementById("glowstick").src = "Images/glowstick.gif";
}
/*
function lightTheme () {
    document.getElementById("header").style.backgroundColor = "#d7eaeb"; //light pastel blue
    document.getElementById("nav-ul").style.color = "#060629";
    document.getElementById("features").style.backgroundColor = "#c7d0d8"; //light grey
    document.getElementById("top").style.backgroundImage = "url('./Images/leaves2.jpg')";
    document.getElementById("name").style.backgroundColor = "rgba(77, 110, 201, 0.76)";
    document.getElementById("name").style.color = "#060629";
    document.getElementById("themebutton3").style.display = "none";
    document.getElementById("themebutton").style.display = "block";
}
*/
function changeImage() {
    document.getElementById("dragon").src = "Images/andrew.JPG"; //"Images/me2.jpg"
    document.getElementById("myIntro").style.display = "none";
    document.getElementById("andrewzhan").style.display = "block";
}
function originalImg() {
    if (count == 0) {
        document.getElementById("dragon").src = "Images/dragon.JPG";
        count += 1;
    } else {
        document.getElementById("dragon").src = "Images/dragon.JPG";
        count -= 1;
    }
    document.getElementById("myIntro").style.display = "block";
    document.getElementById("andrewzhan").style.display = "none";
}