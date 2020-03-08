let app = new Vue({//Cuando instanciamos VUE, llama a una función llamada BeforeCreate
    el: '#app',//
    data:{
        saludo: 'Soy el ciclo de vida de Vue',
    },
    methods: {
        destruir(){
            this.$destroy();
        }
    },
    beforeCreate(){//Se ejecuta en el momento en el que se instancia Vue
        console.log('beforeCreate');
    },
    created(){//Al crear los metodos, observadores y eventos, pero aun no accede al DOM, al "el"
        console.log('created');
    },
    beforeMount(){//Se ejecuta antes de acceder al DOM
        console.log('beforeMount');
    },
    mounted(){//Se ejecuta al acceder al DOM
        console.log('mounted');
    },
    beforeUpdate(){//Se ejecuta al detectar un cambio
        console.log('beforeUpdate');
    },
    updated(){//Despues de realizados los cambios
        console.log('updated');
    },
    beforeDestroy(){//Antes de destruir la instancia
        console.log('beforeDestroy');
    },
    destroyed(){//Cuando se destruye toda la instancia
        console.log('destroyed');
    }
});