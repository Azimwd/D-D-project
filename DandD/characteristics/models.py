from django.db import models
from django.contrib.auth.models import User  # Для связи персонажа с пользователем

class Characteristics(models.Model):

    strength = models.IntegerField(default=10,verbose_name="Сила", blank=True, null=True)
    dexterity = models.IntegerField(default=10,verbose_name="Ловкость", blank=True, null=True)
    constitution = models.IntegerField(default=10,verbose_name="Телосложение", blank=True, null=True)
    intelligence = models.IntegerField(default=10,verbose_name="Интеллект", blank=True, null=True)
    wisdom = models.IntegerField(default=10,verbose_name="Мудрость", blank=True, null=True)
    charisma = models.IntegerField(default=10,verbose_name="Харизма", blank=True, null=True)

    st_strength = models.IntegerField(default=1, verbose_name="Сп_сила", blank=True, null=True)
    st_dexterity = models.IntegerField(default=1, verbose_name="Сп_ловкость", blank=True, null=True)
    st_constitution = models.IntegerField(default=1, verbose_name="Сп_телосложение", blank=True, null=True)
    st_intelligence = models.IntegerField(default=1, verbose_name="Сп_интеллект", blank=True, null=True)
    st_wisdom = models.IntegerField(default=1, verbose_name="Сп_мудрость", blank=True, null=True)
    st_charisma = models.IntegerField(default=1, verbose_name="Сп_харизма", blank=True, null=True)

    acrobatics = models.IntegerField(default=1, verbose_name="Акробатика (Лов)", blank=True)
    analysis = models.IntegerField(default=1, verbose_name="Анализ (Инт)", blank=True)
    athletics = models.IntegerField(default=1, verbose_name="Атлетика (Сил)", blank=True)
    perception = models.IntegerField(default=1, verbose_name="Восприятие (Муд)", blank=True)
    survival = models.IntegerField(default=1, verbose_name="Выживание (Муд)", blank=True)
    performance = models.IntegerField(default=1, verbose_name="Выступление (Хар)", blank=True)
    intimidation = models.IntegerField(default=1, verbose_name="Запугивание (Хар)", blank=True)
    history = models.IntegerField(default=1, verbose_name="История (Инт)", blank=True)
    sleight_of_hand = models.IntegerField(default=1, verbose_name="Ловкость рук (Лов)", blank=True)
    magic = models.IntegerField(default=1, verbose_name="Магия (Инт)", blank=True)
    medicine = models.IntegerField(default=1, verbose_name="Медицина (Муд)", blank=True)
    deception = models.IntegerField(default=1, verbose_name="Обман (Хар)", blank=True)
    nature = models.IntegerField(default=1, verbose_name="Природа (Инт)", blank=True)
    insight = models.IntegerField(default=1, verbose_name="Проницательность (Муд)", blank=True)
    religion = models.IntegerField(default=1, verbose_name="Религия (Инт)", blank=True)
    stealth = models.IntegerField(default=1, verbose_name="Скрытность (Лов)", blank=True)
    persuasion = models.IntegerField(default=1, verbose_name="Убеждение (Хар)", blank=True)
    animal_handling = models.IntegerField(default=1, verbose_name="Уход за животными (Муд)", blank=True)

    inspiration = models.BooleanField(default=False, verbose_name="Вдохновение", blank=True)
    armor_class = models.IntegerField(default=10, verbose_name="КЗ",blank=True)
    speed = models.IntegerField(default=30, verbose_name="Скорость",blank=True)
    current_hp = models.IntegerField(default=0, verbose_name="Текущие хиты",blank=True)
    max_hp = models.IntegerField(default=0, verbose_name="Максимальные хиты", blank=True, null=True)
    temporary_hp = models.IntegerField(default=0, verbose_name="Временные хиты", blank=True, null=True)
    success1 = models.BooleanField(default=False, verbose_name="успех1", blank=True)
    success2 = models.BooleanField(default=False, verbose_name="успех2", blank=True)
    success3 = models.BooleanField(default=False, verbose_name="успех3", blank=True)
    failure1 = models.BooleanField(default=False, verbose_name="провал1", blank=True)
    failure2 = models.BooleanField(default=False, verbose_name="провал2", blank=True)
    failure3 = models.BooleanField(default=False, verbose_name="провал3", blank=True)
    Bone_of_Hit = models.CharField(max_length=10,verbose_name="Кость хитов", blank=True)
    Total_bone_of_Hit = models.CharField(max_length=10,verbose_name="Всего кость хитов", blank=True)

    name = models.CharField(max_length=100, verbose_name="Имя персонажа",blank=True)
    player_name = models.CharField(max_length=100, verbose_name="Имя игрока",blank=True)
    character_class = models.CharField(max_length=50, verbose_name="Класс",blank=True)
    race = models.CharField(max_length=50, verbose_name="Раса")
    background = models.TextField(verbose_name="Предыстория", blank=True, null=True)
    alignment = models.CharField(max_length=20, verbose_name="Мировоззрение",blank=True)
    experience = models.IntegerField(default=0, verbose_name="Опыт",blank=True)
    level = models.IntegerField(default=1, verbose_name="Уровень",blank=True)

    Character_traits =  models.CharField(max_length=999, verbose_name="Черты характера",blank=True)
    Ideals =  models.CharField(max_length=999, verbose_name="Идеалы",blank=True)
    Attachments =  models.CharField(max_length=999, verbose_name="Привязанности",blank=True)
    Weaknesses =  models.CharField(max_length=999, verbose_name="Слабости",blank=True)
    Skills_and_abilities =  models.CharField(max_length=999, verbose_name="Умения и способности",blank=True)
    Equipment =  models.CharField(max_length=999, verbose_name="Снаряжение",blank=True)
    Other_Proficiencies  =  models.CharField(max_length=999, verbose_name="Прочие владения и языки",blank=True)
    Attacks_and_Spells =  models.CharField(max_length=999, verbose_name="Атаки и заклинания",blank=True)

    cc = models.IntegerField(verbose_name="мм", blank=True, null=True)
    sc = models.IntegerField(verbose_name="см", blank=True, null=True)
    gc = models.IntegerField(verbose_name="зм", blank=True, null=True)
    ec = models.IntegerField(verbose_name="эм", blank=True, null=True)
    pc = models.IntegerField(verbose_name="пм", blank=True, null=True)
    
    

    user = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name="characters"
    )
    
    class Meta:
        db_table = 'Характерисики'
        verbose_name = 'Персонаж'
        verbose_name_plural = 'Персонажи'

