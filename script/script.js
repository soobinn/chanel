
window.onload = function () {


    let text = document.createTextNode('No.');
    document.querySelector('.swiper-pagination').prepend(text);

    const cursorParent = document.getElementById('cursor');
    const cursorChild = cursorParent.children[0];
    window.addEventListener('mousemove', mousemove)
    window.addEventListener('mousedown', mousedown)
    window.addEventListener('mouseup', mouseup)

    let stage = ''
    let carouselDirection = ''
    let scale = 1;
    let cursorX = 0, cursorY = 0
    function mousemove(e) {

        cursorX = e.pageX - cursorParent.offsetWidth / 2
        cursorY = e.pageY - cursorParent.offsetHeight / 2

        cursorParent.style.transform =
            `translate3d(${cursorX}px,${cursorY}px,0)`

        switch (e.target.getAttribute('data-cursor')) {
            case 'carousel':

                cursorChild.setAttribute('data-name', e.target.getAttribute('data-name'))
                scale = 5
                if (stage === 'carousel') return
                cursorChild.classList.add('cursor')
                stage = 'carousel'
                break
            case 'img':
                cursorChild.setAttribute('data-name', e.target.getAttribute('data-name'))
                scale = 5
                if (stage === 'img') return
                cursorChild.classList.add('cursor')

                stage = 'img'
                break
            case 'link':

                cursorChild.setAttribute('data-name', e.target.getAttribute('data-name'))
                scale = 5
                if (stage === 'link') return
                cursorChild.classList.add('cursor')
                stage = 'link'
                break

            default:
                cursorChild.setAttribute('data-name', e.target.getAttribute(""))
                if (stage === 'default') return
                cursorChild.classList.remove('cursor')
                scale = 1
                stage = '';
                break
        }

        cursorChild.style.setProperty('--cursor-scale', scale)
    }
    function mousedown(e) { }
    function mouseup(e) { }


    //메뉴

    document.querySelector('.menu_circle').addEventListener('click', function () {

        document.querySelector('.list').classList.add('show')


    });
    document.querySelector('.close>a').addEventListener('click', function () {

        document.querySelector('.list').classList.remove('show')


    });

    const spyEls = document.querySelectorAll('.scroll-spy');
    spyEls.forEach(function (spyEl) {

        new ScrollMagic
            .Scene({
                triggerElement: spyEl, //보임의 유무 감시
                triggerHook: 0.4
            })
            .setClassToggle(spyEl, 'show2')
            .addTo(new ScrollMagic.Controller());

    });

    // 메뉴스크롤
    window.addEventListener('wheel', (event) => {
        let wheel = event.wheelDeltaY;

        if (wheel > 0) {
            document.querySelector('header').classList.remove('up')
        }
        else { // (wheel < 0)
            document.querySelector('header').classList.add('up')
        }

    });
};