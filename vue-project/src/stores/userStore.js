import { defineStore } from "pinia";

export const useUserStore = defineStore('user',{
    state:()=>({
        name:'Даниил',
        email:'7000pas@gmail.com',
        role:'Студент'
    }),

    getters:{
        statusInfo:(state)=>{
            return state.name +' (' + state.role + ')';
        }
    },

    actions:{
        updateEmail (newEmail){
            this.email=newEmail
        },
    },
})