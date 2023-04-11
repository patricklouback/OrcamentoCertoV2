<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Orçamento Certo V2</title>
  <style>
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      font-size: 16px;
      line-height: 1.6;
      color: #333;
      margin: 0;
      padding: 0;
    }
    h1 {
      font-size: 36px;
      margin-bottom: 1.2rem;
      color: #009688;
    }
    h2 {
      font-size: 24px;
      margin-bottom: 1rem;
      color: #009688;
    }
    ul {
      margin-left: 2rem;
      margin-bottom: 1.2rem;
    }
    li {
      margin-bottom: 0.4rem;
    }
    code {
      background-color: #f7f7f7;
      border-radius: 3px;
      font-size: 14px;
      padding: 0.2rem 0.4rem;
    }
    .emoji {
      display: inline-block;
      vertical-align: middle;
      margin-right: 0.2rem;
      font-size: 24px;
    }
    .emoji-sm {
      font-size: 16px;
    }
    .emoji-heart {
      color: #e91e63;
    }
    .emoji-rocket {
      color: #3f51b5;
    }
    .emoji-money {
      color: #4caf50;
    }
    .emoji-save {
      color: #ffc107;
    }
    .emoji-image {
      color: #009688;
    }
  </style>
</head>
<body>
  <h1><span class="emoji emoji-rocket"></span> Orçamento Certo V2</h1>
  <p>Este é um aplicativo Versão 2 feito em React Native. A Versão 1 foi feita em Kotlin, nativo para Android.</p>
  <p>Para esta versão, usei Expo, React Navigation, React Hook Form e integrei com o Firebase.</p>
  <h2><span class="emoji emoji-money"></span> Funcionalidades do APP:</h2>
  <ul>
    <li>Tela de login, cadastro e autenticação do usuário, usando o Firebase.</li>
    <li>Criação e precificação de produtos, com base nos custos de material e margem de lucro.</li>
    <li>Composição de um produto com vários itens internos, sabendo o preço de cada item, precifica o produto completo.</li>
    <li>Salvamento dos produtos criados no Firebase.</li>
    <li>Listagem dos produtos salvos em outra tela.</li>
    <li>Salvamento de foto do usuário no app, edição de nome, etc.</li>
  </ul>
  <h2><span class="emoji emoji-save"></span> Como rodar o código:</h2>
  <ol>
    <li>Instale o React Navigation: <a href="https://reactnavigation.org/" target="_blank">https://reactnavigation.org/</a></li>
    <li>Instale o React Hook Form: <a href="https://react-hook-form.com/get-started#Quickstart" target="_blank">https://react-hook-form.com/get-started#Quickstart</a> e <a
