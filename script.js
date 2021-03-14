
const pa = document.querySelector('.pa-animation');
const hook = document.querySelector('.hook-animation');
const secondHook = document.querySelector('.second-hook-animation');
const switchOsla = document.getElementById('switchOsla');

const chronosphere = document.getElementById('chronosphere');

const osel = document.getElementById('osel');

document.addEventListener('DOMContentLoaded', function() {


    // SWITCHOSLA
    switchOsla.onclick = function() {
        osel.style.animationPlayState == 'paused' ?
        osel.style.animationPlayState = 'running' :
        osel.style.animationPlayState = 'paused';
    }
    // HOOKS
    setInterval(() => {
        pa.classList.remove('pa-animation');
        hook.classList.remove('hook-animation');
        secondHook.classList.remove('second-hook-animation');
        setTimeout(() => {
            pa.classList.add('pa-animation');
            hook.classList.add('hook-animation');
            secondHook.classList.add('second-hook-animation');
        }, 200)
    }, 6000)

    let line2 = true;
    function tideMoving() {
        console.log(line2)
        if (line2) {
            anime({
                targets: '.tidehunter-wrapper',
                translateX: function() {
                  return anime.random(0, 500);
                },
                easing: 'easeInOutQuad',
                duration: 750,
                complete: tideMoving
              });
        }
      }
    function facelessMoving() {
        console.log(line2)
        if (line2) {
            anime({
                targets: '.faceless-wrapper',
                translateX: function() {
                    return anime.random(-500, 0)
                },
                scale: "-1, 1",
                easing: 'easeInOutQuad',
                duration: 750,
                complete: facelessMoving
            });
        }
      }

    
      facelessMoving();
      tideMoving();

      chronosphere.onclick = function() {
          line2 = false;
          
          document.getElementById('line-2').style.background = 'rgb(164,126,224)';

          document.querySelector('.faceless__ulti').style.opacity = 0.6;
          document.querySelector('.tidehunter-wrapper').style.opacity = 0.3;

          setTimeout(() => {
            document.getElementById('line-2').style.background = 'rgb(230, 240, 141)';
            line2 = true;
            facelessMoving();
            tideMoving();
            document.querySelector('.tidehunter-wrapper').style.opacity = 1;
            document.querySelector('.faceless__ulti').style.opacity = 1;

          }, 5000)
      }
});


