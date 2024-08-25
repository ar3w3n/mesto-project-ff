import '../pages/index.css';
import { initialCards } from './cards.js';
import avatar from '../images/avatar.jpg';
import logo from '../images/logo.svg';
import { deleteCard } from '../src/components/card.js';
import { closePopup, closePopupWithEsc } from './components/modal.js';

const images = [
  {name: 'avatar', link: avatar},
  {name: 'logo', link: logo}
];


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

const renderCards = () => {
  initialCards.forEach((element) => {
    cardContainer.append(createCard(element.link, element.name, deleteCard));
  });
};


// @todo: Вывести карточки на страницу

renderCards();

//@todo Open modal win .popup_is-opened
const popupEdit = document.querySelector('.popup_type_edit');
const popupNewCard = document.querySelector('.popup_type_new-card');
const popupClose = document.querySelector('.popup__close');
const profileEditBtn = container.querySelector('.profile__edit-button');
const profileAddBtn = container.querySelector('.profile__add-button');
const profileTitle = container.querySelector('.profile__title').textContent;
const popupInputName = document.querySelector('.popup__input_type_name');

profileAddBtn.addEventListener('click', function() {
  popupNewCard.classList.add('popup_is-opened');
});

profileEditBtn.addEventListener('click', function() {
  popupEdit.classList.add('popup_is-opened');
});

popupClose.addEventListener('click', function(evt) {
  if (evt.target.classList.contains('popup__close')) {
    closePopup();
  }
});

//like

cardContainer.addEventListener('click', function(evt) {
  if (evt.target.classList.contains('card__like-button')) {
    evt.target.classList.toggle('card__like-button_is-active');
  }
});