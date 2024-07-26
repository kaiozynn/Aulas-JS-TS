const resultado = document.querySelector('.resultado');

axios('pessoas.json')
  .then(res => pegarEmail(res.data))

function pegarEmail(data) {
  const table = document.createElement('table');
  
  for (const pessoa of data) {
    const tr = document.createElement('tr');
    const th = document.createElement('th');
    let td = document.createElement('td');

    th.textContent = pessoa.nome;
    th.setAttribute('scope', 'row');
    tr.appendChild(th);
    td.textContent = pessoa.email;
    tr.appendChild(td);
    td = document.createElement('td');
    td.textContent = pessoa.salario
    tr.appendChild(td)
    
    table.appendChild(tr);
  }

  resultado.appendChild(table)
}