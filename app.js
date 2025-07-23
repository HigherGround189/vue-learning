const app = Vue.createApp({
  data() {
    return {
      showBooks: true,
      books: [
        {title: "Name of the Wind", author: "Patrick Rothfuss"},
        {title: "Way of Kings", author: "Brandon Sanderson"},
        {title: "The Final Empire", author: "Brandon Sanderson"},
      ]
    }
  },
  methods: {
    toggleShowBooks() {
      this.showBooks = !this.showBooks
    },
    handleEvent(event, second) {
      console.log(event.type, second)
    },
    handleMousemove(event) {
      this.x = event.offsetX
      this.y = event.offsetY
    }
  }
})

app.mount("#app")