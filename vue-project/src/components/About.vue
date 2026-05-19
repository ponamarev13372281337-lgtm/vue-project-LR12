<template>
    <div class = "wrapper">
        <h1>О проекте</h1>
        <p class = "description">
            Данное приложение разработано с помощью фреймворка Vue3.
        </p>
        <div class="features">
            <h3>Что я использовал: </h3>
            <ul>
                <li>Vue3</li>
                <li>Vue Router 4</li>
                <li>Scoped Стили</li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
.wrapper{
    width: 900px;
    height: 500px;
    border-radius: 50px;
    padding: 40px;
    background: #1f0f24;
    text-align: center;
    color: white;
}

.wrapper h1{
    margin-top: 30px;
    color: yellow;
}

.wrapper p{
  margin-top: 30px;
  font-size: 18px;
  line-height: 1.6;  
}

.features{
    margin-top: 40px;
    text-align: left;
    display: inline-block;
}

.features h3 {
    color: rgb(214, 59, 214);
    margin-bottom: 10px;
}

ul{
    list-style-type: square;
    padding-left: 20px;
}

li{
    margin-bottom: 8px;
}

</style>