const pictures = document.querySelectorAll('.picture')

pictures.forEach(picture => {
   picture.addEventListener('click',()=>
   {
    removeactivepicture();
    picture.classList.add('active')
   })
});

function removeactivepicture(){
    pictures.forEach(picture => {
        picture.classList.remove('active')
    })
}