var numberOfButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {
        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonPress(buttonInnerHTML);
    });
}

document.addEventListener("keydown", function(event) {
    var pressedKey = event.key;
    makeSound(pressedKey);
});

function makeSound(key) {
    switch (key) {
        case "w":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            buttonPress(key);
            break;
        case "a":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            buttonPress(key);
            break;
        case "s":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            buttonPress(key);
            break;
        case "d":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            buttonPress(key);
            break;
        case "j":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            buttonPress(key);
            break;
        case "k":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            buttonPress(key);
            break;
        case "l":
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
            buttonPress(key);
            break;
        default:
            console.log(key);
            buttonPress(key);
            break;
    }
}

function buttonPress(pressedButton) {
    document.querySelector("."+pressedButton).classList.add("pressed");
    setTimeout(function() {
        document.querySelector("."+pressedButton).classList.remove("pressed");
    }, 100);
}