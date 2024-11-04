const barraBtn = document.querySelector('.barra_btn')
const barraBtnIcon = document.querySelector('.barra_btn i')
const dropDownMenu = document.querySelector('.dropdown_menu')

barraBtn.onclick = function () {
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')

    barraBtnIcon.classList = isOpen
        ? 'fa-solid fa-xmark'
        : 'fa-solid fa-bars'
}