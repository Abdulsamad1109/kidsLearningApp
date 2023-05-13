function startButton(){
    document.getElementById("container").style.display = "block"
    document.getElementById("startbtn").remove()
}





document.getElementById("container").style.display = "none";


  var i =0;
  var b=0;
  var c=0;
var alphabet = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
var words = ["Apple","Ball","Cup","Dog","Elephant","Fish","Giraffe","Horse","Ink","Jug","Knife","Lime","Mango","Nail","Ostrich","Potato","Quail","Rabbit","Snail","Tomato","Umbrella","Vase","Watch","Xylophone","Yatch","Zebra"]
var imageArray = ["apple.jPg","ball.jpg","cup.jpg","dog.jpg","Elephant.jpg","Fish.jpg","Giraffe.jpg","Horse.jpg","Ink.jpg","Jug.jpg","Knife.jpg","Lime.jpg","Mango.jpg","Nail.jpg","Ostrich.jpg","potato.jpg","Quail.jpg","Rabbit.jpg","Snail.jpg","Tomato.jpg","Umbrella.jpg","Vase.jpg","Wristwatch.jpg","Xylophone.jpg","Yatch.jpg","Zebra.jpg"]
var myImage = document.getElementById("myImg");

document.getElementById("display").innerText = (alphabet[i] + " for " + words[i]);


function btnNext(){
  

   document.getElementById("display").innerHTML = `${alphabet[i++]} for ${words[b++]}`;

    myImage.setAttribute("src", imageArray[c++]);

    if(i == 26){
        i = 0;
    }
    if(b == 26){
        b = 0;
    }
    if(c == 26){
        c = 0;
    }

}




function btnPrevious(){
    i--;
    document.getElementById("display").innerHTML = (alphabet[i] + " for " + words[i]);
    myImage.setAttribute("src", imageArray[i]);
    document.getElementById("Next-btn").style.display = "block"

    if(i < 0){
        i = 0
    }
}