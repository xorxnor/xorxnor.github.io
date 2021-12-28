let total = document.querySelector(".opvalue");
let buttons = document.querySelectorAll(".btn");
let clear = document.querySelector(".clr");
let operation = document.querySelector(".operation");
let plus = document.querySelector(".plus");
let equals = document.querySelector(".equ");
let minus = document.querySelector(".minus");
let mul = document.querySelector(".mul");
let pod = document.querySelector(".pod");

clear.addEventListener("click", () => { remAll() });

const changer = (num) => {
    total.textContent += num;
}

const remAll = () => {
    total.textContent = "";
    leftnum = 0;
    rightnum = 0;
    operation.textContent = "";
}

const storeLeft = () => {
    leftnum = parseInt(total.textContent);
}

const storeRight = () => {
    rightnum = parseInt(total.textContent);
}

const addFunc = () => {
    storeLeft();
    operation.textContent = "+";
    total.textContent = "";
}

const equalFunc = () => {
    if (operation.textContent == "+") {
        storeRight();
        total.textContent = leftnum + rightnum;
        leftnum = rightnum;
    } else if (operation.textContent == "-") {
        storeRight();
        total.textContent = leftnum - rightnum;
        leftnum = rightnum;
    } else if (operation.textContent == "*") {
        storeRight();
        total.textContent = leftnum * rightnum;
        leftnum = rightnum;
    } else if (operation.textContent == "/") {
        storeRight();
        total.textContent = leftnum / rightnum;
        leftnum = rightnum;
    }
}

const minusFunc = () => {
    storeLeft();
    operation.textContent = "-";
    total.textContent = "";
}
const mulFunc = () => {
    storeLeft();
    operation.textContent = "*";
    total.textContent = "";
}
const divFunc = () => {
    storeLeft();
    operation.textContent = "/";
    total.textContent = "";
}

const styleDown = (div) => {
    div.style.boxShadow = "1px 2px 1px 1px inset";
}

const styleUp = (div) => {
    div.style.boxShadow = "";
}

let leftnum, rightnum;

buttons.forEach(button => {
    button.addEventListener("click", () => { changer(button.textContent) });
    button.addEventListener("mousedown", () => { styleDown(button) });
    button.addEventListener("mouseup", () => { styleUp(button) });
})

let zer = document.querySelector(".zer").addEventListener("click", () => { changer(0) });
//
plus.addEventListener("click", () => { addFunc() });
equals.addEventListener("click", () => { equalFunc() });
pod.addEventListener("click", () => { divFunc() });
mul.addEventListener("click", () => { mulFunc() });
minus.addEventListener("click", () => { minusFunc() });
// Button Down Style
plus.addEventListener("mouseup", () => { styleUp(plus) });
equals.addEventListener("mouseup", () => { styleUp(equals) });
pod.addEventListener("mouseup", () => { styleUp(pod) });
mul.addEventListener("mouseup", () => { styleUp(mul) });
minus.addEventListener("mouseup", () => { styleUp(minus) });
clear.addEventListener("mouseup", () => { styleUp(clear)});
// Button Up Style
plus.addEventListener("mousedown", () => { styleDown(plus) });
equals.addEventListener("mousedown", () => { styleDown(equals) });
pod.addEventListener("mousedown", () => { styleDown(pod) });
mul.addEventListener("mousedown", () => { styleDown(mul) });
minus.addEventListener("mousedown", () => { styleDown(minus) });
clear.addEventListener("mousedown", () => { styleDown(clear)});

document.addEventListener("keypress", (e) => {
    console.log(e.code);
    if (e.code == "Numpad1" || e.code == "Digit1") {
        total.textContent += 1;
    } else if (e.code == "Numpad2" || e.code == "Digit2") {
        total.textContent += 2;
    } else if (e.code == "Numpad3" || e.code == "Digit3") {
        total.textContent += 3;
    } else if (e.code == "Numpad4" || e.code == "Digit4") {
        total.textContent += 4;
    } else if (e.code == "Numpad5" || e.code == "Digit5") {
        total.textContent += 5;
    } else if (e.code == "Numpad6" || e.code == "Digit6") {
        total.textContent += 6;
    } else if (e.code == "Numpad7" || e.code == "Digit7") {
        total.textContent += 7;
    } else if (e.code == "Numpad8" || e.code == "Digit8") {
        total.textContent += 8;
    } else if (e.code == "Numpad9" || e.code == "Digit9") {
        total.textContent += 9;
    } else if (e.code == "NumpadDivide") {
        divFunc();
    } else if (e.code == "NumpadMultiply") {
        mulFunc();
    } else if (e.code == "NumpadSubtract") {
        minusFunc();
    } else if (e.code == "NumpadAdd") {
        addFunc();
    } else if (e.code == "NumpadEnter" || e.code == "NumpadEquals") {
        equalFunc();
    }
});


