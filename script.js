document.addEventListener("DOMContentLoaded", function ()
 {
    let title = document.getElementById("title");
    let text = title.innerText;
    title.innerHTML = ""; 

    text.split("").forEach(letter => {
        let span = document.createElement("span");
        span.innerText = letter;
        
        if (letter === " ") {
            span.style.marginRight = "3vw"; 
        }

        title.appendChild(span);
    });
});


document.getElementById("name").addEventListener("click", function() 
{
    let url = this.dataset.url;
    if (url) {
        window.open(url, "_blank"); 
    }
});

const hoverItems = document.querySelectorAll(".hover-item");
const hoverBox = document.getElementById("hover-box");

hoverItems.forEach(item => {
    item.addEventListener("mouseenter", function() 
    {
        hoverBox.textContent = this.dataset.info;
        hoverBox.style.display = "block";
    });

    item.addEventListener("mouseleave", function() 
    {
        hoverBox.style.display = "none";
    });
});

/* Dr. Maria-Carolina Cambre's content hover effect */
$("#title1").hover(function(){
    $("#p1").css("opacity", "1")
},

function(){
    $("#p1").css("opacity", "0")
}
)

$("#title2").hover(function(){
    $("#p2").css("opacity", "1")
},

function(){
    $("#p2").css("opacity", "0")
}
)

$("#title3").hover(function(){
    $("#p3").css("opacity", "1")
},

function(){
    $("#p3").css("opacity", "0")
}
)

/* Dr. Isabel Machado's content hover effect */
$("#title4").hover(function(){
    $("#p4").css("opacity", "1")
},

function(){
    $("#p4").css("opacity", "0")
}
)

$("#title5").hover(function(){
    $("#p5").css("opacity", "1")
},

function(){
    $("#p5").css("opacity", "0")
}
)

$("#title6").hover(function(){
    $("#p6").css("opacity", "1")
},

function(){
    $("#p6").css("opacity", "0")
}
)


/* Daniel Wildberger's content hover effect */
$("#title7").hover(function(){
    $("#p7").css("opacity", "1")
},

function(){
    $("#p7").css("opacity", "0")
}
)

$("#title8").hover(function(){
    $("#p8").css("opacity", "1")
},

function(){
    $("#p8").css("opacity", "0")
}
)

$("#title9").hover(function(){
    $("#p9").css("opacity", "1")
},

function(){
    $("#p9").css("opacity", "0")
}
)


/* Dr. Shima Rezaei Rashnoodi's content hover effect */
$("#title10").hover(function(){
    $("#p10").css("opacity", "1")
},

function(){
    $("#p10").css("opacity", "0")
}
)

$("#title11").hover(function(){
    $("#p11").css("opacity", "1")
},

function(){
    $("#p11").css("opacity", "0")
}
)

$("#title12").hover(function(){
    $("#p12").css("opacity", "1")
},

function(){
    $("#p12").css("opacity", "0")
}
)

/* big circle on the top, with animation to lead people look and scroll down*/
const circle = document.getElementById('circle');
const content = document.getElementById('content');

circle.addEventListener('mouseover', () => { 
  console.log("Hovered over the circle!");
});

circle.addEventListener('mouseleave', () => {
  console.log("Mouse left the circle!");
});



