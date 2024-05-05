Para rodar o projeto clone o repositorio, após o clonar use o comando "npm install", após a instalação rode o comando "json-server --watch db.json", (caso não tenha baixado na máquina o json-serve, siga esse tutorial https://www.fabricadecodigo.com/json-server/), o json-server tem que ser iniciado primeiro, pois ele utiliza a porta localhost:3000, e o projeto tambem utiliza essa porta, portanto caso você inicializar o projeto primeiro, dará erro nas requisições da API.

após iniciar com o json-serve, utilize o comando "npm run dev", e pronto, o projeto estará funcionando.


O projeto foi pensado para oferecer uma boa experiência para o usuário, com fácil nevegação, tema e cores de fácil visão e compreensão. O projeto tem 4 páginas, na qual é possivel verificar todos os profissinais cadastrados, cadastrar um, vê os detalhes desse profissional, e vê quais os profissionais estão bloqueados. Tudo feito de acordo os as regras de negócio.

serviços: O projeto tem 6 requisições de API.

1.get-all-professional: essa api busca todos os profissionais cadastrados.
2.get-details-professional: essa api busca todas as informações do profissional cadastrado.
3.patch-block-professional: essa api bloqueia e desbloqueia o profissional.
4.patch-professional-details: essa api edita as informações do profissional.
5.post-create-new-professional: essa api cria um novo profissional.
6.delete-professional: essa api excluir permanentemente o profissional.