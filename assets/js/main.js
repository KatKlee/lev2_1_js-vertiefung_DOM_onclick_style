const home = document.getElementById('navHome')
const changebtn = document.getElementById('navChange')

changebtn.addEventListener('click', () => {
    home.style.backgroundColor = 'pink'
    home.style.color = '#333'
    home.style.fontFamily = 'sans-serif'
    home.style.transform = 'scale(-1,1)'
})