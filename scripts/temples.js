let today = new Date();
document.getElementById("copy").innerHTML = today.getFullYear();
document.querySelector("#lastmod").innerHTML = document.lastModified;



const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
});