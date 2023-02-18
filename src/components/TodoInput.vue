<template>
    <div class="input">
    <input v-model="todo" type="text" placeholder="Добавить новый элемент"/>
    <button @click="addtodo(id++)" class="btn_add">Добавить</button>
<div class="todo" v-for="todo in todos" :key="todo.id">
<input @click="count++" v-model="todo.iscomplete" id="todo__check" type="checkbox"/>
<span class="todo_text" :class="{ todo__text_ishow: todo.iscomplete }">{{ todo.text }}</span>
</div>
<div class="footer">
<div class="line"></div>
  <p>Дело завершено: {{ count }} / {{ todos.length }}</p>
  <p class="btn_footer" @click="removetodo(id--,count=0)">Очистить</p>
    </div>
  </div>
</template>
<style>
#todo__check:hover + .todo_text {
  color: #2D70FD;
  cursor: pointer;
}
.footer{
    
}
.line{
    height: 0;
    width: 100%;
    border: 1px solid #EEEEEE;
}
.todo{
    margin-top: 24px;
  
}
#todo__check{
    width: 32px;
    height: 32px;
    background-color: white;
    border-radius: 50%;
    vertical-align: middle;
    border: 1px solid #ddd;
    appearance: none;
    -webkit-appearance: none;
    outline: none;
    cursor: pointer;
    display: inline-block;
}
#todo__check:checked {
    background-color: #00D8A7;
}
.todo__text_ishow{
  text-decoration: line-through;
  color: gray;
}
.input{
    position: relative;
    top: 104px;
}
input[type="text"]{
    width: 100%;
    height: 58px;
    background: #fff;
    border: 1px solid #EEEEEE;
    border-radius: 8px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 110%;
    letter-spacing: 0.01em;
    font-feature-settings: 'liga' off;
    color: #B1BACB;
    z-index: 0;
}
.btn_add{
padding: 12px 24px;
width: 136px;
height: 44px;
background: #2D70FD;
border: 1px solid #2D70FD;
border-radius: 4px;
color: #fff;
font-family: 'Inter';
top: 8px;
right: 7px;
position: absolute;
z-index: 1;
cursor: pointer;
}
</style>
<script>
export default{
  data () {
    return {
      todo: "",
      todos: [],
      isdone: false,
      id: 0,
      count: 0,
    };
  },
methods: {
  addtodo() {
    this.todos.push({
      id: this.id,
      text: this.todo,
      iscomplete: this.isdone,
    })
   },
   removetodo() {
    this.todos.splice({
      id: this.id,
      text: this.todo,
      iscomplete: this.isdone,
    });
   }
 },
 
}
</script>