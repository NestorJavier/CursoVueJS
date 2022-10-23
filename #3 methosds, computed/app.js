let app = Vue.createApp({//Instanciamos vue
    data: function () {//Data es una parte de vue, por lo tanto siempre debe llevar ese nombre
        return {
            titulo: 'Hola Mundo Con Vue',
            total: 0,
            nuevaFruta: '',
            frutas: [
                { nombre: "pera", cantidad: 10 },
                { nombre: "platano", cantidad: 0 },
                { nombre: "manzana", cantidad: 11 }
            ]
        }
    },
    methods: {//Palabra reservada methods
        agregarFruta() {
            this.frutas.push({
                nombre: this.nuevaFruta, cantidad: 0
            })
        }
    },
    computed: {//Los computed son un arreglo
        sumarFrutas() {
            this.total = 0;
            for (const fruta of this.frutas) {//Este loop se va a ejecutar cada vez que se detecte un cambio en la cantidad
                this.total += fruta.cantidad;
            }
            return this.total;
        }
    },
})
app.component('login-form',
        {
            template:`
                <form @submit.prevent="handleSubmit">
                    <h1>{{ title }}<h1/>
                    <custom-input v-model:label="emailLabel"/>
                    <custom-input :label="passwordLabel"/>
                    <button>Log In<button>
                <form/>
            `,
            components:['custom-input'],
            data(){
                return {
                    title: 'Login Form',
                    email: '',
                    password: '',
                    emailLabel: 'Email',
                    passwordLabel: 'Password'
                }
            },
            methods:{
                handleSubmit(){
                    console.log(this.email, this.password)
                }
            }
        }
    )

    app.component('custom-input',
        {
            template:`
                <label>
                    {{ label }}
                    <input type="text" v-model="inputValue"/>
                <label/>
            `,
            props:['label'],
            computed:{
                get(){

                },
                set(){

                }
            }
            /* data(){
                return{inputValue:''}
            } */
        }
    )
app.mount('#app')