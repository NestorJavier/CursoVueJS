let app = new Vue({//Instanciamos vue
    el: '#app',//Identificamos el container con el que se ha de trabajar con vue mediante su id="app"
    data:{//Data es una parte de vue, por lo tanto siempre debe llevar ese nombre
        titulo: 'Hola Mundo Con Vue',
        total: 0,
        nuevaFruta: '',
        frutas: [
                    {nombre: "pera", cantidad: 10},
                    {nombre: "platano", cantidad: 0},
                    {nombre: "manzana", cantidad: 11}
                ],
    },
    methods: {//Palabra reservada methods
        agregarFruta(){
            this.frutas.push({
                nombre: this.nuevaFruta, cantidad: 0
            })
        }
    },
    computed: {//Los computed son un arreglo
        sumarFrutas(){
            this.total = 0;
            for (const fruta of this.frutas) {//Este loop se va a ejecutar cada vez que se detecte un cambio en la cantidad
                this.total += fruta.cantidad;
            }
            return this.total;
        }
    },
})