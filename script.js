document.addEventListener('DOMContentLoaded', function () {
  
  function setupInfiniteScroll() {
    const gridWrapper = document.querySelector('.grid-wrapper');
    if (!gridWrapper) return;

    const items = Array.from(gridWrapper.children);
    const itemWidth = items[0]?.offsetWidth + 10 || 260;
    const totalItems = items.length / 2;
    const totalScrollWidth = itemWidth * totalItems;
    const scrollSpeed = 100;
    const duration = totalScrollWidth / scrollSpeed;
    gridWrapper.style.width = `${totalScrollWidth}px`;

    items.forEach(item => {
      const clone = item.cloneNode(true);
      gridWrapper.appendChild(clone);
    });

    gridWrapper.style.animationDuration = `${duration}s`;
  }

 
  function setupInfiniteScrollReverse() {
    const gridWrapper = document.querySelector('.grid-wrapper-reverse');
    if (!gridWrapper) return;

    const items = Array.from(gridWrapper.children);
    const itemWidth = items[0]?.offsetWidth + 10 || 260;
    const totalItems = items.length / 2;
    const totalScrollWidth = itemWidth * totalItems;
    const scrollSpeed = 100;
    const duration = totalScrollWidth / scrollSpeed;

    gridWrapper.style.width = `${totalScrollWidth}px`;

    items.forEach(item => {
      const clone = item.cloneNode(true);
      gridWrapper.appendChild(clone);
    });

    gridWrapper.style.animationDuration = `${duration}s`;
  }

  
  function setupInfiniteScroll1() {
    const marquee = document.querySelector('.marquee-track');
    if (!marquee) return;

    const items = Array.from(marquee.children);
    const itemWidth = items[0]?.offsetWidth + 10 || 260;
    const totalItems = items.length / 2;
    const totalScrollWidth = itemWidth * totalItems;
    const scrollSpeed = 100;
    const duration = totalScrollWidth / scrollSpeed;

    marquee.style.width = `${totalScrollWidth}px`;

    items.forEach(item => {
      const clone = item.cloneNode(true);
      marquee.appendChild(clone);
    });

    marquee.style.animationDuration = `${duration}s`;
  }


  setupInfiniteScroll();
  setupInfiniteScrollReverse();
  setupInfiniteScroll1();


  const slideElements = document.querySelectorAll('.slide-up');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  slideElements.forEach(el => observer.observe(el));


  const form = document.querySelector('.contact-form form');
  if (form) {
    const notification = document.createElement('div');
    notification.classList.add('notification');
    form.parentElement.appendChild(notification);

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      notification.textContent = 'Terimakasih atas Pesan Anda, Harap Sabar menunggu Balasan dari Kami.';
      notification.classList.add('show');

      form.reset();

      setTimeout(() => {
        notification.classList.remove('show');
      }, 4000);
    });
  }
});
