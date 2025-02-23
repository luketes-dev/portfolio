/* MENU BUTTONS */
const sobreMimButton = document.querySelector('#sobre-mim-button')
const projetosButton = document.querySelector('#projetos-button')

const containerSobreMim = document.querySelector("#sobre-mim-container")
const containerProjetos = document.querySelector('#projetos-container')

const dados = document.getElementById('dados')
const main = document.querySelector('main')

const titulo = document.getElementById('titulo')
const closeButton = document.querySelector("#close-button")

sobreMimButton.addEventListener('click', () => {
  abrirJanela(containerSobreMim, 'Sobre Mim')
})

projetosButton.addEventListener('click', () => {
  abrirJanela(containerProjetos, 'Meus Projetos')
})

closeButton.addEventListener('click', () => {
  main.style.display = 'none'
  dados.style.display = 'block'
  containerSobreMim.style.display = 'none'
  containerProjetos.style.display = 'none'
})

function abrirJanela(janela, tituloJanela) {
  dados.style.display = 'none'
  titulo.innerText = tituloJanela
  main.style.display = 'block'
  janela.style.display = 'flex'
}

particlesJS('particles-js',
    {
      "particles": {
        "number": {
          "value": 80,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": "#ffffff"
        },
        "shape": {
          "type": "circle",
          "stroke": {
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
          "value": 0.5,
          "random": false,
          "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 5,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 0.1,
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
          "speed": 3,
          "direction": "none",
          "random": true,
          "straight": false,
          "out_mode": "out",
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
            "mode": "repulse"
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
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
          },
          "repulse": {
            "distance": 200
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
      "config_demo": {
        "hide_card": false,
        "background_color": "#b61924",
        "background_image": "",
        "background_position": "50% 50%",
        "background_repeat": "no-repeat",
        "background_size": "cover"
      }
    }
  );