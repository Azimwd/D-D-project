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

const character_id = document.querySelector('#character_id');


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
    url: '/characteristics/information-block/',  // URL для обработки
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

const char_name = document.querySelector('.big.char-sheet__input');
const hider_info_bar = document.querySelectorAll('.small.char-sheet__input');
const max_hp_and_maxdice = document.querySelectorAll('.vitality-block__input.vitality-block__hp-max.char-sheet__input');
const curent_and_temp_hp = document.querySelectorAll('.vitality-block__hp-input.char-sheet__input');
const hp_dice = document.querySelector('.vitality-block__hp-input.small.char-sheet__input');
const success1 = document.querySelector('#checkdot-deathSuccess_0');
const success2 = document.querySelector('#checkdot-deathSuccess_1');
const success3 = document.querySelector('#checkdot-deathSuccess_2');
const failure1 = document.querySelector('#checkdot-deathFail_0');
const failure2 = document.querySelector('#checkdot-deathFail_1');
const failure3 = document.querySelector('#checkdot-deathFail_2');
const text__textarea = document.querySelectorAll('.text__textarea');
const inspiration_check = document.querySelector('#inspiration-check');
const speed = document.querySelector('#speed');
const KD = document.querySelector('.vitality-block__box-value.vitality-block__shield-input.char-sheet__input');

KD.addEventListener('input', function(event) {
  save_character();
});

speed.addEventListener('input', function(event) {
  save_character();
});

char_name.addEventListener('input', function(event) {
  save_character();
});

hider_info_bar.forEach((i)=>{
  i.addEventListener('input', function(event) {
      save_character();
  });
})

max_hp_and_maxdice.forEach((i)=>{
  i.addEventListener('input', function(event) {
      save_character();
  });
})

curent_and_temp_hp.forEach((i)=>{
  i.addEventListener('input', function(event) {
      save_character();
  });
})

hp_dice.addEventListener('input', function(event) {
  save_character();
});

text__textarea.forEach((i)=>{
  i.addEventListener('input', function(event) {
    console.log(i.value)
    save_character();
  });
})

const success_failure = [success1,success2,success3,failure1,failure2,failure3]

success_failure.forEach((i)=>{
  i.addEventListener('click', function(event) {
      save_character();
  });
})

inspiration_check.addEventListener('click', function(event) {
  save_character();
});

// Добавление обработчика для поля здоровья: вычисление значения при нажатии Enter
vitality_block__hp.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    vitality_block__hp.value = eval(event.target.value); // Преобразуем введенное значение в результат
    save_character();
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
  save_character();
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

