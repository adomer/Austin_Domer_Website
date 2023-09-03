const homeParticlesOptions = {
  fullScreen: {
    zindex: 0,
    enable: false,
  },
  style: {
    position: 'absolute',
  },
  // background: {
  //   color: {
  //     value: '#ff8888',
  //   },
  // },
  fpsLimit: 120,
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: 'push',
      },
      onHover: {
        enable: true,
        mode: 'repulse',
      },
      resize: true,
    },
    modes: {
      push: {
        quantity: 6,
      },
      repulse: {
        distance: 100,
        duration: 0.5,
      },
    },
  },
  particles: {
    color: {
      value: '#fff',
    },
    links: {
      color: '#fff',
      distance: 200,
      enable: true,
      opacity: 0.3,
      width: 1,
    },
    move: {
      direction: 'none',
      enable: true,
      outModes: {
        default: 'bounce',
      },
      random: false,
      speed: 1,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        area: 700,
      },
      value: 90,
    },
    opacity: {
      value: 0.3,
    },
    shape: {
      type: 'circle',
    },
    size: {
      value: { min: 1, max: 5 },
    },
  },
  detectRetina: true,
}

export default homeParticlesOptions
