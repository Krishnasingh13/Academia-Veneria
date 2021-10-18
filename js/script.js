function locomotiveScroll() {

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#webpage"),
    smooth: true
  });

  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy("#webpage", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector("#webpage").style.transform ? "transform" : "fixed"
  });

  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();


}
locomotiveScroll();

if (window.screen.width > 650) {
  function initilzationOfGsap() {
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#imgs",
        pin: true,
        // markers: true,
        start: "top top",
        scroller: "#webpage",
        scrub: 1.3,
        end: "+=60%",
        // pinSpacing: false
      }
    });

    tl.addLabel('abcd')
      .to('#l1', {
        left: '-50%',
        opacity: 0,
        ease: Power2.easeInOut
      }, 'abcd')
      .to('#r1', {
        right: '-50%',
        opacity: 0,
        ease: Power2.easeInOut
      }, 'abcd')
      .to('#l2', {
        left: '-50%',
        opacity: 0,
        ease: Power2.easeInOut
      }, 'abcd')
      .to('#r2', {
        right: '-50%',
        opacity: 0,
        ease: Power2.easeInOut
      }, 'abcd')
      .to('.center', {
        width: '100%',
        ease: Power2.easeInOut
      }, 'abcd');
  }
  initilzationOfGsap();
}

function initialzationOfTextillateJS() {
  // text animation
  $('.tlt').textillate({
    selector: '.texts',
    initialDelay: 0,
    autoStart: true,
    in: {
      effect: 'fadeInUp',
      delayScale: 1.5,
      delay: 20,
      sync: false,
      shuffle: false,
      reverse: false,
    },
    type: 'char'
  });
}

function initialzationTextAndLine() {
  let tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: '#about',
      scroller: "#webpage",
      // markers: true,
      start: 'top 30%'
    }
  });

  tl2
    .to('.a', {
      opacity: 1,
      onStart: function () {
        secondPageText();
      }
    })
    .to('.aa', {
      opacity: 1,
      onStart: function () {
        $('#about .aa').textillate({
          selector: '.texts',
          initialDelay: 0,
          autoStart: true,
          in: {
            effect: 'fadeInUp',
            delayScale: 1,
            delay: 15,
            sync: false,
            shuffle: false,
            reverse: false,
          },
          type: 'char'
        });
      }
    })
    .to('#about #amain .line', {
      width: '100%',
      duration: 2,
      ease: 'Expo.easeInOut'
    });

  function secondPageText() {
    $('#about .a').textillate({
      selector: '.texts',
      initialDelay: 0,
      autoStart: true,
      in: {
        effect: 'fadeInUp',
        delayScale: 1,
        delay: 17,
        sync: false,
        shuffle: false,
        reverse: false,
      },
      type: 'char'
    });
  }
}

function initialzationTextAndImage() {
  let tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: '#about #adesc',
      // markers: true,
      scroller: "#webpage",
      start: 'top 30%'
    }
  });

  tl3
    .to('.word', {
      duration: 1,
      stagger: .7,
      opacity: 1,
      onStart: function () {
        $('#aleft .word').textillate({
          selector: '.texts',
          initialDelay: 0,
          autoStart: true,
          in: {
            effect: 'fadeInUp',
            delayScale: 1,
            delay: 17,
            sync: false,
            shuffle: false,
            reverse: false,
          },
          type: 'word'
        });
      }
    });

  if (window.screen.width > 650) {
    tl3.to('#ellipse', {
      opacity: 1,
      scale: 2,
      duration: 1
    }, '-=1')
      .to('#ellipse img', {
        scale: 1,
        duration: 1,
      }, '-=1');
  }
}

if (window.screen.width <= 650) {
  let tlForImg = gsap.timeline({
    scrollTrigger: {
      trigger: '#about #ellipse',
      // markers: true,
      scroller: "#webpage",
      start: 'top 50%'
    }
  });
  tlForImg
    .to('#ellipse', {
      opacity: 1,
      scale: 2,
      duration: 1
    }, '-=1')
    .to('#ellipse img', {
      scale: 1,
      duration: 1,
    }, '-=1');
}

function initialzationOfLastPart() {
  let tl4 = gsap.timeline({
    scrollTrigger: {
      trigger: "#products",
      // markers: true,
      scroller: "#webpage",
      start: "top 30%",
    }
  });

  tl4
    .to('#pright .row', {
      opacity: 1,
      y: -30,
      duration: 1,
      stagger: .3
    });


  if (window.screen.width > 650) {
    tl4.to('#pleft #pimg', {
      opacity: 1,
      scale: 2,
      duration: 1,
      ease: Expo.easeInOut
    }, '-=1')
      .to('#pleft #pimg img', {
        scale: 1,
        duration: 1,
        ease: Expo.easeInOut
      }, '-=1');
  }
}

if (window.screen.width <= 650) {
  let tlForImg2 = gsap.timeline({
    scrollTrigger: {
      trigger: '#products #pimg',
      // markers: true,
      scroller: "#webpage",
      start: 'top 75%'
    }
  });
  tlForImg2
    .to('#pleft #pimg', {
      opacity: 1,
      scale: 2,
      duration: 1,
      ease: Expo.easeInOut
    }, '-=1')
    .to('#pleft #pimg img', {
      scale: 1,
      duration: 1,
      ease: Expo.easeInOut
    }, '-=1');
}


initialzationOfTextillateJS();
initialzationTextAndLine();
initialzationTextAndImage();
initialzationOfLastPart();

