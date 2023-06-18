import { useCallback } from "react";
import Particles from "react-tsparticles";
import type { Container, Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";

const ParticleContainer = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <div>
      <Particles
        id="tsparticles"
        init={particlesInit}
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                area: 800
              }
            },
            color: {
              value: "#FFF",
              animation: {
                enable: true,
                speed: 20,
                sync: true
              }
            },
            shape: {
              type: "circle",
              options: {
                polygon: {
                  sides: 5
                },
              }
            },
            stroke: {
              width: 0
            },
            opacity: {
              value: 0.5,
              random: false,
              animation: {
                enable: false,
                speed: 3,
                minimumValue: 0.1,
                sync: false
              }
            },
            size: {
              value: 2,
              random: true,
              animation: {
                enable: false,
                speed: 20,
                minimumValue: 0.1,
                sync: false
              }
            },
            move: {
              enable: true,
              speed: 3,
              direction: "none",
              random: false,
              straight: false,
              outMode: "out",
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
              }
            }
          },
          interactivity: {
            detectsOn: "canvas",
            modes: {
              grab: {
                distance: 400,
                links: {
                  opacity: 1
                }
              },
              bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 0.8
              },
            }
          },
          detectRetina: true,
          background: {
            color: "#12101B",
            image: "",
            position: "50% 50%",
            repeat: "no-repeat",
            size: "cover"
          }
        }}
      />
    </div>
  );
};

export default ParticleContainer;