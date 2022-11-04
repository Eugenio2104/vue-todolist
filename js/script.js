/*
1 avere un elenco di task da fare o fatte
2 stamparli in pagina
3 al click del task fare il toggle del task fatto o meno(se ci clicco si barra)
4 al click della croce, eliminare il task se faatto, altrimenti scrivere un messaggio di errore
5 dopo aver scritto il task con invio o al click del bottone aggiungere il nuovo task (come non fatto) in cima all'elenco dei task
6 verificare la lunghezza minima del nuovo task
7 se l'elenco è vuoto, non mostare la lista ma mostrare il messaggio "non ci sono task"
*/

const { createApp } = Vue;

createApp({
  data(){
    return{
      logoImg: 'img/logo.png',
      tasks:[
        {
          text: 'fare la cena',
          done: true
        },
        {
          text: 'fare palestra',
          done: true
        },
        {
          text: 'fare la lavatrice',
          done: false
        },
      ]
    }
  },
  mounted(){
    console.log('montata');
  }
}).mount('#app')