# from django.db import models
# from django.contrib.auth.models import User


# class Characteristics(models.Model):
#     strength = models.IntegerField(default=10, verbose_name="Сила", blank=True)
#     dexterity = models.IntegerField(default=10, verbose_name="Ловкость", blank=True)
#     constitution = models.IntegerField(default=10, verbose_name="Телосложение", blank=True)
#     intelligence = models.IntegerField(default=10, verbose_name="Интеллект", blank=True)
#     wisdom = models.IntegerField(default=10, verbose_name="Мудрость", blank=True)
#     charisma = models.IntegerField(default=10, verbose_name="Харизма", blank=True)

#     st_strength = models.IntegerField(default=1, verbose_name="Сп_сила", blank=True)
#     st_dexterity = models.IntegerField(default=1, verbose_name="Сп_ловкость", blank=True)
#     st_constitution = models.IntegerField(default=1, verbose_name="Сп_телосложение", blank=True)
#     st_intelligence = models.IntegerField(default=1, verbose_name="Сп_интеллект", blank=True)
#     st_wisdom = models.IntegerField(default=1, verbose_name="Сп_мудрость", blank=True)
#     st_charisma = models.IntegerField(default=1, verbose_name="Сп_харизма", blank=True)

#     acrobatics = models.IntegerField(default=1, verbose_name="Акробатика (Лов)", blank=True)
#     analysis = models.IntegerField(default=1, verbose_name="Анализ (Инт)", blank=True)
#     athletics = models.IntegerField(default=1, verbose_name="Атлетика (Сил)", blank=True)
#     perception = models.IntegerField(default=1, verbose_name="Восприятие (Муд)", blank=True)
#     survival = models.IntegerField(default=1, verbose_name="Выживание (Муд)", blank=True)
#     performance = models.IntegerField(default=1, verbose_name="Выступление (Хар)", blank=True)
#     intimidation = models.IntegerField(default=1, verbose_name="Запугивание (Хар)", blank=True)
#     history = models.IntegerField(default=1, verbose_name="История (Инт)", blank=True)
#     sleight_of_hand = models.IntegerField(default=1, verbose_name="Ловкость рук (Лов)", blank=True)
#     magic = models.IntegerField(default=1, verbose_name="Магия (Инт)", blank=True)
#     medicine = models.IntegerField(default=1, verbose_name="Медицина (Муд)", blank=True)
#     deception = models.IntegerField(default=1, verbose_name="Обман (Хар)", blank=True)
#     nature = models.IntegerField(default=1, verbose_name="Природа (Инт)", blank=True)
#     insight = models.IntegerField(default=1, verbose_name="Проницательность (Муд)", blank=True)
#     religion = models.IntegerField(default=1, verbose_name="Религия (Инт)", blank=True)
#     stealth = models.IntegerField(default=1, verbose_name="Скрытность (Лов)", blank=True)
#     persuasion = models.IntegerField(default=1, verbose_name="Убеждение (Хар)", blank=True)
#     animal_handling = models.IntegerField(default=1, verbose_name="Уход за животными (Муд)", blank=True)

