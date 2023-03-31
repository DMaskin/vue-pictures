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
        <CardComponent/>
        <CardComponent/>
        <CardComponent/>
      </v-col>
      <v-spacer/>
    </v-row>
  </v-container>
</template>

<script>
import CardComponent from "@/components/CardComponent";

export default {
  name: 'HomePage',
  components: {CardComponent},
  props: {
    msg: String
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
