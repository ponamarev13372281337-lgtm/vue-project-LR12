<script>
export default{
    data(){
        return{
            city: "",
            error:""
        }
    },
    methods:{
        getWeather(){
            if(this.city.trim().length<2){
                this.error = "Введите коректное название города";
                return false;
            }

            this.error = "";
        }
    }

}
</script>

<template>
    <div class="wrapper">
        <h1>Погодное приложение</h1>
        <p>Узнать погоду в {{ city  == "" ? "в вашем городе" : "<" + city + ">"}}</p>
        <input type="text" v-model="city" placeholder="Введите ваш город">
        <button @click="getWeather()">Получить погоду</button>
        <p class="error">{{ error }}</p>
    </div>
</template>

<style scoped>
.error {
    color: red;
}

.wrapper{
    width: 900px;
    height: 500px;
    border-radius: 50px;
    padding: 20px;
    background: #1f0f24;
    text-align: center;
    color: white;
}

.wrapper h1{
    margin-top: 50px;
}

.wrapper p{
    margin-top: 20px;
}

.wrapper input{
    margin-top: 30px;
    background: transparent;
    border: 0;
    border-bottom: 2px solid #110813;
    color: white;
    font-size: 14px;
    padding: 5px 8px;
    outline: none;
}

.wrapper input:focus{
    border-bottom-color: purple;
}

.wrapper button{
    background-color: yellow;
    columns: #fff;
    border-radius: 10px;
    border: 2px solid #b99935;
    padding: 10px 15px;
    margin-left: 20px;
    cursor: pointer;
    transition: transform 500ms ease;
}

.wrapper button:hover{
    transform: scale(1.1) translateY(-5px);
}
</style>