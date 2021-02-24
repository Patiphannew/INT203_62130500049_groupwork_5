app.component('photo-item', {
    props: {
        pics: Array,
        bigpic: Array,
    },
    template:
        /*html*/
        `<div :class="[!bigpic.check ? 'w-full' : 'w-1/3']">
        <div :class="[!bigpic.check ? 'flex justify-center mx-auto py-4' : 'flex justify-end py-5']"
            v-for="(pic,index) in pics" v-show="pic.show">
            <div class="p-4 bg-gray-200 rounded-xl max-w-lg hover:shadow">
                <div class="flex justify-between w-full "> <img v-bind:src="pic.img" class="cursor-pointer"
                        @click="check(index)" width="400" class="rounded-lg">
                    <div class="ml-2 cursor-pointer" @click="toggleDone(index)">
                        <div class="p-3">
                            <h3 class="text-2xl">{{pic.Pname}}</h3> <span>{{pic.Dname}}</span>
                            <i v-show="pic.done" class="material-icons text-2xl ml-14 text-red-500">favorite</i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
        `,
    data() {
        return {
        }
    },
    methods: {
        toggleDone(index) {
            this.pics[index].done = !this.pics[index].done
        },
        check(index) {
            this.$emit('check-img', index)
        }
    },
})