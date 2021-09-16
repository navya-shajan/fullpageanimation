new fullpage('#fullPage',{
    autoScrolling: true,
    navigation: true,
    onLeave: (origin,destination,direction) => {
        const section = destination.item;
        const title = section.querySelector("h1");
        const tl = new TimelineMax({delay: 0.5});
        tl.fromTo(title,0.5, { y: "50", opacity:0}, {y:0, opacity:1});
        const discription = document.querySelectorAll('.discription');   
        if (destination.index === 1){
            const chairs = document.querySelector('.chair');
            

            tl.fromTo(chairs, 0.7, { x: "100%" }, { x: "-35%" })
            .fromTo(discription, 0.5, { y: "50", opacity: 0 }, { y: 0, opacity: 1 });
        }
        if (destination.index === 2){
            const plants = document.querySelector('.plants');
            tl.fromTo(plants, 0.7, { x: "-100%" }, { x: "6%"})
            .fromTo(discription, 0.5, { y: "50", opacity: 0 }, { y: 0, opacity: 1 });
        }
    
    }
});