//Getting body 
var body = document.querySelector("body")

var color = body.style.backgroundColor ="#FFFFFF"

var hex =[0,1,2,3,4,5,6,7,8,9,"a","b","c","b","e","f"]

var btn =document.getElementById("refresh")

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

document.getElementById("copy").addEventListener('click', () => {
    let textToCopy = document.getElementById("text-to-copy").innerHTML;
    
    // Create a range and select the text
    var range = document.createRange();
    range.selectNode(document.getElementById("text-to-copy"));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    
    // Execute the copy command
    document.execCommand("copy");
    
    // Deselect the text
    window.getSelection().removeAllRanges();

    console.log("Text copied: " + textToCopy);
});


function randomNumber(){
    return Math.floor(Math.random()*hex.length)
}