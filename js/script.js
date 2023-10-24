(() => {
  console.log("IIFE Fired");
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
      text: "use the smart light indication in the back to know the battery percentage for the earbuds",
      image: "../img/hotspot-svgrepo-com.svg",
    },
    {
      title: "comfortable ear peace",
      text: "use the smart light indication in the back to know the battery percentage for the earbuds",
      image: "../img/hotspot-svgrepo-com.svg",
    },
    {
      title: "light weight body",
      text: "use the smart light indication in the back to know the battery percentage for the earbuds",
      image: "../img/hotspot-svgrepo-com.svg",
    },
    {
      title: "long battery life",
      text: "use the smart light indication in the back to know the battery percentage for the earbuds",
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
