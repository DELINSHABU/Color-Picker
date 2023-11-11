//Getting body 
var body = document.querySelector("body")

var color = body.style.backgroundColor ="#FFFFFF"

var hex =[0,1,2,3,4,5,6,7,8,9,"a","b","c","b","e","f"]

var btn =document.querySelector("button")

// for (var i )
btn.addEventListener('click',  function(){
    
    let hexColor = "#"
    
    for(let i =0; i<6; i++){
        hexColor +=hex[randomNumber()]
        
        var span = document.querySelector("span")
        span.innerHTML = hexColor
        body.style.backgroundColor = hexColor
    }

})



function randomNumber(){
    return Math.floor(Math.random()*hex.length)
}