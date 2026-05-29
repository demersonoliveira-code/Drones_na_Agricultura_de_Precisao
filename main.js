// Aguarda o carregamento do DOM
document.addEventListener('DOMContentLoaded', () => {
    
    const hamburgerBtn = document.getElementById('hamburgerBtn');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-menu ul li a');

    // Função para abrir e fechar o menu hambúrguer
    hamburgerBtn.addEventListener('click', () => {
        hamburgerBtn.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Fecha o menu automaticamente quando o usuário clicar em qualquer link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburgerBtn.classList.remove('active');
            navMenu.classList.remove('remove');
            
            // Remove a classe 'active' visual de todos e adiciona no clicado
            navLinks.forEach(item => item.classList.remove('active'));
            link.classList.add('active');
        });
    });
});