const app = {
    data() {
        return {
            pics: [{ Pname: "Mercedes-AMG Petronas F1", Dname: "Lewis Hamilton", img: 'https://images.unsplash.com/photo-1532906619279-a4b7267faa66?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2089&q=80', done: false, show: true },
            { Pname: "Red Bull Racing F1", Dname: "Daniel Ricardo", img: 'https://images.unsplash.com/photo-1503945839639-aea48daa250f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80', done: false, show: true },
            { Pname: "Scuderia Ferrari F1", Dname: "Sebastian Vettel", img: 'https://images.unsplash.com/photo-1590214074323-fd5649874bee?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80', done: false, show: true }],
            search: '',
            bigpic: {check:false,index:0}
        }
    },
    methods: {
        toggleDone(index) {
            this.pics[index].done = !this.pics[index].done
        },
        searching() {
            for (let i = 0; i < this.pics.length; i++) {
                if (this.pics[i].Pname.search(this.search) !== -1 || this.pics[i].Dname.search(this.search) !== -1) {
                    console.log(i)
                    this.pics[i].show = true
                }
                else {
                this.pics[i].show = false
                }
            }
        },
        check(index){
            if(index == -1){
                this.bigpic.check = false
            }
            else{
                this.bigpic.check = true
                this.bigpic.index = index
            }
        }
    },
    computed: {
        count() {
            return this.pics.length
        },
        countliked(){
            return this.pics.filter(p => p.done).length
        }
    }

}
Vue.createApp(app).mount('#app')