#     inspiration = models.BooleanField(default=False, verbose_name="Вдохновение")
#     armor_class = models.IntegerField(default=10, verbose_name="КЗ")
#     speed = models.IntegerField(default=30, verbose_name="Скорость")
#     current_hp = models.IntegerField(default=0, verbose_name="Текущие хиты")
#     max_hp = models.IntegerField(default=0, verbose_name="Максимальные хиты", null=True)
#     temporary_hp = models.IntegerField(default=0, verbose_name="Временные хиты", null=True)
#     success1 = models.BooleanField(default=False, verbose_name="Успех 1")
#     success2 = models.BooleanField(default=False, verbose_name="Успех 2")
#     success3 = models.BooleanField(default=False, verbose_name="Успех 3")
#     failure1 = models.BooleanField(default=False, verbose_name="Провал 1")
#     failure2 = models.BooleanField(default=False, verbose_name="Провал 2")
#     failure3 = models.BooleanField(default=False, verbose_name="Провал 3")
#     bone_of_hit = models.CharField(max_length=10, verbose_name="Кость хитов", blank=True)
#     total_bone_of_hit = models.CharField(max_length=10, verbose_name="Всего кость хитов", blank=True)

#     name = models.CharField(max_length=100, verbose_name="Имя персонажа", blank=True)
#     player_name = models.CharField(max_length=100, verbose_name="Имя игрока", blank=True)
#     character_class = models.CharField(max_length=50, verbose_name="Класс", blank=True)
#     race = models.CharField(max_length=50, verbose_name="Раса")
#     background = models.TextField(verbose_name="Предыстория", blank=True, null=True)
#     alignment = models.CharField(max_length=20, verbose_name="Мировоззрение", blank=True)
#     experience = models.IntegerField(default=0, verbose_name="Опыт", blank=True)
#     level = models.IntegerField(default=1, verbose_name="Уровень", blank=True)

#     character_traits = models.TextField(verbose_name="Черты характера", blank=True)
#     ideals = models.TextField(verbose_name="Идеалы", blank=True)
#     attachments = models.TextField(verbose_name="Привязанности", blank=True)
#     weaknesses = models.TextField(verbose_name="Слабости", blank=True)
#     skills_and_abilities = models.TextField(verbose_name="Умения и способности", blank=True)
#     equipment = models.TextField(verbose_name="Снаряжение", blank=True)
#     other_proficiencies = models.TextField(verbose_name="Прочие владения и языки", blank=True)
#     attacks_and_spells = models.TextField(verbose_name="Атаки и заклинания", blank=True)

#     copper_coins = models.IntegerField(verbose_name="Медные монеты", blank=True, null=True)
#     silver_coins = models.IntegerField(verbose_name="Серебряные монеты", blank=True, null=True)
#     gold_coins = models.IntegerField(verbose_name="Золотые монеты", blank=True, null=True)
#     electrum_coins = models.IntegerField(verbose_name="Электрумовые монеты", blank=True, null=True)
#     platinum_coins = models.IntegerField(verbose_name="Платиновые монеты", blank=True, null=True)

#     user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="characters")

#     class Meta:
#         db_table = "characteristics"
#         verbose_name = "Персонаж"
#         verbose_name_plural = "Персонажи"
