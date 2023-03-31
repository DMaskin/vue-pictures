<template>
    <div class="card d-flex flex-column">
      <v-row class="ma-0 pa-0">
        <img src="https://sun9-4.userapi.com/impg/P75OEBhebQcogjz0H5wHMaMOMqerdhlbVGRk2w/q-2lHAE7Itg.jpg?size=604x431&quality=96&sign=d8bb3a5f4aa095d449f4e2ea27b24ada&type=album" alt=""/>
      </v-row>
      <v-row class="ma-0 pa-0 d-flex justify-center align-center">
        <p class="ma-0">"Рождение Венеры"</p>
        <p class="ma-0">Сандро Боттичелли</p>
      </v-row>
      <v-row class="ma-0 pa-0">
        <v-col class="d-flex justify-center align-center">
          <p class="price ma-0">1 000 000 $</p>
        </v-col>
        <v-col class="d-flex align-center justify-center">
          <button>Купить</button>
        </v-col>
      </v-row>
    </div>
</template>

<script>

export default {
  name: 'CardComponent',
  props: {
    img: String,
    title: String,
    author: String,
    price: String
  }
}
</script>

<style scoped>
.card {
  width: 280px;
  height: 328px;
  border: #E1E1E1 solid 1px;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  color: #343030;
}

img {
  width: 280px;
  height: 160px;
}

.price {
  font-style: normal;
  font-weight: 700;
  font-size: 16px;

}

button {
  width: 118px;
  height: 48px;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  background-color: #403432;
  color: #fff
}
</style>