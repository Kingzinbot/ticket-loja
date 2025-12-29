document.getElementById('ticketForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const assunto = document.getElementById('assunto').value;
    const descricao = document.getElementById('descricao').value;

    const ticket = {
        nome: nome,
        email: email,
        assunto: assunto,
        descricao: descricao
    };

    // Aqui você pode enviar os dados para uma API ou serviço de gerenciamento de tickets
    // Exemplo usando EmailJS, Formspree, ou Zapier para integrar com um sistema de e-mail
    fetch('https://formspree.io/f/mwkwqvjq', {
        method: 'POST',
        headers: {
            'Accept': 'application/json'
        },
        body: JSON.stringify(ticket)
    }).then(response => {
        if (response.ok) {
            alert('Ticket enviado com sucesso!');
        } else {
            alert('Ocorreu um erro ao enviar o ticket.');
        }
    });
});
