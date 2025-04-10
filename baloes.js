function criarBalao() {
    const balao = document.createElement('div');
    balao.classList.add('balao');
    balao.style.left = `${Math.random() * 100}%`;
    document.body.appendChild(balao);
  
    setTimeout(() => {
      balao.remove();
    }, 8000);
  }
  
  setInterval(criarBalao, 500);
  