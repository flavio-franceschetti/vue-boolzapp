const { createApp } = Vue;

createApp({
  data() {
    return {
      selectedContactIndex: 0,
      newMessage: "",
      search: "",
      extractedTime: "",
      contacts: [
        {
          name: "Michele",
          avatar: "./image/1.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Hai portato a spasso il cane?",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Ricordati di stendere i panni",
              status: "sent",
            },
            {
              date: "10/01/2020 16:15:22",
              message: "Tutto fatto!",
              status: "received",
            },
          ],
        },
        {
          name: "Fabio",
          avatar: "./image/2.jpg",
          visible: true,
          messages: [
            {
              date: "20/03/2020 16:30:00",
              message: "Ciao come stai?",
              status: "sent",
            },
            {
              date: "20/03/2020 16:30:55",
              message: "Bene grazie! Stasera ci vediamo?",
              status: "received",
            },
            {
              date: "20/03/2020 16:35:00",
              message: "Mi piacerebbe ma devo andare a fare la spesa.",
              status: "sent",
            },
          ],
        },
        {
          name: "Samuele",
          avatar: "./image/3.jpg",
          visible: true,
          messages: [
            {
              date: "28/03/2020 10:10:40",
              message: "La Marianna va in campagna",
              status: "received",
            },
            {
              date: "28/03/2020 10:20:10",
              message: "Sicuro di non aver sbagliato chat?",
              status: "sent",
            },
            {
              date: "28/03/2020 16:15:22",
              message: "Ah scusa!",
              status: "received",
            },
          ],
        },
        {
          name: "Alessandro B.",
          avatar: "./image/4.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Lo sai che ha aperto una nuova pizzeria?",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Si, ma preferirei andare al cinema",
              status: "received",
            },
          ],
        },
        {
          name: "Alessandro L.",
          avatar: "./image/5.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Ricordati di chiamare la nonna",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Va bene, stasera la sento",
              status: "received",
            },
          ],
        },
        {
          name: "Claudia",
          avatar: "./image/6.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Ciao Claudia, hai novità?",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Non ancora",
              status: "received",
            },
            {
              date: "10/01/2020 15:51:00",
              message: "Nessuna nuova, buona nuova",
              status: "sent",
            },
          ],
        },
        {
          name: "Federico",
          avatar: "./image/7.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Fai gli auguri a Martina che è il suo compleanno!",
              status: "sent",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "Grazie per avermelo ricordato, le scrivo subito!",
              status: "received",
            },
          ],
        },
        {
          name: "Davide",
          avatar: "./image/8.jpg",
          visible: true,
          messages: [
            {
              date: "10/01/2020 15:30:55",
              message: "Ciao, andiamo a mangiare la pizza stasera?",
              status: "received",
            },
            {
              date: "10/01/2020 15:50:00",
              message: "No, l'ho già mangiata ieri, ordiniamo sushi!",
              status: "sent",
            },
            {
              date: "10/01/2020 15:51:00",
              message: "OK!!",
              status: "received",
            },
          ],
        },
      ],
    };
  },
  methods: {
    // metodo per la selezione dei contatti attraverso l'index
    selectedContact(index) {
      this.selectedContactIndex = index;
    },
    // metodo per l invio del nuovo messaggio e la risposta automatica
    newMessageSend(index) {
      if (this.newMessage.length > 0) {
        // creo una variabile dove inserisco la data e l ora locale corrente per inserirla nei nuovi messaggi
        const currentDate = luxon.DateTime.now().toFormat(
          "dd/MM/yyyy HH:mm:ss"
        );
        const messageSent = this.newMessage;
        this.contacts[index].messages.push({
          date: currentDate,
          message: messageSent,
          status: "sent",
        });
        this.newMessage = "";

        setTimeout(() => {
          this.contacts[index].messages.push({
            date: currentDate,
            message: "ok",
            status: "received",
          });
        }, 1000);
      }
    },

    // funzione per la ricerca dei contatti
    searching() {
      this.contacts.forEach((contact) => {
        // se il nome include le lettere digitate in search collegato all'input allora visible diventa true altrimenti è false e con v-show lo vado a mostrare o no
        if (contact.name.toLowerCase().includes(this.search.toLowerCase())) {
          contact.visible = true;
        } else {
          contact.visible = false;
        }
      });
    },

    // Funzione per ottenere solo l'orario dalla data
    getTimeFromDate(dateString) {
      // Usa Luxon per fare il parsing della stringa
      const dt = luxon.DateTime.fromFormat(dateString, "dd/MM/yyyy HH:mm:ss");
      // Restituisci solo l'orario formattato
      return dt.toFormat("HH:mm");
    },
  },
}).mount("#app");
