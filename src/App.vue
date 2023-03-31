<template>
  <v-app>
    <HeaderComponent/>
    <PictureBox/>
    <FooterComponent/>
  </v-app>
</template>

<script>
import PictureBox from "@/components/PictureBox";
import HeaderComponent from "@/components/HeaderComponent";
import FooterComponent from "@/components/FooterСomponent"

export default {
  name: 'App',
  components: {
    HeaderComponent,
    PictureBox,
    FooterComponent
  }
}
</script>

<style>
#app {
  font-family: 'Merriweather', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
}

li {
  list-style-type: none;
}

ul {
  margin: 0;
  padding: 0;
}

span {
  margin: 0;
  padding: 0;
}


</style>
