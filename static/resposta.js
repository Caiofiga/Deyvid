// Arquivo: /static/js/prediction.js

$(document).ready(function() {
    // Quando o formulário é enviado, envia os dados via AJAX
    $("#modelform").submit(function(event) {
        event.preventDefault();  // Impede o comportamento padrão de recarregar a página

        // Coleta os dados do formulário
        var formData = $(this).serializeArray();

        // Exibe um placeholder enquanto espera pela resposta
        $("#result-text").html(`
            <div class="placeholder-glow">
                <p class="placeholder col-6"></p>
                <p class="placeholder col-4"></p>
                <p class="placeholder col-8"></p>
            </div>
        `);

        // Envia os dados via AJAX
        $.ajax({
            type: 'POST',
            url: '/predict',  // Rota do Flask para predição
            dataType: 'json',
            contentType: 'application/json',
            data: JSON.stringify(formData),  // Converte os dados para JSON
            success: function(response) {
                setTimeout(function() {
                    // Exibe o resultado da predição na página
                    $("#result-text").html(`
                        <p>Probabilidade de resistência: ${response.score.toFixed(2)}%</p>
                    `);
                }, 1500);
            },
            error: function(xhr, status, error) {
                // Exibe mensagem de erro em caso de falha
                $("#result-text").html(`
                    <p style="color: red;">Erro ao calcular a predição: ${xhr.responseText}</p>
                `);
                console.log("Erro: " + error);
            }
        });
    });
});
