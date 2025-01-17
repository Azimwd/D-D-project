from django.db import models
from django.contrib.auth.models import User  # Для связи персонажа с пользователем

class Characteristics(models.Model):

    strength = models.IntegerField(verbose_name="Сила", blank=True, null=True)
    dexterity = models.IntegerField(verbose_name="Ловкость", blank=True, null=True)
    constitution = models.IntegerField(verbose_name="Телосложение", blank=True, null=True)
    intelligence = models.IntegerField(verbose_name="Интеллект", blank=True, null=True)
    wisdom = models.IntegerField(verbose_name="Мудрость", blank=True, null=True)
    charisma = models.IntegerField(verbose_name="Харизма", blank=True, null=True)

    st_strength = models.BooleanField(default=False, verbose_name="Сп_сила", blank=True, null=True)
    st_dexterity = models.BooleanField(default=False, verbose_name="Сп_ловкость", blank=True, null=True)
    st_constitution = models.BooleanField(default=False, verbose_name="Сп_телосложение", blank=True, null=True)
    st_intelligence = models.BooleanField(default=False, verbose_name="Сп_интеллект", blank=True, null=True)
    st_wisdom = models.BooleanField(default=False, verbose_name="Сп_мудрость", blank=True, null=True)
    st_charisma = models.BooleanField(default=False, verbose_name="Сп_харизма", blank=True, null=True)

    acrobatics = models.BooleanField(default=False, verbose_name="Акробатика (Лов)", blank=True)
    analysis = models.BooleanField(default=False, verbose_name="Анализ (Инт)", blank=True)
    athletics = models.BooleanField(default=False, verbose_name="Атлетика (Сил)", blank=True)
    perception = models.BooleanField(default=False, verbose_name="Восприятие (Муд)", blank=True)
    survival = models.BooleanField(default=False, verbose_name="Выживание (Муд)", blank=True)
    performance = models.BooleanField(default=False, verbose_name="Выступление (Хар)", blank=True)
    intimidation = models.BooleanField(default=False, verbose_name="Запугивание (Хар)", blank=True)
    history = models.BooleanField(default=False, verbose_name="История (Инт)", blank=True)
    sleight_of_hand = models.BooleanField(default=False, verbose_name="Ловкость рук (Лов)", blank=True)
    magic = models.BooleanField(default=False, verbose_name="Магия (Инт)", blank=True)
    medicine = models.BooleanField(default=False, verbose_name="Медицина (Муд)", blank=True)
    deception = models.BooleanField(default=False, verbose_name="Обман (Хар)", blank=True)
    nature = models.BooleanField(default=False, verbose_name="Природа (Инт)", blank=True)
    insight = models.BooleanField(default=False, verbose_name="Проницательность (Муд)", blank=True)
    religion = models.BooleanField(default=False, verbose_name="Религия (Инт)", blank=True)
    stealth = models.BooleanField(default=False, verbose_name="Скрытность (Лов)", blank=True)
    persuasion = models.BooleanField(default=False, verbose_name="Убеждение (Хар)", blank=True)
    animal_handling = models.BooleanField(default=False, verbose_name="Уход за животными (Муд)", blank=True)

    fl_st_strength = models.IntegerField(default=0, verbose_name="Сп_сила", blank=True, null=True)
    fl_st_dexterity = models.IntegerField(default=0, verbose_name="Сп_ловкость", blank=True, null=True)
    fl_st_constitution = models.IntegerField(default=0, verbose_name="Сп_телосложение", blank=True, null=True)
    fl_st_intelligence = models.IntegerField(default=0, verbose_name="Сп_интеллект", blank=True, null=True)
    fl_st_wisdom = models.IntegerField(default=0, verbose_name="Сп_мудрость", blank=True, null=True)
    fl_st_charisma = models.IntegerField(default=0, verbose_name="Сп_харизма", blank=True, null=True)

    fl_acrobatics = models.IntegerField(default=0, verbose_name="Акробатика (Лов)", blank=True)
    fl_analysis = models.IntegerField(default=0, verbose_name="Анализ (Инт)", blank=True)
    fl_athletics = models.IntegerField(default=0, verbose_name="Атлетика (Сил)", blank=True)
    fl_perception = models.IntegerField(default=0, verbose_name="Восприятие (Муд)", blank=True)
    fl_survival = models.IntegerField(default=0, verbose_name="Выживание (Муд)", blank=True)
    fl_performance = models.IntegerField(default=0, verbose_name="Выступление (Хар)", blank=True)
    fl_intimidation = models.IntegerField(default=0, verbose_name="Запугивание (Хар)", blank=True)
    fl_history = models.IntegerField(default=0, verbose_name="История (Инт)", blank=True)
    fl_sleight_of_hand = models.IntegerField(default=0, verbose_name="Ловкость рук (Лов)", blank=True)
    fl_magic = models.IntegerField(default=0, verbose_name="Магия (Инт)", blank=True)
    fl_medicine = models.IntegerField(default=0, verbose_name="Медицина (Муд)", blank=True)
    fl_deception = models.IntegerField(default=0, verbose_name="Обман (Хар)", blank=True)
    fl_nature = models.IntegerField(default=0, verbose_name="Природа (Инт)", blank=True)
    fl_insight = models.IntegerField(default=0, verbose_name="Проницательность (Муд)", blank=True)
    fl_religion = models.IntegerField(default=0, verbose_name="Религия (Инт)", blank=True)
    fl_stealth = models.IntegerField(default=0, verbose_name="Скрытность (Лов)", blank=True)
    fl_persuasion = models.IntegerField(default=0, verbose_name="Убеждение (Хар)", blank=True)
    fl_animal_handling = models.IntegerField(default=0, verbose_name="Уход за животными (Муд)", blank=True)

    inspiration = models.BooleanField(default=False, verbose_name="Вдохновение", blank=True)
    proficiency_bonus = models.IntegerField(default=2, verbose_name="Бонус владения",blank=True)
    armor_class = models.IntegerField(default=10, verbose_name="КЗ",blank=True)
    initiative = models.IntegerField(default=0, verbose_name="Инициатива",blank=True)
    speed = models.IntegerField(default=30, verbose_name="Скорость",blank=True)
    current_hp = models.IntegerField(default=0, verbose_name="Текущие хиты",blank=True)
    temporary_hp = models.IntegerField(default=0, verbose_name="Временные хиты", blank=True, null=True)
    max_hp = models.IntegerField(default=0, verbose_name="Максимальные хиты", blank=True, null=True)
    temporary_hp = models.IntegerField(default=0, verbose_name="Временные хиты", blank=True, null=True)
    max_hp = models.IntegerField(default=0, verbose_name="Максимальные хиты", blank=True, null=True)
    passive_perception = models.IntegerField(default=10, verbose_name="пассивная мудрость (Восприятие) ",blank=True)

    name = models.CharField(max_length=100, verbose_name="Имя персонажа",blank=True)
    player_name = models.CharField(max_length=100, verbose_name="Имя игрока",blank=True)
    character_class = models.CharField(max_length=50, verbose_name="Класс",blank=True)
    race = models.CharField(max_length=50, verbose_name="Раса")
    background = models.TextField(verbose_name="Предыстория", blank=True, null=True)
    alignment = models.CharField(max_length=20, verbose_name="Мировоззрение",blank=True)
    experience = models.IntegerField(default=0, verbose_name="Опыт",blank=True)
    level = models.IntegerField(default=1, verbose_name="Уровень",blank=True)
    notes =  models.CharField(max_length=999, verbose_name="Заметки",blank=True)

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
