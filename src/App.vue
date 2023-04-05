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

.H1 {
  font-weight: bold;
  font-size: 24px;
}

.H2 {
  font-size: 18px;
  font-weight: 400;
}

.H3 {
  font-weight: bold;
  font-size: 16px;
}

.H4 {
  font-size: 14px;
  font-weight: bold;
}

.H5 {
  font-size: 14px;
  font-weight: 400;
}

.H6 {
  font-weight: 300;
  font-size: 14px;
}

.H1, .H2, .H3, .H4, .H5, .H6 {
  color: #343030;
}

.commonButton {
  background-color: #403432;
  color: #F4F6F9;
  width: 118px;
  height: 48px;

  font-weight: 700;
  font-size: 14px;
}

.loadingButton {
  background-color: #C1B4B1;
  color: #F4F6F9;
  width: 118px;
  height: 48px;

  font-weight: 700;
  font-size: 14px;
}

.commonButton:hover {
  background: #776763;
}


</style>
