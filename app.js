const app = Vue.createApp({
  data() {
    return {
      url: "https://developer.mozilla.org/en-US/docs/Web/API/Element/dblclick_event",
      showBooks: true,
      books: [
        {
          title: "Name of the Wind",
          author: "Patrick Rothfuss",
          isFav: true,
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOhG5b8J6j2wDkN_mLnxSEGShCfUui1LEuZA&s",
        },
        {
          title: "Way of Kings",
          author: "Brandon Sanderson",
          isFav: true,
          image:
            "https://img.freepik.com/free-vector/minimalist-book-cover-template_23-2148899519.jpg?semt=ais_hybrid&w=740",
        },
        {
          title: "The Final Empire",
          author: "Brandon Sanderson",
          isFav: true,
          image:
            "https://static.vecteezy.com/system/resources/previews/022/159/444/non_2x/book-cover-green-thick-booklet-design-old-classic-book-cover-design-vector.jpg",
        },
      ],
      x: 0,
      y: 0,
    };
  },
  methods: {
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
    handleEvent(event, second) {
      console.log(event.type, second);
    },
    handleMousemove(event) {
      this.x = event.offsetX;
      this.y = event.offsetY;
    },
    toggleFav(book) {
      book.isFav = !book.isFav
    }
  },
  computed: {
    filteredBooks() {
      return this.books.filter((book) => book.isFav)
    }
  }
});

app.mount("#app");
