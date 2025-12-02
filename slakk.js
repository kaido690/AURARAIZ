document.addEventListener('DOMContentLoaded', () => {
    // 1. Lógica para os botões "Adicionar ao Carrinho" (🛒)
    const cartButtons = document.querySelectorAll('.js-add-to-cart');

    cartButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            // Pega o nome do produto do atributo data-product-name
            const productName = event.currentTarget.getAttribute('data-product-name');
            
            // Exibe um alerta simples (simulando a adição ao carrinho)
            alert(`✅ ${productName} adicionado ao carrinho!`);
            
            // Você poderia adicionar lógica mais complexa aqui (ex: somar no total do carrinho)
        });
    });
    
    // 2. Lógica para o ícone de Favorito (♡)
    const favoriteIcons = document.querySelectorAll('.js-favorite');
    
    favoriteIcons.forEach(icon => {
        icon.addEventListener('click', (event) => {
            const iconElement = event.currentTarget;
            const productName = iconElement.getAttribute('data-product');

            // Alterna a classe 'favorited' no elemento (CSS muda a cor)
            iconElement.classList.toggle('favorited');
            
            // Verifica o estado atual e exibe uma mensagem
            if (iconElement.classList.contains('favorited')) {
                console.log(`Produto ${productName} foi favoritado.`);
                // Poderia ser usada uma notificação Toast ou pop-up aqui
            } else {
                console.log(`Produto ${productName} removido dos favoritos.`);
            }
        });
    });
    
    // 3. Lógica para o botão principal "Confira"
    const mainConfirmButton = document.getElementById('main-confirm-button');

    if (mainConfirmButton) {
        mainConfirmButton.addEventListener('click', () => {
            console.log("Clicou em 'Confira >'. Redirecionando para a página de promoções.");
            // Exemplo de redirecionamento (descomente para usar)
            // window.location.href = "https://www.seusite.com/promocoes"; 
            alert("Redirecionando para a página da promoção 'Leve 2, Pague 1'.");
        });
    }
});
