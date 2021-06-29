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


          mounted () {
                const element = document.getElementById('newTaskElement');
                element.focus();
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

            //     creiamo la funzione deleteTask sfruttando splice e
            //    la possiblilità di agire sul dato index sfruttando 
                  deleteTask: function (index){
                        console.log(index)
                        //non è necessario assegnarla si autodichiara
                        //splice agisce sull originale come push 
                        this.toDoList.splice(index, 1)
                  }


                  




      }

            

       } 
       );