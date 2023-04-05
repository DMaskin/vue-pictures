<template xmlns:v-if="http://www.w3.org/1999/html">
  <div class="card d-flex flex-column">
    <v-row class="ma-0 pa-0">
      <img :src="picture.img"
           v-on:click="showModal = true"
           alt=""/>
    </v-row>
    <v-row class="ma-0 pa-0 d-flex justify-center align-center">
      <p class="ma-0"
         style="cursor: pointer"
         v-on:click="showModal = true"
      >{{ picture.title }}
      </p>
      <p class="ma-0">{{ picture.author }}</p>
    </v-row>
    <v-row class="ma-0 pa-0">
      <v-col class="d-flex flex-column justify-center align-center">
        <p class="price discount ma-0">2 000 000 $</p>
        <p class="price ma-0">{{ picture.price }}</p>
      </v-col>
      <v-col class="d-flex align-center justify-center">
        <button v-if="picture.inBasket" class="commonButton">
          <svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.5315 1.80937L5.63341 11.237L1.34814 7.19237" stroke="#F4F6F9" stroke-width="2"
                  stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          В корзине
        </button>
        <button v-else
                @click.prevent="onButtonClick(picture.title)"
                class="commonButton">
          <img v-if="isLoading"
              style="width: 14px; height: 10px"
              src="@/assets/loader.svg"
          />
          Купить
        </button>
      </v-col>
    </v-row>
    <ModalComponent v-if="showModal" @close="showModal=false">
      <h3 slot="header">{{ picture.title }}</h3>
      <div slot="body">
        <img :src="picture.img" alt="">
        <p class="price discount ma-0">2 000 000 $</p>
        <p class="price ma-0">{{ picture.price }}</p>
      </div>
    </ModalComponent>
  </div>
</template>

<script>
import ModalComponent from "@/components/ModalComponent";
import {mapActions} from "vuex"

export default {
  name: 'CardComponent',
  components: {ModalComponent},
  props: {
    picture: {
      img: String,
      title: String,
      author: String,
      price: String,
      inBasket: Boolean
    }
  },
  data() {
    return {
      showModal: false,
      isLoading: false
    }
  },
  methods: {
    ...mapActions(["addOnBasket"]),
    onButtonClick(title) {
      this.isLoading = "true"
      this.addOnBasket(title)
          .finally(() => this.isLoading = "false")
    }
  },
  computed: {}
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
  cursor: pointer;
}

.price {
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
}

.discount {
  font-weight: 300;
  font-size: 14px;
  text-decoration: line-through;
}

</style>