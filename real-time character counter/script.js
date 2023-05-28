const textEl = document.querySelector("textarea");
let tcEl = document.querySelector("#t-c");
let remEl = document.querySelector("#r-c");
const rm = 30;
textEl.addEventListener("keyup", ()=>{
    const len = textEl.value.length;
    const rem = rm - len;
    if(rem >= 0){
        tcEl.textContent = len;
        remEl.textContent = rem;
    }
})