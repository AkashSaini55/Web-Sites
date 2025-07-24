function locomotiveAnimation() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true,

        // for tablet smooth
        tablet: { smooth: true },

        // for mobile
        smartphone: { smooth: true }
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length
                ? locoScroll.scrollTo(value, 0, 0)
                : locoScroll.scroll.instance.scroll.y;
        },
        getBoundingClientRect() {
            return {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight
            };
        }
    });

    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();
}

locomotiveAnimation()

function navfunction() {
    let nav = document.querySelector("nav");


    nav.addEventListener("mouseenter", function () {
        let tl = gsap.timeline()

        tl.to(".nav-bo", {
            height: "21vh",
            duration: 0.5
        })
        tl.to(".nav-p2 h5", {
            display: "block",
            duration: 0.1

        })
        tl.to(".nav-p2 h5 span", {
            y: 0,

            stagger: {
                amount: 0.5
            }
        })
    });

    nav.addEventListener("mouseleave", function () {
        let tl = gsap.timeline()
        tl.to(".nav-p2 h5 span", {
            y: 25,
            stagger: {
                amount: 0.18
            }
        })
        tl.to(".nav-p2 h5", {
            display: "none",
            duration: 0.1
        })
        tl.to(".nav-bo", {
            height: 0,
            duration: 0.1
        })
    });

}

navfunction()

let part2 = document.querySelectorAll(".part2-el");
let part2Img = document.querySelectorAll(".part2-el img");

function move() {
    part2.forEach(function (ele) {
        ele.addEventListener("mouseenter", () => {
            gsap.to(ele.childNodes[3], {
                opacity: 1,
                scale: 1
            })
        })
        ele.addEventListener("mouseleave", () => {
            gsap.to(ele.childNodes[3], {
                opacity: 0,
                scale: 0
            })
        })
        ele.addEventListener("mousemove", (dets) => {

            gsap.to(ele.childNodes[3], {
                x: dets.x - ele.getBoundingClientRect().x - 50,
                y: dets.y - ele.getBoundingClientRect().y - 130
            })


        })
    })
}

move()


function hovers() {
    let hove = document.querySelectorAll(".sec-part2")

    hove.forEach(function (ele) {
        ele.addEventListener("mouseenter", () => {
            gsap.to(ele.childNodes[5], {
                opacity: 1,
                scale: 1
            })
        })
        ele.addEventListener("mouseleave", () => {
            gsap.to(ele.childNodes[5], {
                opacity: 0,
                scale: 0
            })
        })
        ele.addEventListener("mousemove", (dets) => {

            gsap.to(ele.childNodes[5], {
                x: dets.x - ele.getBoundingClientRect().x - 50,
                y: dets.y - ele.getBoundingClientRect().y - 100
            })


        })
    })
}

hovers()

function vAnimetion() {
    let center = document.querySelector(".center");
    let video = document.getElementById("video");


    center.addEventListener("click", function () {
        video.play()
        gsap.to(video, {
            transform: "scaleX(1) scaleY(1)",
            opacity: 1,
            borderRadius: 0
        })
    })

    video.addEventListener("click", function () {
        video.pause()
        gsap.to(video, {
            transform: "scaleX(0.7) scaleY(0)",
            opacity: 0,
            borderRadius: "30px"
        })
    })
}

vAnimetion()

function videoanimetion() {

    let video = document.querySelectorAll(".sec-part2");

    video.forEach(function (ele) {
        ele.addEventListener("mouseenter", () => {
            ele.childNodes[3].style.opacity = 1;
            ele.childNodes[3].play()
        })

        ele.addEventListener("mouseleave", () => {
            ele.childNodes[3].style.opacity = 0;
            ele.childNodes[3].pause()
            ele.childNodes[3].load()
        })
    })

}

videoanimetion()

function scrolloranimetion() {

    gsap.from(".page8-scr h4", {
        x: 0,
        duration: 1,
        scrollTrigger: {
            trigger: ".page8-scr",
            scroller: "#main",
            start: "top 90%",
            end: "top 10%",
            scrub: true,
        }
    })

}

scrolloranimetion()


let tl = gsap.timeline();

tl.from(".page1", {
    opacity: 0,
    duration: 0.3,
    delay: -0.2
})
tl.from(".page1", {
    transform: "scaleX(0.7) scaleY(0.2)" ,
    borderRadius: "160px",
    duration: 2,
    ease: "expo.out"
})

tl.from("nav", {
    opacity: 0
})

tl.from(".page1 h1,.page1 p,.page1 some,.moving .move,.page1 .some", {
    opacity: 0,
      transform: "scaleX(0.7) scaleY(0.2) translateY(80%)" ,
    duration: 0.5,
    stagger:0.2
})