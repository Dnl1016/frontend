const app = new Vue({
    el: '#listarDocu',

    data() {
        return {
            rutaBackend: 'http://localhost/redaliados/backend/public/',
            tiposDocumentos: []
        }
    },

    mounted() {
        this.gettiposDocumentos()
    },

    methods: {
        async gettiposDocumentos() {
            const res = await fetch(`${this.rutaBackend}tiposDocumentos`, {
                method: "GET",
                // headers: {
                //     'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxNiIsImp0aSI6IjY4OWFmNjg1NGRkYWMzY2JkNzM2ZjdlNWFmYzkwZjE0NDRkMzU4MDI2Y2RlZTAwNGFlMmZlMzZjMjhiYjEyOGU5YThmNDVhNDQ1YjE4NzdjIiwiaWF0IjoxNjY0OTc5ODY5Ljk4NTY3NCwibmJmIjoxNjY0OTc5ODY5Ljk4NTY3OSwiZXhwIjoxNjY0OTgwNDY5Ljk2ODM2Mywic3ViIjoiMiIsInNjb3BlcyI6W119.wxHiKAm_TCnsIeYB7lWOfBD5DxDsO_2s54kIdRdAiwq2_yeKIPbN3Mks_5b2LACbdh41iN3IHhXFkAiqzjNTw1u3CqRpadObsvtqOp0PXqbxcVoZxBDicb7-d0Bhd255nfzrUgJqUrhhFT7ae3Cz--ZFQ8iFSoXaRG0mFA1R10_9rsqI6CHfOW0HI3Wny-cX1IQEupGyCeUAGbx7nERLuqwXwk2HQLqLqlsIh6YgoUqeDvl-6r7pHeumyxOLWkNeIR8oikspH3PsfMMihuwVKKKqEHGjFWVjSclCqYXVRbwjAVuiggvZ0JL3o12QcA6PXwPpKHuLne2zqyKz0fr8F0oB7MqzjrN9CC7Cc8cqyLkusViKbdyVF9FOzD9iZbLXsvfp9nBY4gFHi6BbmAxQz8n0zqlrdzkKqz-_PKm9UXPUCx7wqWAtxwm0OavefENSreOaQrhf1c9NdV4MPP4YeJw09qTqeOJJsBhbPu8jhqemE2kkyAMNXu9iekoEbLBHnSETkApgGxkw2vaPIuPqmnWq__Ni1Pa3b3FO96hlq5HpmePfFgFtZRDujvig609eIBnUW-x6Cyl5ZlajzTOMo3ICTiNciDosg10vV3ufWx4KSNUdUE8mLFoxsikAljd-6NgTOvC6D97XsZhYk-_YhLfTmcB7YhDsluxARNetZEo'
                // }
            })
            const data = await res.json()
            this.tiposDocumentos = data.data
            console.log(data.data);
        }
    }

})