
particlesJS("particles-js", {
  "particles": {
    "number": {
        //numero della densità delle stelle
      "value": 100,
      "density": {
        "enable": true,
        //numero della densità delle stelle area
        "value_area": 150.1476416322727
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "circle",
      "stroke": {
      //bordo stelle
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      //opacità delle stelle, più piccola è e più è sfocata
      "value": 0.48927153781200905,
      "random": false,
      "anim": {
        "enable": true,
        //velocità dello sbrilluccichio delle stelle
        "speed": 0.2,
        "opacity_min": 0,
        "sync": false
      }
    },
    "size": {
      //dimensione della stella
      "value": 3,
      "random": true,
      "anim": {
        "enable": true,
        //velocità dell'ingrandirsi e rimpicciolirsi della stella
        "speed": 5,
        "size_min": 0,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 150,
      "color": "#ffffff",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      //velocità del movimento delle stelle
      "speed": 0.5,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "bubble"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        //il range del puntatore
        "distance": 20.91608391608392,
        //dimensione della stella quando è nel range
        "size": 5,
        "duration": 3,
        "opacity": 100,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        //numero di particelle emesse con il click
        "particles_nb": 20
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});
