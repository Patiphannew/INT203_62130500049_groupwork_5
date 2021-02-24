app.component('photo-search', {
    props: {
        pics:Array,
    },
    template:
        /*html*/
        `<i class="material-icons text-right text-4xl mr-32 mt-4  cursor-pointer " v-show="!showsearch"
        @click="changSearch">search</i>
    <div v-show="showsearch" class="mt-5 flex items-center justify-between bg-black text-white h-10">
        <div class="">
            <input
                class="ml-2 p-1 w-80 placeholder-gray-500 placeholder-opacity-50 focus:outline-none text-black rounded-sm"
                type="text" placeholder="Please enter text for searching photos" v-model="search"
                @keyup.enter="searching">
            <button class="ml-2 p-1 rounded-sm focus:outline-none bg-blue-500" @click="changSearch">Cancel</button>
        </div>
        <div>
            <p> Number of Photos: ({{count}})<span class="mx-2 text-lg"></span>
            </p>
        </div>
    </div>
        `,
    data() {
        return {
            search: '',
            showsearch: false,
        }
    },
    methods: {
        changSearch() {
            this.showsearch = !this.showsearch;
            this.search = '';
        },
        searching() {
            for (let i = 0; i < this.pics.length; i++) {
                if (this.pics[i].Pname.toUpperCase().search(this.search.toUpperCase()) !== -1 || this.pics[i].Dname.toUpperCase().search(this.search.toUpperCase()) !== -1) {
                    console.log(i)
                    this.pics[i].show = true
                }
                else {
                    this.pics[i].show = false
                }
            }
        },
    },
    computed: {
        count() {
            return this.pics.length
        },
    }
})