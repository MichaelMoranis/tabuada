function tabuada() {
   let num = document.getElementById("txtn");
   let tabuada = document.getElementById("seltab");
   if (num.value.length === 0) {
      alert("Por favor, digite um número!");
   }
   else {
      let nu = Number(num.value);
      let cont = 1;
      tabuada.innerHTML = "";
      while (cont <= 10) {
         let item = document.createElement("option");
         item.text = `${nu} x ${cont} = ${nu * cont}`;
         item.value = `tabuada${cont}`
         tabuada.appendChild(item);
         cont++
      }
   }
}
