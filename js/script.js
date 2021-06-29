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
                this.autofocus();
          },



          methods: {
                  //riduciamo a funzione per sfruttarlo dopo ogni inserimento o cancellazione
                  autofocus: function (){
                        const element = document.getElementById('newTaskElement');
                element.focus();
                  },



                //creiamo addTask semplicemente costruendo una funzione che 
                // usi il dato newTask pushandolo nell array todolist - non serve
                //altro alla funzione , abbiamo già dato immesso con input e array da popolare

                addTask: function (){
                      this.toDoList.push(this.newTask);
                      //con questa istruzione ripuliamo il campo di input
                      this.newTask = '';
                      this.autofocus();
                },

            //     creiamo la funzione deleteTask sfruttando splice e
            //    la possiblilità di agire sul dato index sfruttando 
                  deleteTask: function (index){
                        console.log(index)
                        //non è necessario assegnarla si autodichiara
                        //splice agisce sull originale come push 

                        //come taglia, vediamo gli argomenti?
                        //a: start (indexnel nsotro caso), 
                        //b: quanti elementi cancello a partire da start
                        //senza b mi ridà l array tagliato dal punto indicato in start 
                        this.toDoList.splice(index, 1)
                        this.autofocus();
                  },


                  




      }

            

       } 
       );