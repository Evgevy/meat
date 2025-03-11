const initTabs = () => {
    const tabButtons = document.querySelectorAll('.header__tab-btn');
    const tabPanels = document.querySelectorAll('.header__panel-item');

    tabButtons.forEach(button => {
        button.addEventListener('click', function () {
            
            tabButtons.forEach(btn => btn.classList.remove('header__tab-btn--active'));
            
            button.classList.add('header__tab-btn--active');

           
            const tabId = button.getAttribute('data-tab');

            
            tabPanels.forEach(panel => {
                panel.classList.remove('header__panel-item--active');
                if (panel.id === tabId) {
                    panel.classList.add('header__panel-item--active'); 
                }
            });
        });
    });


    const button = document.querySelector('.header__button');
    const tabMenu = document.querySelector('.header__tab-menu');
    const box = document.querySelector('.header__box');
    const header = document.querySelector('.header');
    const toggleMenuButton = document.querySelector('[data-toggle-menu]');

    button.addEventListener('click', function () {
        tabMenu.classList.toggle('active');
        box.classList.toggle('active');
        header.classList.toggle('active');
        
        document.body.classList.toggle('no-scroll', tabMenu.classList.contains('active'));

    });
    toggleMenuButton.addEventListener('click', function() {
        
        if (tabMenu.classList.contains('active')) {
          
          tabMenu.classList.remove('active');
          box.classList.remove('active');
          header.classList.remove('active');
      
          document.body.classList.remove('no-scroll');
        }
    });

}

export{initTabs};