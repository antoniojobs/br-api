const http = require('http');

const server = http.createServer((req, res) => {
  // Define o cabeçalho Content-Type como texto plano UTF-8
  res.setHeader('Content-Type', 'text/plain; charset=utf-8');

  // Envia o texto em UTF-8 como resposta
  res.end(`
  
Felicidade foi-se embora
E a saudade no meu peito ainda mora
E é por isso que eu gosto lá de fora
Porque eu sei que a falsidade não vigora

A minha casa fica lá detrás do mundo
Onde eu vou num segundo quando começo a cantar
O pensamento parece uma coisa à toa
mas como é que a gente voa quando começa a pensar

Felicidade foi-se embora
E a saudade no meu peito ainda mora
E é por isso que eu gosto lá de fora
Porque eu sei que a falsidade não vigora

Na minha casa tem um cavalo tordilho
que é irmão do que é filho daquele que o Juca tem
E quando pego o meu cavalo e o encilho
Sou pior que limpa trilho e corro na frente do trem.

  `);
});

server.listen(3000, () => {
  console.log('Servidor ouvindo na porta 3000');
});
