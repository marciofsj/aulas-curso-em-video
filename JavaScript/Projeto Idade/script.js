function verificar() {
    let data = new Date();
    let ano = data.getFullYear();
    let nasc = document.getElementById('txtano');
    //let res = document.querySelector('div#res');
    if (nasc.value.length == 0 || nasc.value > ano) {
        window.alert ('[Erro] Verifique os dados e tente novamente!');
    } else {
        let fsex = document.getElementsByName('radsex');
        let idade = ano - parseInt(nasc.value);
        let genero = '';
        let img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Masculino';
            if (idade < 12) {
                //criança
                img.setAttribute('src', 'assets/criancah.jpg');
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'assets/jovemh.jpg');
            } else if (idade < 60) {
                //adulto
                img.setAttribute('src', 'assets/adultoh.jpg');
            } else {
                //idoso
                img.setAttribute('src', 'assets/idoso.jpg');
            }
        } else if (fsex[1].checked) {
            genero = 'Feminino';
            if (idade < 12) {
                //criança
                img.setAttribute('src', 'assets/criancam.jpg');
            } else if (idade < 21) {
                //jovem
                img.setAttribute('src', 'assets/jovemm.jpg');
            } else if (idade < 60) {
                //adulto
                img.setAttribute('src', 'assets/adultom.jpg');
            } else {
                //idoso
                img.setAttribute('src', 'assets/idosa.jpg');
            }
        } 
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`;
        res.appendChild(img);
    }
}