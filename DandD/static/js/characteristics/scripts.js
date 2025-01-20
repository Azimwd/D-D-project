// Получаем элементы текстовых полей (<textarea>) и необходимые элементы управления
const textareas = document.querySelectorAll('textarea'); // Все текстовые области на странице
const popup = document.getElementById('information-block'); // Всплывающий блок информации
const iframe = document.getElementById('iframe'); // Фрейм, возможно, для отображения контента
const information_block = document.getElementById('information-block'); // Дублирующая переменная блока информации
const vitality_block__hp = document.getElementById('vitality-current'); // Поле текущего здоровья персонажа

// Переменные для отображения характеристик
const Strength__p = document.getElementById('Strength__p'); // Элемент отображения силы
const Dexterity__p = document.getElementById('Dexterity__p'); // Ловкость
const Physique__p = document.getElementById('Physique__p'); // Телосложение
const Intelligence__p = document.getElementById('Intelligence__p'); // Интеллект
const Wisdom__p = document.getElementById('Wisdom__p'); // Мудрость
const Charisma__p = document.getElementById('Charisma__p'); // Харизма

// Поля для ввода характеристик
const Strength__input = document.getElementById('Strength__input'); // Поле ввода силы
const Dexterity__input = document.getElementById('Dexterity__input'); // Ловкость
const Physique__input = document.getElementById('Physique__input'); // Телосложение
const Intelligence__input = document.getElementById('Intelligence__input'); // Интеллект
const Wisdom__input = document.getElementById('Wisdom__input'); // Мудрость
const Charisma__input = document.getElementById('Charisma__input'); // Харизма

// Навыки и бонусы
const skills = document.querySelectorAll('.checkdot__input'); // Все переключатели (чекбоксы) навыков
const skillbonus = document.querySelectorAll('.char-skill__modifier'); // Бонусы к навыкам
const initiative = document.querySelector('.roller .vitality-block__box-value.char-sheet__input');
const passive_wisdom = document.querySelector('.modifier-block__modifier.ellipsis');
const elem_char_skill__modifier = document.querySelectorAll('.char-skill__modifier');

// Поле уровня персонажа и отображение бонуса владения
const lvl = document.querySelector('.char-sheet__info-input_small.small.char-sheet__input'); // Поле ввода уровня персонажа
const Ownership_Bonus = document.querySelector('.modifier-block__modifier.round'); // Элемент для отображения бонуса владения



// Обработчик нажатия на <textarea> для поиска ссылок в тексте и отображения всплывающего окна
textareas.forEach(textarea => {
  textarea.addEventListener('click', (event) => {
    event.preventDefault(); // Отменяем стандартное поведение
    const text = textarea.value; // Получаем текст внутри текстового поля
    const urls = text.match(/https?:\/\/[^\s]+/g); // Поиск ссылок в тексте через регулярное выражение
    if (urls) {
      urls.forEach(url => {
        const startIndex = text.indexOf(url); // Начало ссылки в тексте
        const endIndex = startIndex + url.length; // Конец ссылки
        const caretPosition = textarea.selectionStart; // Позиция курсора
        if (caretPosition >= startIndex && caretPosition <= endIndex) {
          popup.classList.remove('hidden'); // Показываем popup
          scrapeWebsite(url); // Отправляем ссылку на сервер для анализа
        }
      });
    }
  });
});

// Закрытие всплывающего окна при нажатии на любое место вне его
window.addEventListener('click', (event) => {
  if (!popup.contains(event.target) && !Array.from(textareas).some(textarea => textarea.contains(event.target))) {
    popup.classList.add('hidden'); // Скрываем popup
  }
});

// Функция отправки ссылки на сервер через AJAX
function scrapeWebsite(url) {
  $.ajax({
    url: '/characteristics/',  // URL для обработки
    method: 'POST',
    data: {
      text: url, // Текст ссылки
      csrfmiddlewaretoken: $('input[name="csrfmiddlewaretoken"]').val() // CSRF токен
    },
    success: function(response) {
      // Обновление содержимого информации и комментариев
      $('#information').html(response.information_ul);
      $('#comments').html(response.comments_str);

      // Очистка аватаров пользователей
      document.querySelectorAll('.profile__avatar-img').forEach(profile__avatar => {
        profile__avatar.src = ''; // Устанавливаем пустой src
      });
    },
    error: function() {
      console.log('Ошибка при отправке данных'); // Логирование ошибки в случае сбоя
    }
  });
}



//__________________________________________________________________________ CHAR BLOCK __________________________________________________________________________

// Добавление обработчика для поля здоровья: вычисление значения при нажатии Enter
vitality_block__hp.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    vitality_block__hp.value = eval(event.target.value); // Преобразуем введенное значение в результат
  } 
});

// Инициализация бонуса владения
let Ownership_Bonus_value = 0;
const stats_names = [Strength__p,Dexterity__p,Physique__p,Intelligence__p,Wisdom__p,Charisma__p];
Characteristic_input_list = [Strength__input, Dexterity__input, Physique__input, Intelligence__input, Wisdom__input, Charisma__input];

// Инициализируем функции для расчётов
skills_bonus();
characteristics();


