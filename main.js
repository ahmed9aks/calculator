const screen = document.getElementById("screen");
document.querySelectorAll(".num, .operator").forEach(el => {el.onclick = function(){
    screen.textContent += el.textContent;
    }; 
});

document.querySelector(".equal").onclick =function(){
    screen.textContent = eval(screen.textContent);
};

document.querySelector(".clear").onclick = function(){
    screen.textContent ="";
};