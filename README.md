# unloader
Unloader.js unload your HTML content

## Use [pt-br]
A classe Unloader evita que o conteúdo dos elementos seja baixado. Só será permitido o download do conteúdo quando o método 'load' da instancia ser chamado

´´´js
var content = document.querySelectorAll('img');
var contentLoad = new Unloader(content);
´´´
