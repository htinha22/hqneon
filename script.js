document.addEventListener('DOMContentLoaded', () => {
    // Seleciona todos os cards de HQ
    const hqCards = document.querySelectorAll('.hq-card');

    hqCards.forEach(card => {
        // Adiciona um evento para quando o mouse entra no card
        card.addEventListener('mouseenter', () => {
            // Adiciona uma classe para ativar os estilos de hover
            card.classList.add('is-hovered');
            // Você pode adicionar mais interatividade aqui, como reproduzir um som, etc.
            // console.log('Mouse entrou no card:', card.querySelector('h3').textContent);
        });

        // Adiciona um evento para quando o mouse sai do card
        card.addEventListener('mouseleave', () => {
            // Remove a classe para desativar os estilos de hover
            card.classList.remove('is-hovered');
            // console.log('Mouse saiu do card:', card.querySelector('h3').textContent);
        });

        // Opcional: Adicionar um evento de clique para uma futura página de detalhes da HQ
        card.addEventListener('click', () => {
            const hqTitle = card.querySelector('h3').textContent;
            alert(`Você clicou na HQ: "${hqTitle}"! Em breve, uma página com mais detalhes!`);
            // Em uma aplicação real, você redirecionaria para uma página de detalhes, por exemplo:
            // window.location.href = `detalhes-hq.html?title=${encodeURIComponent(hqTitle)}`;
        });
    });

    // Animação suave para links de navegação
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId.startsWith('#')) { // Garante que é um link interno
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - document.querySelector('.site-header').offsetHeight, // Ajusta para o header fixo
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});
