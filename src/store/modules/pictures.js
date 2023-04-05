const initialPictures = [{
  img: "https://sun9-4.userapi.com/impg/P75OEBhebQcogjz0H5wHMaMOMqerdhlbVGRk2w/q-2lHAE7Itg.jpg?size=604x431&quality=96&sign=d8bb3a5f4aa095d449f4e2ea27b24ada&type=album",
  title: "\"Рождение Венеры1\"",
  author: "Сандро Боттичелли",
  price: "1 000 000 $",
  inBasket: false
}, {
  img: "https://sun9-4.userapi.com/impg/P75OEBhebQcogjz0H5wHMaMOMqerdhlbVGRk2w/q-2lHAE7Itg.jpg?size=604x431&quality=96&sign=d8bb3a5f4aa095d449f4e2ea27b24ada&type=album",
  title: "\"Тайная вечеря\"",
  author: "Леонардо да Винчи",
  price: "1 000 000 $",
  inBasket: false
}, {
  img: "https://sun9-4.userapi.com/impg/P75OEBhebQcogjz0H5wHMaMOMqerdhlbVGRk2w/q-2lHAE7Itg.jpg?size=604x431&quality=96&sign=d8bb3a5f4aa095d449f4e2ea27b24ada&type=album",
  title: "\"Сотворение Адама\"",
  author: "Микеладжело",
  price: "1 000 000 $",
  inBasket: false
}, {
  img: "https://sun9-4.userapi.com/impg/P75OEBhebQcogjz0H5wHMaMOMqerdhlbVGRk2w/q-2lHAE7Itg.jpg?size=604x431&quality=96&sign=d8bb3a5f4aa095d449f4e2ea27b24ada&type=album",
  title: "\"Урок анатомии\"",
  author: "Рембрандт",
  price: "1 000 000 $",
  inBasket: false
}]


export default {
  state: {
    pictures: initialPictures,
    query: ""
  },
  actions: {
    async addOnBasket(context, title) {
      setTimeout(() => {
        context.commit("updatePicturesOnTitle", title)
      }, 2000)
    },
    setQuery(context, query = "") {
      context.commit("setQuery", query)
    }
  },
  mutations: {
    updatePictures(state, pictures) {
      state.pictures = pictures
    },
    updatePicturesOnTitle(state, title) {
      state.pictures = [...state.pictures
        .map((p) => p.title !== title
          ? p
          : {...p, inBasket: true})]
    },
    setQuery(state, query) {
      state.query = query
    }
  },
  getters: {
    getPictures(state) {
      return state.pictures
    },
    getQuery(state) {
      return state.query
    }
  },
}