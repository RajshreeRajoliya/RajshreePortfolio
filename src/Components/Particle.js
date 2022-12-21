import Particles from 'react-particles-js';

function Particle({theme}) {

  return (
    <>
      <Particles width="100%" height="100vh" 
              params={{
                particles: {
                  number:{
                    value:109,
                    density:{
                      enable: true,
                      value_area: 1200
                    }
                  },
                  color:{
                    value: "#CCCCCC"
                  },
                  shape:{
                    type: 'circle',
                    stroke: {
                      width: 0
                    },
                    polygon:{
                      nb_sides: 6
                    }
                  },
                  line_linked: {
                    enable: false,
                    distance: 150,
                    opacity: 0.9,
                    width: 1,
                    shadow: {
                      enable: true,
                      color: "#007bff",
                      blur: 5
                    }
                  },
                  move:{
                    enable: true,
                    random: true,
                    speed: .6,
                    attract:{
                      rotateX: 600,
                      rotateY: 1200
                    }
                  },
                  size: {
                    value: 4,
                    random: true,
                    anim:{
                      speed: 40,
                      size_min: 0.1
                    }
                  },
                  opacity: {
                    value: 0.8,
                    anim: {
                      speed: 1,
                      opacity_min: 0.1
                    }
                  }
                }
              }}
              style={{backGroundColor:"red"}}
      />
    </>
  )
}

export default Particle;
