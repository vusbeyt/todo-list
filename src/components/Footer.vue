<template>
    <footer>
<div class="line"></div>
  <p>Дело завершено: {{ count }} / {{ todos.length }}</p>
  <p class="btn_footer" @click="removetodo(id--,count=0)">Очистить</p>
    </footer>
</template>
<style>
footer{
    position: absolute;
    width: 100%;
    height: 90px;
    margin: 0 auto;
    bottom: 0;
}
.line{
    height: 0;
    width: 100%;
    border: 1px solid #EEEEEE;
}
</style>
<script>

</script>