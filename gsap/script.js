// gsap.to ( ".box",{
//     x:1100,
//     duration:2,
//     delay:1,
//     backgroundColor: 'yellow',
//     rotate: 360,
//     borderRadius: '50%',
//     scale: 0.8,
// }

// )
// gsap.from (
//     "h1",{
//         y:50,
//         duration:1,
//         delay:1,
//         opacity:0,
//         stagger:0.2

//     }
// )

var tl= gsap.timeline()
tl.to(
    "#box1",{
        x:1500,
        duration:2.5,
        delay:1

    }
)
tl.to(
    "#box2",{
        x:1500,
        rotate:360,
        duration:2.5,

    }
)
tl.to(
    "#box3",{
        x:800,
        rotate:-360,
        duration:2
    }
)