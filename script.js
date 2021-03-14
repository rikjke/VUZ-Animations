
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
        if (line2) {
            anime({
                targets: '.tidehunter-wrapper',
                left: function() {
                  return anime.random(0, 40) + '%';
                },
                easing: 'easeInOutQuad',
                duration: 750,
                complete: tideMoving
              });
        }
      }
    function facelessMoving() {
        if (line2) {
            anime({
                targets: '.faceless-wrapper',
                left: function() {
                    return anime.random(-40, 0) + '%';
                },
                scale: "-1, 1",
                easing: 'easeInOutQuad',
                duration: 750,
                complete: facelessMoving
            });
        }
    }

    let blackholeValue = 0;

    function blackhole() {
        anime({
            targets: ['.team', '.blackholed'],
            rotate: function() {
                blackholeValue += 15;
                return blackholeValue;
            },
            lopp: true,
            complete: blackhole
        });
    }

    document.querySelector('.blackhole__ulti').onclick = () => {
        document.querySelector('.blackholed').style.opacity = 0.5;
        document.querySelector('.blackhole__ulti').opacity = 0.5;
        document.querySelector('.blackhole__ulti').onclick = '';
        blackhole();
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


