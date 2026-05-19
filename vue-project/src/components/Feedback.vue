<script>
export default {
    data(){
        return{
            email: "",
            message: "",
            sent: false,
            error:""
        }
    },
    methods:{
        sendFeedback(){
            if(this.message.trim().length<2){
                this.error="Введите полное сообщение!";
                return false;
            }
            if(this.email.trim().length<5 || !this.email.includes('@')){
                this.error="Введите коректный  Email!";
                return false;
            }
            this.error="";

            
            this.sent = true;
            this.email = "";
            this.message = "";
        }
    }
}
</script>

<template>
    <div class = "wrapper">
        <h1>Обратная связь</h1>
        <div v-if="!sent" class="form">
            <input type="email" v-model="email" placeholder="Ваш Email">
            <input type="text" v-model="message" placeholder="Ваше сообщение">
            <button @click="sendFeedback()">Отправить</button>
            <p v-if="error" class="error">{{ error }}</p>
        </div>
        <div v-else class="msg">
            <h2>Спасибо за обратную связь!</h2>
            <p>Ваше сообщение успешно отправлено</p>
            <button @click="sent = false"> Написать еще раз</button>
        </div>
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
    padding: 40px;
    background: #1f0f24;
    text-align: center;
    color: white;
}

.wrapper h1{
    margin-top: 30px;
    color: yellow;
}

.wrapper h2{
    margin-top: 10px;
    margin-bottom: 10px;
    color:white;
}

.wrapper p{
    margin-top: 10px;
    margin-bottom: 10px;
    color: gray;
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
    margin-top: 10px;
    cursor: pointer;
    transition: transform 500ms ease;
}

.wrapper button:hover{
    transform: scale(1.1) translateY(-5px);
}
</style>