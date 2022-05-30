export default {
    data() {
        return {
          isOpen: false,
        };
      },
    methods: {
        handlerOpen() {
            document.body.classList.add("fixed");
            this.isOpen = !this.isOpen;
            if (!this.isOpen) {
                document.body.classList.remove("fixed");
            }
        },
        handlerClose() {
            document.body.classList.remove("fixed");
            this.isOpen = false;
        },
    },
}