"use client";
import React from "react";

import Particles from "react-tsparticles";
import { useCallback } from "react";
import { loadSlim } from "tsparticles-slim";

const Config = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);

    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <div  style={{  opacity:".7" , backgroundColor:"" }}>
      <Particles style={{minHeight:"350px"}}
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={
            
            {
                "particles": {
                  "number": {
                    "value": 20,
                    "density": {
                      "enable": true,
                      "value_area": 500
                    }
                  },
                  "color": {
                    "value": "#5613fd"
                  },
                  "shape": {
                    "type": "polygon",
                    "stroke": {
                      "width": 1,
                      "color": "#000"
                    },
                    "polygon": {
                      "nb_sides": 6
                    },
                    "image": {
                      "src": "img/github.svg",
                      "width": 100,
                      "height": 100
                    }
                  },
                  "opacity": {
                    "value": 0.3,
                    "random": true,
                    "anim": {
                      "enable": false,
                      "speed": 1,
                      "opacity_min": 0.1,
                      "sync": false
                    }
                  },
                  "size": {
                    "value": 160,
                    "random": false,
                    "anim": {
                      "enable": true,
                      "speed": 10,
                      "size_min": 40,
                      "sync": false
                    }
                  },
                  "line_linked": {
                    "enable": false,
                    "distance": 200,
                    "color": "#000",
                    "opacity": 1,
                    "width": 2
                  },
                  "move": {
                    "enable": true,
                    "speed": 5,
                    "direction": "none",
                    "random": false,
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
                      "enable": false,
                      "mode": "grab"
                    },
                    "onclick": {
                      "enable": false,
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
                      "distance": 300,
                      "size": 40,
                      "duration": 2,
                      "opacity": 8,
                      "speed": 3
                    },
                    "repulse": {
                      "distance": 200,
                      "duration": 0.4
                    },
                    "push": {
                      "particles_nb": 4
                    },
                    "remove": {
                      "particles_nb": 2
                    }
                  }
                },
                "retina_detect": true,
                fullScreen: false,
              }
    
    }
      />
    </div>
  );
};

export default Config;
