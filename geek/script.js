let serach = document.querySelector(".sear");
let icon = document.getElementById("icon");
let dark = document.getElementById("dark");
let head = document.querySelector(".head");
let noti = document.querySelector("#noti");
let tran = document.querySelector(".tran");
let login = document.querySelector(".login");
let li = document.querySelector("#no");
let co = document.querySelector(".ri-sun-line");
let background = document.querySelector(".background");
let crose = document.getElementById("crose");
let lis = document.querySelector(".lis");
let part1 = document.querySelector(".part1");
let ser = document.getElementById("pageser");
let tax = document.querySelectorAll(".tex");
let card = document.querySelectorAll(".card");
let h = document.querySelectorAll("h3");
let auto = document.getElementById("auto");


icon.addEventListener("click", () => {
    serach.classList.toggle("show");
    if (serach.classList.contains("show")) {
        icon.innerHTML = "<i class='ri-close-line'></i>";
    } else {
        icon.innerHTML = "<i class='ri-search-line'></i>";
    }
})

 var typed = new Typed(auto, {
      strings:["Data sturctur and Alogothum", "learn paytn,java,c++","geeksforgeeks course","complete interview preparation","Must do SDE sheet "],
      typeSpeed: 50,
      backSpeed :50,
      loop : true,
    });

ser.addEventListener("click",()=>{

 auto.style.display = "none" ;

})

dark.addEventListener("click", () => {
    document.body.classList.toggle("body")

    if (document.body.classList.contains("body")) {
        head.classList.add("hed");
        lis.classList.add("hed");
        part1.classList.add("part1dark");
        tax.forEach(allfor => {
       allfor.classList.add("texdark")
        })
        card.forEach(allfor => {
       allfor.classList.add("hed")
        })
       
        h.forEach(allfor => {
       allfor.classList.add("h")
        })
       
        ser.style.borderColor = "white";
        li.style.color = "white";
        noti.style.color = "white";
        dark.innerHTML = "<i class='ri-sun-line' style='color: white;'></i>";
        dark.style.background = "black";
        tax

    } else {
        head.classList.remove("hed");
        lis.classList.remove("hed");
        part1.classList.remove("part1dark");
        tax.forEach(allfor => {
        allfor.classList.remove("texdark");
        })
        card.forEach(allfor => {
        allfor.classList.remove("hed");
        })

          h.forEach(allfor => {
       allfor.classList.remove("h")
        })
        ser.style.borderColor = "black";
        li.style.color = "black";
        noti.style.color = "black";
        dark.innerHTML = "<i class='ri-moon-line'></i>";
        dark.style.background = "rgb(235, 231, 231)";
    }
})


login.addEventListener("click", () => {

    background.classList.toggle("page")
    crose.addEventListener("click", () => {
        if (background.classList.contains("page")) {
            background.classList.remove("page")
        } else {
            background.classList.remove("page")
        }

    })
})


      