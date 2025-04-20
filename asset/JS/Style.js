document.addEventListener('DOMContentLoaded', function() {

    const filterButtons = document.querySelectorAll('.suggested-products .filter-nav .filter-btn');
    const productItems = document.querySelectorAll('.suggested-products .product-grid .product-item');

    if (!filterButtons.length) {
        console.warn('Filter buttons not found. Check the selector ".suggested-products .filter-nav .filter-btn"');
        return;
    }
    if (!productItems.length) {
        console.warn('Product items not found. Check the selector ".suggested-products .product-grid .product-item"');
        return;
    }

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const selectedFilter = this.dataset.filter;

            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            filterProducts(selectedFilter);
        });
    });

    function filterProducts(filter) {
        productItems.forEach(item => {
            const itemCategory = item.dataset.category?.toLowerCase();

            if (filter === 'all' || itemCategory === filter?.toLowerCase()) {
                item.style.display = 'flex';
            } else {
                item.style.display = 'none';
            }
        });
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const testimonialSwiper = new Swiper('.testimonial-swiper', {
      direction: 'horizontal', 
      loop: true,             
      slidesPerView: 1,       
      spaceBetween: 30,       
      effect: 'slide',       
  
      pagination: {
        el: '.swiper-pagination',
        clickable: true, // Cho phép click vào chấm để chuyển slide
      },
  
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
  
      keyboard: {
          enabled: true,
          onlyInViewport: false,
      },
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-accordion .faq-item');

    if (!faqItems.length) {
        console.warn('No FAQ items found. Check selector ".faq-accordion .faq-item"');
        return;
    }

    faqItems.forEach(item => {
        const questionButton = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');

        if (!questionButton || !answer) {
            console.warn('FAQ item is missing question button or answer div.', item);
            return; 
        }

        questionButton.addEventListener('click', () => {
            const isCurrentlyActive = item.classList.contains('active');

            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                    const otherButton = otherItem.querySelector('.faq-question');
                    const otherAnswer = otherItem.querySelector('.faq-answer');
                    if (otherButton) otherButton.setAttribute('aria-expanded', 'false');
                    if (otherAnswer) otherAnswer.setAttribute('aria-hidden', 'true');
                }
            });

            item.classList.toggle('active');
            const isActive = item.classList.contains('active');
            questionButton.setAttribute('aria-expanded', isActive ? 'true' : 'false');
            answer.setAttribute('aria-hidden', isActive ? 'false' : 'true');
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const newsSwiper = new Swiper('.news-swiper', {
        loop: false, 
        slidesPerView: 1,
        spaceBetween: 15, // Adjust space between cards

        navigation: {
            nextEl: '.news-next',
            prevEl: '.news-prev',
        },

        breakpoints: {
            640: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            992: {
                slidesPerView: 3,
                spaceBetween: 25 // Adjust space for 3 slides
            }
        },

        keyboard: {
            enabled: true,
            onlyInViewport: false,
        },

    });
});