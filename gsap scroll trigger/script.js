// gsap.from("#page1 #box" ,{
//     scale:0,
//     delay:1,
//     duration:2,
//     rotate:360,

// }

// ) 
// gsap.from("#page2 #box" ,{
//     scale:0,
//     duration:2,
//     rotate:360,
//     scrollTrigger:{
//         trigger: "#page2 #box",
//         scroller:"body",
//         markers:true,
//         start:"top 60%"
//     }

// }

// ) 
// gsap.from("#page3 #box" ,{
//     scale:0,
//     delay:1,
//     duration:2,
//     rotate:360,
//     scrollTrigger:"#page3 #box",

// }

// )
// 
gsap.from("#page2 #box" ,
    {
        scale:0,
        opacity:0,
        duration:1,
        rotate:720,
        scrollTrigger:{
            trigger:"#page2 #box",
            scroller:"body",
            markers: "true",
             start:"top 60%",
             end: "30%" ,
             scrub:2

        }
    }
)