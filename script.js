const conteudo = {
    home: `<h2>Início</h2><p>Bem-vindo ao meu site!</p>`,
    sobre: `<h2>Sobre</h2><p>Esse site foi feito com HTML, CSS e JavaScript puro.</p>`,
    contato: `<h2>Contato</h2><p>Email: exemplo@email.com</p>`
  };
  
  function mostrar(pagina) {
    document.getElementById("conteudo").innerHTML = conteudo[pagina];
  }
  
  // Mostra a home ao carregar
  mostrar("home");
  