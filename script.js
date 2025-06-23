document.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visivel');
      }
    });
  }, {
    threshold: 0.1 // ativa quando 10% do elemento está visível
  });

  const elementos = document.querySelectorAll('.beneficios, .depoimentos, .rodape, .contato');
  elementos.forEach(el => observer.observe(el));
});
