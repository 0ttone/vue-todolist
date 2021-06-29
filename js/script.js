Vue.config.devtools = true;


/*Descrizione: Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.*/

const app = new Vue(
      {
          el: '#app',

          data: {
            toDoList:[
                  'uscire',
                  'spesa',
                  'posta',
                  'benzina',
                ],
                
            newTask:'',
          },

          methods: {
                //creiamo addTask semplicemente costruendo una funzione che 
                // usi il dato newTask pushandolo nell array todolist - non serve
                //altro alla funzione , abbiamo già dato immesso con input e array da popolare

                addTask: function (){
                      this.toDoList.push(this.newTask);
                      //con questa istruzione ripuliamo il campo di input
                      this.newTask = '';
                },

                  




      }

            

       } 
       );