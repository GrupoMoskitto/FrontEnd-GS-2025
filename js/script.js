const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('apareceu');
    } else {
      entry.target.classList.remove('apareceu');
    }
  });
}, {
  threshold: 0.1
});

document.querySelectorAll('.card-animado').forEach(card => {
  observer.observe(card);
});
