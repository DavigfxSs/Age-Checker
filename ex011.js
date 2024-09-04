function Check() {
var ageinput = document.getElementById('txt01').value
var currentYear = new Date().getFullYear()
var clientage = (currentYear - ageinput)
var birthYear = Number(ageinput)
var ageres = document.querySelector('div#ageres')




if (ageinput.length == 0 || birthYear > currentYear || birthYear <= 0) {
    window.alert ('[ERRO] data invalida')
} 
else {
    ageres.innerHTML = `<p>Olá, sua idade atual é aproximadamente ${clientage} anos.</p>`    
    var fsex = document.getElementsByName('radiogen')
    var genero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    if (fsex[0].checked) {
        genero = 'Homem'
        if (clientage < 11) {
            img.setAttribute('src', 'imgs/boy 10.webp')
        } else if (clientage < 20) {
            img.setAttribute('src', 'imgs/Boy 16.jpeg')
        } else if (clientage < 30) {
            img.setAttribute('src', 'imgs/Man25.avif')
        } else if (clientage < 51) {
            img.setAttribute('src', 'imgs/Man 40.png')
        } else { 
            img.setAttribute('src', 'imgs/Grandfather.jpg')
        }
    }
    else if (fsex[1].checked) {
        genero = 'Mulher'
        if (clientage < 11) {
            img.setAttribute('src', 'imgs/girl 10.jpg')
        }
        else if (clientage < 20) {
            img.setAttribute('src', 'imgs/girl 16.jpg')
        }
        else if (clientage < 30) {
            img.setAttribute('src', 'imgs/Woman 25.jpg')
        }
        else if (clientage < 51) {
            img.setAttribute('src', 'imgs/Woman 40.jpg')
        }
        else {
            img.setAttribute('src', 'imgs/Grandma.jpg') 
        }
        
    }

}
var imgContainer = document.createElement('div');
        imgContainer.setAttribute('id', 'imgContainer'); // Adiciona um ID para o contêiner de imagem
        imgContainer.appendChild(img); // Adiciona a imagem ao contêiner

        ageres.appendChild(imgContainer);
}