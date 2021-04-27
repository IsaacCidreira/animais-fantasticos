// -------------------------------------------------------------------INICIO DOS ACCORDIONS LIST

export default function fecthBitcoin(url, target) {
  fetch(url)
    .then((response) => response.json())
    .then((json) => {
      const btcPreco = document.querySelector(target);

      btcPreco.innerText = (1000 / json.BRL.sell).toFixed(4);
    })
    .catch((erro) => {
      console.log(Error(erro));
    });
}
//-------------------------------------------------------------------FIM DOS TABS ACCORDIONS LIST

//https://blockchain.info/ticker