async function save_character() {
  

  const data = {
    strength: document.querySelector('#Strength__input').value,
    dexterity:document.querySelector('#Dexterity__input').value,
    constitution:document.querySelector('#Physique__input').value,
    intelligence:document.querySelector('#Intelligence__input').value,
    wisdom:document.querySelector('#Wisdom__input').value,
    charisma:document.querySelector('#Charisma__input').value,

    st_strength:document.querySelector('#checkdot-str').dataset.id,
    st_dexterity:document.querySelector('#checkdot-dex').dataset.id,
    st_constitution:document.querySelector('#checkdot-con').dataset.id,
    st_intelligence:document.querySelector('#checkdot-intelligence').dataset.id,
    st_wisdom:document.querySelector('#checkdot-wis').dataset.id,
    st_charisma:document.querySelector('#checkdot-cha').dataset.id,

    acrobatics:document.querySelector('#checkdot-acrobatics').dataset.id,
    analysis:document.querySelector('#checkdot-investigation').dataset.id,
    athletics:document.querySelector('#checkdot-athletics').dataset.id,
    perception:document.querySelector('#checkdot-perception').dataset.id,
    survival:document.querySelector('#checkdot-survival').dataset.id,
    performance:document.querySelector('#checkdot-performance').dataset.id,
    intimidation:document.querySelector('#checkdot-intimidation').dataset.id,
    history:document.querySelector('#checkdot-history').dataset.id,
    sleight_of_hand:document.querySelector('#checkdot-sleight\\ of\\ hand').dataset.id,
    magic:document.querySelector('#checkdot-arcana').dataset.id,
    medicine:document.querySelector('#checkdot-medicine').dataset.id,
    deception:document.querySelector('#checkdot-deception').dataset.id,
    nature:document.querySelector('#checkdot-nature').dataset.id,
    insight:document.querySelector('#checkdot-insight').dataset.id,
    religion:document.querySelector('#checkdot-religion').dataset.id,
    stealth:document.querySelector('#checkdot-stealth').dataset.id,
    persuasion:document.querySelector('#checkdot-persuasion').dataset.id,
    animal_handling:document.querySelector('#checkdot-animal\\ handling').dataset.id,

    inspiration:document.querySelector('#inspiration-check').checked,
    armor_class:document.querySelector('.vitality-block__box-value.vitality-block__shield-input.char-sheet__input').value,
    speed:document.querySelector('#speed').value,
    current_hp:document.querySelector('#vitality-current').value,
    max_hp:document.querySelector('#vitality-max').value,
    temporary_hp:document.querySelector('#vitality-temp').value,
    success1:document.querySelector('#checkdot-deathSuccess_0').checked,
    success2:document.querySelector('#checkdot-deathSuccess_1').checked,
    success3:document.querySelector('#checkdot-deathSuccess_2').checked,
    failure1:document.querySelector('#checkdot-deathFail_0').checked,
    failure2:document.querySelector('#checkdot-deathFail_1').checked,
    failure3:document.querySelector('#checkdot-deathFail_2').checked,
    bone_of_hit:document.querySelector('#vitality-die').value,
    total_bone_of_hit:document.querySelector('#vitality-dice-current').value,

    name: document.querySelector('.big.char-sheet__input').value,
    player_name:document.querySelector('#playerName').value,
    character_class:document.querySelector('#class').value,
    race:document.querySelector('#race').value,
    background:document.querySelector('#background').value,
    alignment:document.querySelector('#alignment').value,
    experience:document.querySelector('#experience').value,
    level:document.querySelector('#level').value,

    character_traits:document.querySelector('#Character-Traits').value,
    ideals:document.querySelector('#Ideals').value,
    attachments:document.querySelector('#Affections').value,
    weaknesses:document.querySelector('#Weaknesses').value,
    skills_and_abilities:document.querySelector('#Skills-and-abilities').value,
    equipment:document.querySelector('#char-sheet__equipment-wrapper').value,
    other_proficiencies:document.querySelector('#Othe__Proficiencies__and__Languages__textarea_block').value,
    attacks_and_spells:document.querySelector('#Attacks_and_Spells').value,

    copper_coins:document.querySelector('#cc').value,
    silver_coins:document.querySelector('#sc').value,
    gold_coins:document.querySelector('#gc').value,
    electrum_coins:document.querySelector('#ec').value,
    platinum_coins:document.querySelector('#pc').value,
  }
  const csrfToken = getCSRFToken();
  await fetch(`/characteristics/${character_id.textContent}/save/`,{
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-CSRFToken": csrfToken, // Передаем CSRF-токен в заголовке
    },
    body: JSON.stringify(data), // Отправляем данные в формате JSON
  });
}

function getCSRFToken() {
  return document.querySelector('meta[name="csrf-token"]').getAttribute('content');
}

const armor = document.querySelector('.directory__container .icon__container .armor');
const weppon = document.querySelector('.directory__container .icon__container .weppons');
const directory = document.querySelector('.directory__container .icon__container .directory');
const a_w_information__container = document.querySelector('.directory__container .information__container');

const armor_weppon_list = [armor, weppon, directory];

armor_weppon_list.forEach((e) => {
  console.log('start');
  e.addEventListener('click', (e2) => {
    // Открытие контейнера с информацией
    a_w_information__container.style.display = 'block';
    a_w_information__container.innerHTML = e.children[1].outerHTML;
  });
});

// Закрытие контейнера при клике вне него
document.addEventListener('click', (e) => {
  // Проверяем, не был ли клик внутри a_w_information__container и не на элементах armor и weppons
  if (!a_w_information__container.contains(e.target) && !armor.contains(e.target) && !weppon.contains(e.target) && !directory.contains(e.target)) {
    a_w_information__container.style.display = 'none';
  }
});
