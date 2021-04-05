/* MODULES ES6
Basta adicionar type="module" na tag script do HTML. Utilize a palavra chave export na frente do valor que deseja exportar (use default se for único). E import nome from arquivo.js para importar. */

import initScrollSuave from "./modules/scroll-suave.js";
import initScrollAnimation from "./modules/scroll-animacao.js";
import initAccordion from "./modules/accordion.js";
import initTab from "./modules/tab-menu.js";
import initModal from "./modules/modal.js";
import initTooltip from "./modules/tooltip.js";
import initDropDownMenu from "./modules/dropdown.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initFuncionamento from "./modules/funcionamento.js";
import initFecthAnimais from "./modules/fetch-animais.js";
import initFecthBitcoin from "./modules/fetch-bitcoin.js";

initScrollAnimation();
initScrollSuave();
initTab();
initAccordion();
initModal();
initTooltip();
initDropDownMenu();
initMenuMobile();
initFuncionamento();
initFecthAnimais();
initFecthBitcoin();

/* NAMED EXPORTS
Você pode exportar mais de um valor. Quando for importar utilize as chaves para especificar cada valor. O nome importado deve ser igual ao exportado. */
//para exposrtar vários eu boto import { valor, valor1} from ".modules/aaaa.js" tem que ter o nome igual
// Exportar tudo // Importe todos os valores em um objeto com o * se eu não sei posso botar import * as teste '.modules/teste.js' tem que botar o as

/* VALORES DO EXPORT
Podemos exportar objetos, funções, classes, números, strings e mais. */
/* export function scrollSuave() {};
export const ano = 2000;
export const obj = {nome: 'Ford'};
export const str = 'Frase';
export class Carro {}; */

/* export function scrollSuave() {};
export const ano = 2000;
export const obj = {nome: 'Ford'};
export const str = 'Frase';
export class Carro {}; */

/* Strict mode

'use strict' por padrão em todos os arquivos.

Variáveis ficam no module apenas

Não vazam para o escopo globo.

This fora de um objeto faz referência a undefined

Ao invés de fazer referência ao window.

Assíncrono */

/* USE STRICT
O modo estrito previne que algumas ações consideradas erros. Basta adicionarmos 'use strict' no topo de um arquivo, que ele entrará neste modo. */
