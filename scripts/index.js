// @todo: Темплейт карточки

const cardTemplate = document.querySelector('#card-template').content;

// @todo: DOM узлы

const container = document.querySelector('.content')
const cardContainer = container.querySelector('.places__list');

// @todo: Функция создания карточки

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

// @todo: Функция удаления карточки
const deleteCard = (cardItem) => {
  cardItem.remove();
};

// @todo: Вывести карточки на страницу

const renderCards = () => {
  initialCards.forEach((element) => {
    cardContainer.append(createCard(element.link, element.name, deleteCard));
  });
};

renderCards();