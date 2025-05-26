  document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visivel');
        } else {
          entry.target.classList.remove('visivel');
        }
      });
    }, {
      threshold: 0.1 // ativa quando 10% do elemento está visível
    });

    const elementos = document.querySelectorAll('.beneficios, .depoimentos');
    elementos.forEach(el => observer.observe(el));
  });
