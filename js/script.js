(() => {
  console.log("IIFE Fired");
  // functions

  // Function to toggle the mobile navigation
  function toggleMobileNav() {
    var navbarMobile = document.getElementById("navbar-mobile");
    var hamburgerIcon = document.getElementById("hamburger-icon");
    navbarMobile.classList.toggle("active");
    hamburgerIcon.classList.toggle("active");
  }

  // Event listener for the hamburger icon
  document.addEventListener("DOMContentLoaded", function () {
    var hamburger = document.querySelector(".hamburger");
    var navMobile = document.querySelector(".navbar-mobile");

    hamburger.addEventListener("click", function () {
      this.classList.toggle("active");
      navMobile.classList.toggle("active");
    });
  });

  (() => {
    //   variables
    const model = document.querySelector("#model");
    const hotspots = document.querySelectorAll(".Hotspot");

    const InfoBoxes = [
      {
        title: "led light logo",
        text: "use the smart light indication in the back to know the battery percentage for the earbuds",
        image: "../img/hotspot-svgrepo-com.svg",
      },
      {
        title: "magnetic charging",
        text: "has a fast charging trechnology with the magnatic pins so it can snap at the right place",
        image: "../img/hotspot-svgrepo-com.svg",
      },
      {
        title: "comfortable ear peace",
        text: "comfortable one size earpeace that makes the it for all to wear",
        image: "../img/hotspot-svgrepo-com.svg",
      },
      {
        title: "light weight body",
        text: "light-weight plastic body to to make it comfortable to wear for long sessions",
        image: "../img/hotspot-svgrepo-com.svg",
      },
      {
        title: "long battery life",
        text: "100mah battery for the uninteripated long hours sessions",
        image: "../img/hotspot-svgrepo-com.svg",
      },
    ];
    // functions

    function modelLoaded() {
      hotspots.forEach((hotspot) => {
        hotspot.style.display = "block";
      });
    }

    function loadInfo() {
      InfoBoxes.forEach((infoBox, index) => {
        let selected = document.querySelector(`#hotspot-${index + 1}`);

        const titleElement = document.createElement("h2");
        titleElement.textContent = infoBox.title;

        const textElement = document.createElement("p");
        textElement.textContent = infoBox.text;

        selected.appendChild(titleElement);
        selected.appendChild(textElement);
      });
    }
    loadInfo();

    function showInfo() {
      let selected = document.querySelector(`#${this.slot}`);
      gsap.to(selected, 1, { autoAlpha: 1 });
    }

    function hideInfo() {
      let selected = document.querySelector(`#${this.slot}`);
      gsap.to(selected, 1, { autoAlpha: 0 });
    }

    // event listeners
    model.addEventListener("load", modelLoaded);

    hotspots.forEach(function (hotspot) {
      hotspot.addEventListener("mouseover", showInfo);
      hotspot.addEventListener("mouseout", hideInfo);
    });
  })();

  // this code is for the explodeview scroll animation

  const canvas = document.querySelector("#scroll-trigger");
  const context = canvas.getContext("2d");
  canvas.width = 1920;
  canvas.height = 1080;
  const frameCount = 200;
  const images = [];

  const buds = {
    frame: 0,
  };

  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = `img/video-animation-2GI_${(i + 2000)
      .toString()
      .padStart(4, "0")}.jpg`;
    img.onload = render; // Ensure render is called after each image is loaded
    images.push(img);
  }

  // console.log(images);

  //we are not animating a DOM element, but rather an object
  gsap.to(buds, {
    frame: 200,
    snap: "frame",
    scrollTrigger: {
      trigger: "#scroll-trigger",
      pin: true,
      scrub: 4,
      markers: false,
      start: "center center",
    },
    onUpdate: render,
  });

  images[0].addEventListener("onload", render);

  function render() {
    if (buds.frame >= 0 && buds.frame < images.length) {
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(images[buds.frame], 0, 0);
    }
  }

  // here is the code for the x-ray image

  // variables
  let imageCon = document.querySelector("#imageCon"),
    drag = document.querySelector(".image-drag"),
    left = document.querySelector(".image-left"),
    dragging = false,
    min = 0,
    max = imageCon.offsetWidth;

  // function
  function onDown() {
    dragging = true;
    console.log("on down Called");
  }

  function onUp() {
    dragging = false;
    console.log("on up Called");
  }

  function onMove(event) {
    if (dragging === true) {
      let x = event.clientX - imageCon.getBoundingClientRect().left;
      if (x < min) {
        x = min;
      } else if (x > max) {
        x = max - 4;
      }

      drag.style.left = x + "px";
      left.style.width = x + "px";
    }
  }

  // event listeners
  drag.addEventListener("mousedown", onDown);
  document.body.addEventListener("mouseup", onUp);
  document.body.addEventListener("mousemove", onMove);

  // this is for the scroll trigger animation on product Selection

  document.addEventListener("DOMContentLoaded", function () {
    const productItems = document.querySelectorAll(".product-item");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateProductItem(entry.target);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 } // Adjust the threshold as needed
    );

    productItems.forEach((item) => {
      observer.observe(item);
    });

    function animateProductItem(item) {
      gsap.to(item, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: "power2.out",
        markers: true,
      });
    }
  });
})();
