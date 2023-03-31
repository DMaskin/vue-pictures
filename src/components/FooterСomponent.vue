<template>
  <v-container fluid class="container d-flex align-center">
    <v-row class="ma-0">
      <v-col md="7" class="d-flex justify-end align-center">
        <MenuComponent/>
      </v-col>
      <v-col md="5" class="d-flex align-center">
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import MenuComponent from "@/components/MenuComponent";

export default {
  name: 'FooterComponent',
  components: {
    MenuComponent
  },
  props: {
    msg: String
  }
}
</script>


<style scoped>
.container {
  height: 10vh;
  background-color: #ECEAEA;
}
</style>