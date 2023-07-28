let mainImage = docment.getElementBtId("mainImage");
let smallImage = document.getElementsByClassName("image");
smallImage[0].onclick = ()=> {
    mainImage.src = smallImage[0].src
} 
smallImage[1].onclick = ()=> {
    mainImage.src = smallImage[1].src
}
smallImage[2].onclick = ()=> {
    mainImage.src = smallImage[2].src
}
smallImage[3].onclick = ()=> {
    mainImage.src = smallImage[3].src
}
smallImage[4].onclick = ()=> {
    mainImage.src = smallImage[4].src
}
function cart(){
    var a,b,c,d ;
    a=document.getElementById("first").value;
    b=a*200;
    document.getElementById("second").value=b;
    c=(5.7)/100;
    document.getElementById("third").value=c;
d=b+c;
document.getElementById("fourth").value=d;
}
let ans= document.getElementById("firdt");
ans.addEventListener('keyup',cart);

// alert to confirm your order
function myFunction() {
    confirm('Are you sure to buy?')
 }
