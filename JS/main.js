let header = document.querySelector('header');

window.addEventListener('scroll', () =>
    {
            header.classList.toggle('shadow', window.scrollY > 0);
    })




    const text = document.querySelector(".sec-text");

    const texts = [
        "Művészeti rendező",
        "Kurátor",
        "Közművelődési szakember"
    ];
    
    let currentIndex = 0;
    
    const textLoad = () => {
        text.textContent = texts[currentIndex];
        currentIndex = (currentIndex + 1) % texts.length; // Cycle through texts
    };
    
    // Initial load
    textLoad();
    setInterval(textLoad, 4000); // Change text every 4 seconds





    function katt2() {
        const section = document.getElementById('ide');
        section.scrollIntoView({ behavior: 'smooth' });
    }

    const postfilt =document.querySelectorAll('.filter-item');

    postfilt.forEach(item => {
        item.addEventListener('click', function() {
            // Remove 'clicked' class from all items
            postfilt.forEach(i => i.classList.remove('clicked'));
            // Add 'clicked' class to the clicked item
            this.classList.add('clicked');
        });
    });


    function katt() {
        const section = document.getElementById('first');
        section.scrollIntoView({ behavior: 'smooth' });
    }

    function katt3() {
        const section = document.getElementById('cont');
        section.scrollIntoView({ behavior: 'smooth' });
    }

    function katt4() {
        const section = document.getElementById('about');
        section.scrollIntoView({ behavior: 'smooth' });
    }


// animált ikonok
// 1.
    let iconMenu = document.querySelector('.bodymovinanim');

    let animationMenu = bodymovin.loadAnimation({
            container: iconMenu,
            renderer: 'svg',
            loop: false,
            autoplay: false,
            path: "mail.json"
    });

    var directionMenu = 1;
      iconMenu.addEventListener('mouseenter', (e) => {
      animationMenu.setDirection(directionMenu);
      animationMenu.play();
    });

      iconMenu.addEventListener('mouseleave', (e) => {
      animationMenu.setDirection(-directionMenu);
      animationMenu.play();
    });

    // 2.

    let iconMenu2 = document.querySelector('.bodymovinanim2');

    let animationMenu2 = bodymovin.loadAnimation({
            container: iconMenu2,
            renderer: 'svg',
            loop: false,
            autoplay: false,
            path: "edit.json"
    });

    var directionMenu2 = 1;
      iconMenu2.addEventListener('mouseenter', (e) => {
      animationMenu2.setDirection(directionMenu2);
      animationMenu2.play();
    });

      iconMenu2.addEventListener('mouseleave', (e) => {
      animationMenu2.setDirection(-directionMenu2);
      animationMenu2.play();
    });