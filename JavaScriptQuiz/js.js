let counter, btnAdd;
let i = 0;

function addCount(){
    counter.innerHTML = i;
}

window.addEventListener("load", ()=>{
    // 起動時の処理
    counter = document.getElementById("counter");
    btnAdd = document.getElementById("btnAdd");
    i = 0;

    btnAdd.addEventListener("click", addCount);
});
