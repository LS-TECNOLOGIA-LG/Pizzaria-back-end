# Backend Pizzaria

Backend para pizzaria

## Descrição

Este projeto é responsável por cuidar dos serviços de backend para uma pizzaria. Ele foi desenvolvido em Node.js e utiliza o banco de dados PostgreSQL.

## Instalação

Antes de iniciar, certifique-se de que possui o Node.js e o PostgreSQL instalados em sua máquina. Em seguida, siga os passos abaixo:

1. Clone este repositório em sua máquina:

```
git clone https://github.com/seu-usuario/nome-do-repositorio.git
```
2. Instale as dependências do projeto:

3. Configure o banco de dados PostgreSQL, seguindo as instruções do arquivo `database.sql`.

4. Renomeie o arquivo `.env.example` para `.env` e preencha as informações de acesso ao banco de dados.

5. Inicie o servidor:

```
npm start or yarn dev
```
## Rotas disponíveis

A seguir, estão listadas as rotas disponíveis neste projeto:

Rotas disponíveis
A seguir, estão listadas as rotas disponíveis neste projeto:

## Login

## Usuários
### GET /usuarios
Retorna uma lista com todos os usuários cadastrados.

### GET /users/:id
Retorna as informações do usuário correspondente ao ID informado.

### GET /me
Retorna as informações do usuário correspondente ao logado.

### POST /users
Cadastra um novo usuário.

### PUT /users/:id
Atualiza as informações do usuário correspondente ao ID informado.

### DELETE /users/:id
Exclui o usuário correspondente ao ID informado.

## Categorias
### GET /category
Retorna uma lista com todas as categorias cadastradas.

### GET /category/:id
Retorna as informações da categoria correspondente ao ID informado.

###POST /category
Cadastra uma nova categoria.

### PUT /category/:id
Atualiza as informações da categoria correspondente ao ID informado.

### DELETE /category/:id
Exclui a categoria correspondente ao ID informado.

## Produtos
### GET /product
Retorna uma lista com todos os produtos cadastrados.

### GET /product/:id
Retorna as informações do produto correspondente ao ID informado.

### POST /product
Cadastra um novo produto.

### PUT /product/:id
Atualiza as informações do produto correspondente ao ID informado.

### DELETE /product/:id
Exclui o produto correspondente ao ID informado.

### GET /category/product
Lista todos os produtos por categoria.

Ordens de Serviço
### GET /order
Retorna uma lista com todas as ordens de serviço cadastradas.

### GET /order/detail
Retorna as informações da ordem de serviço correspondente ao ID informado.

### POST /order
Cadastra uma nova ordem de serviço.

PUT /ordens/:id
Atualiza as informações da ordem de serviço correspondente ao ID informado.

### PUT /order/send
Atualiza a order para que seja enviada para cozinha

### PUT /order/finish
Finaliza a order

### DELETE /order
Exclui a ordem de serviço correspondente ao ID informado.

## Itens de Ordem de Serviço
### POST /order/add
Adiciona um novo item à ordem de serviço correspondente ao ID informado.

PUT /ordens/:id/item/:item_id
Atualiza as informações do item correspondente ao ID informado, que pertence à ordem de serviço correspondente ao ID informado.

### DELETE /order/remove
Exclui o item correspondente ao ID informado, que pertence à ordem de serviço correspondente ao ID informado.

#Contribuindo
Se você deseja contribuir com este projeto, siga os passos abaixo:

1. Faça um fork deste repositório.

2. Crie uma branch para sua feature:

```
git checkout -b minha-feature
```
3. Implemente as mudanças necessárias.
4. Faça commit das suas alterações:
```
Faça commit das suas alterações:
```
5. Faça push para a sua branch:
```
git push origin minha-feature
```
6. Crie um Pull Request para a branch main deste repositório.

#Licença
Este projeto utiliza a licença MIT. Para mais informações, consulte o arquivo LICENSE.md.
