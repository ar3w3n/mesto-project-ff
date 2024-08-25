function closePopup() {
  const elementToDelete = document.querySelector('.popup_is-opened');
  if (elementToDelete) {
    elementToDelete.classList.remove('popup_is-opened');
  }
};


export { closePopup };