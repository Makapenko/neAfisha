# neAfisha
## Афиша локальных событий
Сайт предназначен для просмотра ближайших городских событий.
На сайте пользователи могут выбрать интересующие их категории событий и просматривать их списком или на Яндекс.Картах.

Места и события добавляются администратором через интерфейс после авторизации.
Вёркста оптимизирована для мобильных устройств, а так же используется технология PWA (Progressive Web Apps). 
Изображения хранятся в Яндекс.Облаке, информация о местах и событиях в базе данных под управлением PostgreSQL.

> Проект находится в стадии разработки, поэтому содержит ошибки и недоработки.
<div style="display: flex; justify-content: center;">
  <img src="https://github.com/Makapenko/neAfisha/blob/main/Frame%2022.png" alt="pic1" width="200">
  <img src="https://github.com/Makapenko/neAfisha/blob/main/Frame%2012.png" alt="pic1" width="200">
  <img src="https://github.com/Makapenko/neAfisha/blob/main/Frame%2023.png" alt="pic1" width="200">
  <img src="https://github.com/Makapenko/neAfisha/blob/main/Frame%2025.png" alt="pic1" width="200">
</div>

## Технологии
### Frontend
- React,
- Redux, Redux-thunk

### Backend
- Express,
- Pg, Sequelize,
- AWS SDK - SDK для работы с Amazon Web Services (AWS), используется для работы с Яндекс.Облаком,
- Bcrypt

## Дальнейшая работа
В данный момент не закончено:
- Улучшение интерфейса для добавления и изменения мест и событий 
- Отображение на карте событий разными видами иконок
- Карточка события поверх карты
