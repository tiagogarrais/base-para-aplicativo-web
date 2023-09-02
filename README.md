# Base para aplicativo web

Um aplicativo web é basicamente um programa de computador que usa o navegador e a internet como meio de comunicação. Usar o navegador é estratégico porque todos os notebooks, celulares, tablets, TVbox e hoje em dia até carros e geladeiras possuem um navegador. 

Um aplicativo web é um programa de computador que pode ser acessado de praticamente qualquer lugar do mundo! A desvantagem é que, na maioria dos casos, o aplicativo depende da internet para funcionar bem porque uma parte do programa fica no dispositivo de quem usa e a outra parte fica em um computador na internet.

Para esta instalação quero criar um ambiente onde as pessoas possam navegar em uma página inicial pública e à partir dela terão acesso a áreas onde o acesso seja garantido por meio de autenticação. O método de autenticação será o e-mail: após digitar seu e-mail, o sistema envia uma mensagem com um link de acesso.

Existem inúmeras formas de se montar e iniciar um aplicativo web. Para quem programa na linguagem Javascript, esta é a fórmula que eu uso e os aplicativos necessários (dependências) estão listados logo abaixo:

- [x] Node.js
- [x] Next.js
- [x] React
- [x] React-dom
- [x] NextAuth.js
  - [x] Nodemailer
  - [x] Credenciais para envio de e-mails no arquivo .env
  - [x] Banco de dados para NextAuth.js - Mongodb
