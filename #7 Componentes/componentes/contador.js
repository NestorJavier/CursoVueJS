Vue.component('contador',{//Declaración de un componente de Vue
    //Cada componente creado debe estar dentro de el contenedor al que se hace referencia desde la instancia de Vue, que en este caso es #app 
    //template:'<h1>{{saludo}}</h1> <h3></h3>', podemos agregar mas elementos como el h3, pero al usar las comillas simples debemos agregar todos los elementos en una sola linea, para contrarestar esto se hace uso de los 
    //templates literales que son este otro tipo de comillas (``),
    //otra regla para usar componentes es que los elementos que conforman nnuestro componente simepre deben estar 
    //dentro de un elemento padre, en este caso usamos un div
    
    template:/*html*/
    `  <div>
            <h1>{{numero}}</h1>
            <button @click="numero++">+</button>
        </div>
    `, 
    data(){
        return  {
            numero: 0
        };//En este caso data es una función que regresa la información
    },
});