function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
      var context = this, args = arguments;
      var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

const photos = document.querySelectorAll('.photo');


function checkSlide() {
    photos.forEach(photos => {
        const scrollInAt = (window.scrollY + window.innerHeight) - photos.height / 2;
        const photoBottom = photos.offsetTop + photos.height;
        const isHalfShown = scrollInAt > photos.offsetTop;
        const isNotScrolledPast = window.scrollY < photoBottom;
        
        if (isHalfShown && isNotScrolledPast) {
            photos.classList.add('active');
        } else {
            photos.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', debounce(checkSlide));