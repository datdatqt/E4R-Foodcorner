let list1 = document.querySelectorAll(".title-1 li");
let box1 = document.querySelectorAll(".menu-1");

list1.forEach((el)=>{
    el.addEventListener("click" , (e)=>{
        list1.forEach((el1)=>{
            el1.style.color = "#fff";
        })
        e.target.style.color = "#A61008"
        box1.forEach((el2)=>{
            el2.style.display = "none";
        })
        document.querySelectorAll(e.target.dataset.color).forEach((el3)=>{
            el3.style.display = "flex";
        })
    })
})

let list2 = document.querySelectorAll(".list2 li");
let box2 = document.querySelectorAll(".box-2");

list2.forEach((el)=>{
    el.addEventListener("click" , (e)=>{
        list2.forEach((el1)=>{
            el1.style.color = "#fff";
        })
        e.target.style.color = "#A61008"
        box2.forEach((el2)=>{
            el2.style.display = "none";
        })
        document.querySelectorAll(e.target.dataset.color).forEach((el3)=>{
            el3.style.display = "flex";
        })
    })
})