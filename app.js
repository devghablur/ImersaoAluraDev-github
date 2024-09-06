function pesquisar() {
  // Obtém a seção onde os resultados da pesquisa serão exibidos pelo ID.
  let section = document.getElementById("resultados-pesquisa");

  // Inicializa uma string vazia para armazenar os resultados da pesquisa.
  let resultados = "";

  // Itera sobre cada dado na lista de dados (a lista 'dados' não está mostrada aqui).
  // Para cada dado, cria um elemento HTML com as informações do dado.
  for (let dado of dados) {
    // Concatena a string 'resultados' com o HTML para um novo item de resultado.
    // Utiliza template literals (``) para facilitar a interpolação de variáveis.
    resultados += `
      <div class="item-resultado">
        <h2>
          <a href="#" target="_blank">${dado.titulo}</a>
        </h2>
        <p class="descricao-meta">${dado.descricao}</p>
        <a href=${dado.link} target="_blank">Mais informações</a>
      </div>
    `;
  }

  // Atribui o conteúdo da string 'resultados' ao HTML interno da seção.
  // Isso substitui o conteúdo anterior da seção pelos novos resultados.
  section.innerHTML = resultados;
}
