//Menu toggle-effect
$(document).ready(function(){
  $(".menu-icon").on("click",function(){
    $("nav ul").toggleClass("showing");
  });
});

//Scrolling Effect
$(window).on('scroll', function(){
  if($(window).scrollTop()) {
    $('.header_section').addClass('black');
  }
  else{
    $('.header_section').removeClass('black')
  }
})



gsap.registerPlugin(ScrollToPlugin, CSSRulePlugin);


// VARIABLES

const headerHome = document.querySelector('.site-header-home'),
slider = document.querySelector('.swiper-container-home'),
sliderNav = document.querySelector('.home-slider-navigation'),
sliderContent = document.querySelector('.home-slider__toContent'),
sliderContentBefore = CSSRulePlugin.getRule(".home-slider__toContent:before"),
sliderSlide = document.querySelector('.home-slider__toSlide');

// SWIPER
var mySwiperHome = new Swiper(slider, {
  // Optional parameters
  speed: 1500,
  grabCursor: false,
  direction: 'vertical',
  mousewheel: true,
  keyboard: {
    enabled: true } });



// SLIDER ON slidechange
mySwiperHome.on('slideChange', function () {
  // Animation

  // navigation change active class
  sliderNav.childNodes.forEach(e => {
    if (e.getAttribute('data-index') === this.activeIndex.toString()) {
      e.classList.add('active');
    } else {
      e.classList.remove('active');
    }
  });

  // if last slide show 'go to service'
  const scrollAnimation = gsap.from(sliderContentBefore, {
    duration: 0.8,
    opacity: 1,
    repeat: 1,
    yoyo: true });

  if (mySwiperHome.isEnd) {

    scrollAnimation.play();

  } else {
    gsap.set(sliderContentBefore, { opacity: 0 });
    scrollAnimation.kill();
  }
});

// SLIDER ON slideEnd
mySwiperHome.on('slideChange', function () {
  gsap.set('.swiper-slide .slider-text', { opacity: 0 });
  gsap.set('.swiper-slide .gold', { width: "0px" });
  gsap.set('.swiper-slide .btn__wrapper', { opacity: 0 });
});

mySwiperHome.on('transitionEnd', function () {

  gsap.to('.slider-text-bottom', {
    duration: .2,
    opacity: 1 });

  gsap.from('.slider-text-bottom', {
    duration: .7,
    ease: "power4. inOut",
    x: -290 });

  gsap.to('.slider-text-top', {
    duration: .2,
    opacity: 1 });

  gsap.from('.slider-text-top', {
    duration: .7,
    ease: "power4. inOut",
    x: 290 });

  gsap.to('.gold', {
    duration: .3,
    width: "40px" });

  gsap.to('.slider-inner .btn__wrapper', {
    duration: .5,
    opacity: 1 });

});


//Slide to index according to 'data-index'
function slide(e) {
  let target = e.target;
  if (target.classList[0] === 'nav-point') {
    let index = target.getAttribute('data-index');
    mySwiperHome.slideTo(index);
  }
}

// NAVIGATION EVENT
sliderNav.addEventListener('click', slide);

/* Get Our Elements */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const toggle = player.querySelector('.toggle');
const playIcon = document.querySelector('.play-icon');

var playing = false;
/* Build out functions */
function togglePlay() {
  const method = video.paused ? 'play' : 'pause';
  video[method]();
  if(playing == false){
    $('.play-icon').css('opacity', '0');
    playing = true;
  } else{
    $('.play-icon').text('❚ ❚');
    $('.play-icon').css('opacity', '1');
    playing = false;
  }
  console.log(playing);
}

function updateButton() {
  const icon = this.paused ? '►' : '❚ ❚';
  console.log(icon);
  toggle.textContent = icon;
}


/* Hook up he event listners */
video.addEventListener('click', togglePlay);
playIcon.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
toggle.addEventListener('click', togglePlay);

let mousedown = false;
progress.addEventListener('click', scrub);





// video tow
