fetch('pagina1.html')
  .then(res => {
    if(res.status !== 200) throw new Error('Nosso ERRO 404');
    return res.text();
  })
  .then(newRes => {
    console.log(newRes)
  })
  .catch(e => {
    console.log(e)
  })