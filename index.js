document.addEventListener('DOMContentLoaded', function () {
    const pageContent = document.querySelector('.content');
  
    setTimeout(function () {
      pageContent.classList.add('show');
    }, 100);
  });