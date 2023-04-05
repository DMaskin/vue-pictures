<template>
  <v-container fluid class="container">
    <v-row class="mt-5">
      <v-spacer/>
      <v-col md="8">
        <h1>Картины эпохи Возрождения</h1>
      </v-col>
      <v-spacer/>
    </v-row>
    <v-row class="mt-5">
      <v-spacer/>
      <v-col md="8" class="d-flex flex-row justify-space-between">
        <PictureComponent v-for="picture in getAllPictures"
                          :key="picture.title"
                          :picture="picture"

        />
      </v-col>
      <v-spacer/>
    </v-row>
  </v-container>
</template>

<script>
import PictureComponent from "@/components/PictureComponent";
import {mapGetters} from "vuex"

export default {
  name: 'HomePage',
  components: {PictureComponent},
  methods: {
    onClick: function () {
      alert('click')
    },
  },
  computed: {
    ...mapGetters(["getPictures", "getQuery"]),
    getAllPictures() {
      const query = this.getQuery
      return query
          ? this.getPictures.filter((p) => p.title.toLowerCase().includes(query.toLowerCase()))
          : this.getPictures
    }
  }
}
</script>


<style scoped>
.container {
  height: 80vh;
  background-color: #F6F3F3;;
}

h1 {
  font-size: 24px;
  font-style: normal;
  font-weight: bold;
  color: #343030;
}
</style>
