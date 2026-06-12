let funcionarios = [];

function carregarFuncionarios() {
    const dados = localStorage.getItem('funcionarios');
    if (dados) {
        funcionarios = JSON.parse(dados);
    }
}

function salvarFuncionarios() {
    localStorage.setItem('funcionarios', JSON.stringify(funcionarios));
}

function cadastrarFuncionario() {
    const nome = document.getElementById('inputNome').value.trim();
    const email = document.getElementById('inputEmail').value.trim();
    const cargo = document.getElementById('inputCargo').value.trim();
    const departamento = document.getElementById('inputDepartamento').value.trim();
    const senha = document.getElementById('inputSenha').value.trim();

    if (!nome || !email || !cargo || !departamento || !senha) {
        alert('Preencha todos os campos.');
        return;
    }

    const novoFuncionario = {
        id: funcionarios.length + 1,
        nome,
        email,
        cargo,
        departamento,
        senha
    };

    funcionarios.push(novoFuncionario);
    salvarFuncionarios();
    renderizarFuncionarios();

    document.getElementById('inputNome').value = '';
    document.getElementById('inputEmail').value = '';
    document.getElementById('inputCargo').value = '';
    document.getElementById('inputDepartamento').value = '';
    document.getElementById('inputSenha').value = '';
}

function renderizarFuncionarios() {
    const lista = document.getElementById('listaFuncionarios');
    const total = document.getElementById('totalFuncionarios');
    lista.innerHTML = '';

    funcionarios.forEach(f => {
        const card = document.createElement('div');
        card.className = 'card p-3 shadow-sm';
        card.style.minWidth = '220px';
        card.innerHTML = `
            <h5>${f.nome}</h5>
            <p class="mb-1"><strong>Email:</strong> ${f.email}</p>
            <p class="mb-1"><strong>Cargo:</strong> ${f.cargo}</p>
            <p class="mb-0"><strong>Departamento:</strong> ${f.departamento}</p>
        `;
        lista.appendChild(card);
    });

    total.textContent = funcionarios.length;
}

carregarFuncionarios();
renderizarFuncionarios();