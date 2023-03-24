/*===================END SCROLLTRIGGER===================*/

let pageTran = () => {
  var tl = gsap.timeline();

  tl.to(".page-transition", {
    y: 0,
    ease: Expo.easeInOut,
    duration: 0.8,
  });

  tl.to(".page-transition", {
    y: "-100%",
    delay: 0.5,
    duration: 0.3,
  });

  tl.set(".page-transition", {
    y: "-100%",
    opacity: 1,
  });
};

let mainAnimation = () => {
  gsap.registerPlugin(ScrollTrigger);

  let reveal = gsap.timeline();

  reveal.to(".description .txt-parrafo span", {
    y: 0,
    stagger: 0.01,
    duration: 0.7,
    ease: "Power3,InOut",
  });

  ScrollTrigger.create({
    trigger: ".description",
    start: "top 100%",
    end: "bottom 50%",
    toggleActions: "play none none reverse",
    animation: reveal,
  });

  let tl2 = gsap.timeline();

  tl2.to(".wrapper-img", {
    y: "-100%",
    ease: Expo.easeInOut,
    duration: 1.5,
    stagger: 0.5,
    delay: 0.6,
  });

  ScrollTrigger.create({
    trigger: ".container-img",
    start: "top 100%",
    end: "bottom 50%",
    duration: 1,
    animation: tl2
  });

  let tl3 = gsap.timeline();

  tl3.to(".wrapper-habi", {
    x: 0,
    ease: "Power2,InOut",
    duration: 0.5,
    stagger: 0.5,
  });

  ScrollTrigger.create({
    trigger: ".habilidades",
    start: "top 100%",
    end: "bottom 50%",
    animation: tl3
  });

  TweenMax.staggerFrom("header > *", 1.5, {
    y: 30,
    ease: Expo.easeInOut,
  });

  TweenMax.staggerFrom(".other", 3, {
    opacity: 1,
    ease: Expo.easeInOut,
    duration: 1.5,
    // delay: 1
  });

  const tl = gsap.timeline({ paused: true });

  const openNav = () => {
    animateOpenNav();
    const navBtn = document.querySelector(".menu-toggle-btn");

    navBtn.onclick = function (e) {
      tl.reversed(!tl.reversed());

      tl.play();
    };

    let btnClose = document.querySelector(".btnClose");

    btnClose.onclick = function (e) {
      tl.reverse();
    };
  };

  openNav();

  function animateOpenNav() {
    tl.to(".nav-container", 0.2, {
      autoAlpha: 1,
      delay: 0.1,
    });

    tl.to(
      ".site-logo",
      0.2,
      {
        color: "#fff",
      },
      "-=0.1"
    );

    tl.from(".flex > div", 0.4, {
      opacity: 0,
      y: 10,
      stagger: {
        amount: 0.04,
      },
    });

    tl.to(
      ".nav-link > a",
      1,
      {
        top: 0,
        ease: "Power2,InOut",
        stagger: {
          amount: 0.1,
        },
      },
      "-=0.4"
    );

    tl.from(
      ".nav-footer",
      0.3,
      {
        opacity: 0,
      },
      "-=0.5"
    );
  }
};

delay = (n) => {
  n = n || 2000;
  return new Promise((done) => {
    setTimeout(() => {
      done();
    }, n);
  });
};

barba.init({
  sync: true,
  transitions: [
    {
      async leave(data) {
        const done = this.async();
        pageTran();
        await delay(1000);
        done();
      },

      async enter(data) {
        mainAnimation();
      },

      async once(data) {
        mainAnimation();
      },
    },
  ],
});
