function carregar (){
    let msg = document.getElementById('msg');
    let img = document.getElementById('imagem');
    let data = new Date();
    let hora = data.getHours();
    msg.innerHTML = `<strong>Agora são ${hora} horas.</strong>`;
    if (hora >= 0 && hora < 12) {
        img.src = 'assets/manha.jpg'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'assets/tarde.jpg'
        document.body.style.background = '#b9846f'
    } else {
        img.src = 'assets/noite.jpg'
        document.body.style.background = '#515154'
    }
}
