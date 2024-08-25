//function of card creation
import { initialCards } from '../cards.js';
const createCard = (link, name, handleDelete) => {
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  const deleteButton = cardElement.querySelector('.card__delete-button');
  const cardItem = deleteButton.closest('.card');
  deleteButton.addEventListener('click', () => handleDelete(cardItem))
  cardElement.querySelector('.card__image').src = link;
  cardElement.querySelector('.card__image').alt = name;
  cardElement.querySelector('.card__title').textContent = name;
  return cardElement;
};

const renderCards = () => {
  initialCards.forEach((element) => {
    cardContainer.append(createCard(element.link, element.name, deleteCard));
  });
};

//function of card delete
const deleteCard = (cardItem) => {
  cardItem.remove();
};

//function of card like

//export
export { createCard, renderCards, deleteCard};