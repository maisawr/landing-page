const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let nome = document.getElementById('nome').value;
    let sobrenome = document.getElementById('sobrenome').value;
    let email = document.getElementById('email').value;
    let data = {
        nome,
        sobrenome,
        email
    }
    let convertData = JSON.stringify(data);

    localStorage.setItem('lead', convertData);

    let content = document.getElementById('content');

    let carregando = `<p>Carregando...</p>`;

    content.innerHTML = carregando;

    let pronto = `<p>Estamos felizes com sua inscrição, ${nome}. Em breve, você receberá um e-mail com todas as instruções entrar nessa jornada conosco.</p>`;

    setTimeout(() => {
        content.innerHTML = pronto
    }, 1000);

})