function characteristics(){

  // Получаем элементы для инициативы и пассивной мудрости
  stats_names.forEach((e,i)=>{
    e.innerText = eval(Math.floor((Characteristic_input_list[i].value - 10)/2));

    if(Characteristic_input_list[i] == Dexterity__input){
      initiative.value = eval(Math.floor((Characteristic_input_list[i].value - 10)/2));
    }
    if(Characteristic_input_list[i] == Wisdom__input){
      passive_wisdom.innerText = eval(10 + (Math.floor((Characteristic_input_list[i].value - 10)/2)));
    }
  })
  // Обновляем модификаторы навыков
  char_skill__modifier();

  // Добавляем обработчики событий для ввода значений характеристик
  Characteristic_input_list.forEach((e,i)=>{
    e.addEventListener('input',(e2)=>{
      stats_names[i].innerText = eval(Math.floor((e2.target.value - 10)/2));

      

      if(e == Dexterity__input){
        initiative.value = eval(Math.floor((e.value - 10)/2));
      }
      if(e == Wisdom__input){
        passive_wisdom.innerText = eval(10 + (Math.floor((e.value - 10)/2)));
      }
      char_skill__modifier();
    });
  })

}


function char_skill__modifier(){
  // Обновляем модификаторы навыков на основе значений характеристик
  
  
  stats_names.forEach((s)=>{
    elem_char_skill__modifier.forEach((i)=>{
      if(i.id.includes(s.id)){
        skills.forEach((j)=>{
          if(i.id.includes(j.id)){
            if(j.dataset.id == 1){ 
              j.checked = false;
              i.value = Number(s.textContent) >= 0 ? `+${Number(s.textContent)}` : `${Number(s.textContent)}`;
            }
            if(j.dataset.id == 2){
              j.checked = true;
              i.value = Number(s.textContent) + Ownership_Bonus_value >= 0 ? `+${Number(s.textContent) + Ownership_Bonus_value}` : `${Number(s.textContent) + Ownership_Bonus_value}`;
            }
            if(j.dataset.id == 3){
              j.checked = true;
              i.value = Number(s.textContent) + (Ownership_Bonus_value * 2) >= 0 ? `+${Number(s.textContent) + (Ownership_Bonus_value * 2)}` : `${Number(s.textContent) + (Ownership_Bonus_value * 2)}`;
            }

          }
        });
      }
    });
  });
}

function skills_bonus(){
  // Устанавливаем бонусы владения на основе уровня персонажа
  if(Number(lvl.value) >= 0 && Number(lvl.value) <= 4){
    Ownership_Bonus_value = 2;
    Ownership_Bonus.innerText = `+${Ownership_Bonus_value}`;
    char_skill__modifier();
  } else if(Number(lvl.value) >= 5 && Number(lvl.value) <= 8){
    Ownership_Bonus_value = 3;
    Ownership_Bonus.innerText = `+${Ownership_Bonus_value}`;
    char_skill__modifier();
  } else if(Number(lvl.value) >= 9 && Number(lvl.value) <= 12){
    Ownership_Bonus_value = 4;
    Ownership_Bonus.innerText = `+${Ownership_Bonus_value}`;
    char_skill__modifier();
  } else if(Number(lvl.value) >= 13 && Number(lvl.value) <= 16){
    Ownership_Bonus_value = 5;
    Ownership_Bonus.innerText = `+${Ownership_Bonus_value}`;
    char_skill__modifier();
  } else if(Number(lvl.value) >= 17 && Number(lvl.value) <= 20){
    Ownership_Bonus_value = 6;
    Ownership_Bonus.innerText = `+${Ownership_Bonus_value}`;
    char_skill__modifier();
  }

  // Добавляем обработчик событий для изменения уровня персонажа
  lvl.addEventListener('input',(e)=>{
    if(Number(lvl.value) >= 0 && Number(lvl.value) <= 4){
      Ownership_Bonus_value = 2;
      Ownership_Bonus.innerText = `+${Ownership_Bonus_value}`;
      char_skill__modifier();
    } else if(Number(lvl.value) >= 5 && Number(lvl.value) <= 8){
      Ownership_Bonus_value = 3;
      Ownership_Bonus.innerText = `+${Ownership_Bonus_value}`;
      char_skill__modifier();
    } else if(Number(lvl.value) >= 9 && Number(lvl.value) <= 12){
      Ownership_Bonus_value = 4;
      Ownership_Bonus.innerText = `+${Ownership_Bonus_value}`;
      char_skill__modifier();
    } else if(Number(lvl.value) >= 13 && Number(lvl.value) <= 16){
      Ownership_Bonus_value = 5;
      Ownership_Bonus.innerText = `+${Ownership_Bonus_value}`;
      char_skill__modifier();
    } else if(Number(lvl.value) >= 17 && Number(lvl.value) <= 20){
      Ownership_Bonus_value = 6;
      Ownership_Bonus.innerText = `+${Ownership_Bonus_value}`;
      char_skill__modifier();
    } else {
      Ownership_Bonus_value = 0;
      Ownership_Bonus.innerText = `+${Ownership_Bonus_value}`;
      char_skill__modifier();
    }
  });

  // Добавляем обработчики событий для переключения навыков
  skills.forEach(i => {
    i.addEventListener('click',(e)=>{
      if(e.target.id == i.id){
        skillbonus.forEach((j)=>{
          if(j.id.includes(i.id)){
            if(i.dataset.id == 1){  
              i.checked = true;
              i.dataset.id = 2;
              char_skill__modifier();
            } else if(i.dataset.id == 2){
              i.checked = true;
              i.dataset.id = 3;
              char_skill__modifier();
            } else if(i.dataset.id == 3){
              i.checked = false;
              i.dataset.id = 1;
              char_skill__modifier();
            }
          }
        });
      }
    });
  });
}
