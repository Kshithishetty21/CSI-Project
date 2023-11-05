// Home Carousel
$('.home-carousel').owlCarousel({
    loop:true,
    margin:0,
    dots:true,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

// Navbar
window.addEventListener('scroll',function(){
    let navbar = document.getElementById("navbar");
    navbar.classList.toggle('fixed' , this.window.scrollY > 0)
})