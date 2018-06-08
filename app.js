//let texto;
let valor = 3;
let regresa='';
let texto=document.getElementById('mensajeInicial');
let texAqui = document.getElementById('mensajeAqui');
function Codificar() {
  const getTex=document.getElementById('texto').value;
    for (i = 0; i < getTex.length; i++) {
      let mnsj= getTex.charCodeAt(i);
      let formula = (mnsj - 65 + valor)%26+65;
      let x=string.fromCharCode(formula);
      regresa+=x;
      }
    return document.getElementById('texAqui').innerHTML=regresa;
//let mensajeInicial= texto;
/*console.log(document.getElementById('mensajeInicial').value);
  //console.log(mensajeInicial)
let encriptarMensaje=[];
  valorInicial=33;
  for (i = 0; i < texto.length; i++) {
    encriptarMensaje += string.fromCharCode((texto.charCodeAt(i)- 65 + valorInicial)%26 + 65);
  } return encriptarMensaje;
}
//document.getElementById('mensajeFinal'+ Codificar + 'mensajeInicial');
*/
