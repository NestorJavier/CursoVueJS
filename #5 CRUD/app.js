let app = new Vue({//Instanciamos vue
    el: '#app',//Identificamos el container con el que se ha de trabajar con vue mediante su id="app"
    data:{//Data es una parte de vue, por lo tanto siempre debe llevar ese nombre
        titulo:'GYM con Vue',
        tareas: [],
        nuevaTarea: '',
    },
    methods: {//Palabra reservada methods
        agregarTarea: function() {
            console.log('Diste click ', this.nuevaTarea);
            this.tareas.push({
                nombre: this.nuevaTarea,
                estado: false,
            });
            console.log(this.tareas);
            this.nuevaTarea = '';

        },
        editarTarea: function(index) {
            console.log('Editar '+ index);
            this.tareas[index].estado = true;
        },
        eliminarTarea: function(index) {
            this.tareas.splice(index, 1);
        },
    },
    computed: {//Los computed son un arreglo
       
    },
})