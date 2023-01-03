function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')
    // Pegar Img
    const img = document.querySelector("#profile img")

    //substituir img
    if (html.classList.contains('light')) {
        //se tiver light mode, adicionar a imagem avatar2
        img.setAttribute('src', './assets/Avatar2.png')
    } else {
        //se tiver sem light mode, manter avatar1
        img.setAttribute('src', './assets/Avatar1.png')
    }
}