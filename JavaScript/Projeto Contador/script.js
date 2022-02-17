function contador() {
    let ini = document.getElementById('txti');
    let fim = document.getElementById('txtf');
    let pas = document.getElementById('txtp');
    let res = document.getElementById('res');

    if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
        alert ('[ERRO] Insira todos os dados!');
    } else {
        res.innerHTML = "Contando: ";
        let inicio = Number(ini.value);
        let final = Number(fim.value);
        let passo = Number(pas.value);
        if (passo <= 0) {
            alert('Passo inválido. Considerando passo = 1');
            passo = 1;
        }
        if (inicio < final) {
            for (let conte = inicio; conte <= final; conte += passo) {
                res.innerHTML += `${conte} \u{1F449}`;
            }
        } else {
            for (let conte = inicio; conte >= final; conte -=passo) {
                res.innerHTML += `${conte} \u{1F449}`;
            }
        }
        res.innerHTML += `\u{1F3C1}` ;
    }
}  