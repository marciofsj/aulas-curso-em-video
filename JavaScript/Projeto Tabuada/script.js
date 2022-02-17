function tabuar() {
    let numero = document.getElementById('ntxt');
    let tab = document.getElementById('seltab');
    if (numero.value.length == 0) {
        alert('Por favor, digite um número!') 
    } else {
        let num = parseInt(numero.value);
        let cont = 1;
        tab.innerHTML = '';
        while (cont <= 10) {
            let item = document.createElement('option');
            item.text = `${num} x ${cont} = ${num*cont}`;
            tab.appendChild(item);
            cont ++;
        }
    }
    
}