<template>
  <div class="menu d-flex align-end">
    <span>Каталог</span>
    <span>Доставка</span>
    <span>Оплата</span>
    <span>Контакты</span>
    <span>О компании</span>
  </div>
</template>

<script>
export default {
  name: 'MenuComponent',
  props: {}
}
</script>

<style scoped>
.menu {
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  color: #343030;
  gap: 48px;
}
</style>