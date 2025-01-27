export async function GET() {
    // Inicia uma requisição para o endpoint 'https://deisishop.pythonanywhere.com/products'
    return fetch('https://deisishop.pythonanywhere.com/products')
        // Quando a resposta da requisição for recebida, converte a resposta para JSON
        .then((res) => res.json())
        // Quando a conversão para JSON for concluída, retorna a resposta JSON utilizando o método Response.json()
        .then((data) => Response.json(data));
}