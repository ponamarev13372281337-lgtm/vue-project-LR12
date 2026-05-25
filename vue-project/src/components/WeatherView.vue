<script>
export default{
    data(){
        return{
            city: "",
            error:"",
            weather: null,
            loading:false
        }
    },

    mounted(){
        this.getWeather();
    },

    methods:{
        getWeather(){
            // if(this.city.trim().length<2){
            //     this.error = "Введите коректное название города";
            //     this.weather = null;
            //     return false;
            // }

            this.error = "";
            this.loading=true;
            this.weather=null;

            fetch(`https://api.open-meteo.com/v1/forecast?latitude=56.50&longitude=84.97&current_weather=true`)
                .then(response => response.json())
                .then(data =>{
                    this.weather = data.current_weather.temperature;
                    this.loading = false;
                })
                .catch(err =>{
                    this.error ="Ошбика при совершении запроса к серверу!"
                    this.loading=false;
                });

            
        }
    }

}
</script>

<template>
    <div class="wrapper">
        <h1>Погодное приложение</h1>
        <p>Узнать погоду в {{ city  == "" ? "вашем городе" : "<" + city + ">"}}</p>
        <input type="text" v-model="city" placeholder="Введите ваш город">
        <button @click="getWeather()">Получить погоду</button>
        <p v-if="loading">Связь с метеостанцией....</p>
        <h2 v-if="weather !== null" class="watherInfo">Сейчас там: {{weather}}°C</h2>
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
    color: yellow;
    margin-top: 50px;
}

.wrapper p{
    margin-top: 20px;
}

.wrapper h2{
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



