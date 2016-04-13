;(function(){
    var width = document.documentElement.getBoundingClientRect().width;
    document.documentElement.style.fontSize = document.documentElement.getBoundingClientRect().width/10+"px"
    var rem = {}
    rem.toPx = function(rem){
        return rem * width / 10
    }
    rem.toRem = function(px){
        return px * 10 / width
    }
    window.rem = rem;
})()

