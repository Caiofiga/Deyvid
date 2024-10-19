// Captura o formulário pelo ID
const formulario = document.getElementById("formulariodebusca");

// Adiciona o evento de submit ao formulário
formulario.onsubmit = function(event) {
    event.preventDefault();  // Previne o envio padrão do formulário

    // Captura o valor da busca
    var nome = document.getElementById("Busca").value;

    // Verifica se o campo de busca não está vazio
    if (nome) {
        // Faz a requisição AJAX
        $.ajax({
            url: "http://127.0.0.1:5000/",  // Endereço da sua API
            type: "POST",
            data: { ab_name: nome },  // Envia o valor da busca como "ab_name"
            success: function(response) {
                // Change the current URL without adding to history
                history.replaceState(null, '', '/resposta');
                
                // Redirect to the new URL
                $(location).prop('href', '/resposta');
            },
            error: function(error) {
                // Trata erros na requisição
                console.error("Erro na busca:", error);
            }
        });
    } else {
        alert("Por favor, digite o nome de um antibiótico.");
    }
};
