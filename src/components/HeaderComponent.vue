<template>
  <v-container fluid class="container d-flex align-center">
    <v-row class="ma-0">
      <v-col md="7" class="d-flex justify-end align-center">
        <MenuComponent/>
      </v-col>
      <v-col md="5" class="d-flex align-center justify-center">
        <div class="search">
          <input v-model="query" type="text" placeholder="Поиск по названию картины"/>
          <button class="commonButton">Найти</button>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import MenuComponent from "@/components/MenuComponent";
import { mapActions } from 'vuex'

export default {
  name: 'HeaderComponent',
  components: {
    MenuComponent
  },
  data() {
    return {
      query: ""
    }
  },
  methods: {
    ...mapActions(["setQuery"]),
    onInputChange() {
      this.setQuery(this.query)
    }
  },
  watch: {
    query() {
      this.onInputChange()
    }
  }
}
</script>

<style scoped>

.container {
  height: 10vh;
  background-color: #F6F3F3;
  border-bottom: #E1E1E1 solid 1px;
}

.search :focus{
  border: #B5B5B5 solid 1px;
}

input {
  width: 294px;
  height: 48px;
  background-color: #E5E5E5;
  border: #E1E1E1 solid 1px;
  padding: 13px 0 14px 16px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  outline: none;
}

input::placeholder {
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
}

input :focus {
  padding: 13px 0 14px 16px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  color: black;
}

</style>