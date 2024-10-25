// Arquivo: /static/js/prediction.js

$(document).ready(function() {
    // Quando o formulário é enviado, envia os dados via AJAX
    $("#predictionForm").submit(function(event) {
        event.preventDefault();  // Impede o comportamento padrão de recarregar a página

        // Coleta os dados do formulário
        var formData = $(this).serializeArray();

        // Envia os dados via AJAX
        $.ajax({
            type: 'POST',
            url: '/predict',  // Rota do Flask para predição
            dataType: 'json',
            contentType: 'application/json',
            data: JSON.stringify(formData),  // Converte os dados para JSON
            success: function(response) {
                // Exibe o resultado da predição na página
                $("#result").html(`
                    <p>Probabilidade de resistência: ${response.score.toFixed(2)}%</p>
                    <p>Detalhes das predições:</p>
                    <ul id="predictions-list"></ul>
                `);

                // Preenche a lista de predições
                response.predictions.forEach(function(prediction, index) {
                    $("#predictions-list").append(`<li>Classificador ${index + 1}: ${prediction}</li>`);
                });
            },
            error: function(xhr, status, error) {
                // Exibe mensagem de erro em caso de falha
                $("#result").text("Erro ao calcular a predição.");
                console.log("Erro: " + error);
            }
        });
    });
});
