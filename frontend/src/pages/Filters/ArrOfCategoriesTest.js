import MovieIcon from "../../icons/filtersSvgIcons/MovieIcon.jsx"
import TheatreIcon from "../../icons/filtersSvgIcons/TheatreIcon.jsx"
import ConcertsIcon from "../../icons/filtersSvgIcons/ConcertsIcon.jsx"
import ExcursionIcon from "../../icons/filtersSvgIcons/ExcursionIcon.jsx"
import EducationIcon from "../../icons/filtersSvgIcons/EducationIcon.jsx"
import ExhibitionIcon from "../../icons/filtersSvgIcons/ExhibitionIcon.jsx"
import QuestIcon from "../../icons/filtersSvgIcons/QuestIcon.jsx"
import BarIcon from "../../icons/filtersSvgIcons/BarIcon.jsx"
import PartyIcon from "../../icons/filtersSvgIcons/PartyIcon.jsx"
import SportIcon from "../../icons/filtersSvgIcons/SportIcon.jsx"
import OtherIcon from "../../icons/filtersSvgIcons/OtherIcon.jsx"

export const CategoryArray = [
  {
    categoryName: "Кино",
    categoryColor: "#4146C0",
    CategoryIcon: MovieIcon,
    subCategories: [
      {
        engName: "premiers",
        ruName: "Премьеры",
      },
      {
        engName: "rerun",
        ruName: "Повторный показ",
      },
    ],
  },
  {
    categoryName: "Театр",
    categoryColor: "#8141C0",
    CategoryIcon: TheatreIcon,
    subCategories: [
      {
        engName: "drama",
        ruName: "Драматический театр",
      },
      {
        engName: "chamber",
        ruName: "Камерный театр",
      },
    ],
  },
  {
    categoryName: "Концерты",
    categoryColor: "#AF41C0",
    CategoryIcon: ConcertsIcon,
    subCategories: [
      {
        engName: "rock",
        ruName: "Рок",
      },
      {
        engName: "rap",
        ruName: "Рэп",
      },
    ],
  },
  {
    categoryName: "Экскурсии",
    categoryColor: "#C041BB",
    CategoryIcon: ExcursionIcon,
    subCategories: [
      {
        engName: "groupExcursion",
        ruName: "Групповые",
      },
      {
        engName: "privateExcursion",
        ruName: "Одиночные",
      },
    ],
  },
  {
    categoryName: "Обучение",
    categoryColor: "#C04195",
    CategoryIcon: EducationIcon,
    subCategories: [
      {
        engName: "lections",
        ruName: "Лекции",
      },
      {
        engName: "masterClass",
        ruName: "Мастер-классы",
      },
      {
        engName: "educationOthers",
        ruName: "Другое",
      },
    ],
  },
  {
    categoryName: "Выставки",
    categoryColor: "#C04177",
    CategoryIcon: ExhibitionIcon,
    subCategories: [
      {
        engName: "painting",
        ruName: "Картины",
      },
      {
        engName: "expositionOther",
        ruName: "Другое",
      },
    ],
  },
  {
    categoryName: "Квесты",
    categoryColor: "#C04158",
    CategoryIcon: QuestIcon,
    subCategories: [
      {
        engName: "horrorQuest",
        ruName: "Хоррор-квесты",
      },
      {
        engName: "questOther",
        ruName: "Другие квесты",
      },
    ],
  },
  {
    categoryName: "Бары",
    categoryColor: "#C04141",
    CategoryIcon: BarIcon,
    subCategories: [
      {
        engName: "barCinema",
        ruName: "Кинопоказы",
      },
      {
        engName: "barLections",
        ruName: "Лекции",
      },
      {
        engName: "degustations",
        ruName: "Дегустации",
      },
    ],
  },
  {
    categoryName: "Вечеринки",
    categoryColor: "#C04141",
    CategoryIcon: PartyIcon,
    subCategories: [
      {
        engName: "dances",
        ruName: "Танцы",
      },
      {
        engName: "concerts",
        ruName: "Концерты",
      },
      {
        engName: "adults",
        ruName: "Для взрослых",
      },
    ],
  },
  {
    categoryName: "Спорт",
    categoryColor: "#C06041",
    CategoryIcon: SportIcon,
    subCategories: [
      {
        engName: "sportCompetition",
        ruName: "Соревнования",
      },
      {
        engName: "sportFreeLesson",
        ruName: "Бесплатные уроки",
      },
    ],
  },
  {
    categoryName: "Разное",
    categoryColor: "#C06F41",
    CategoryIcon: OtherIcon,
    subCategories: [
      {
        engName: "psychology",
        ruName: "Психология",
      },
      {
        engName: "otherOther",
        ruName: "Другое",
      },
    ],
  },
]
