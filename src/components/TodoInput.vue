<template>
    <div class="input">
    <input type="text" placeholder="Добавить новый элемент"/>
    <button class="btn_add">Добавить</button>

    </div>
</template>
<style>
body{
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