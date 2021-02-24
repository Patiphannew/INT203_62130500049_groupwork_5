app.component('photo-view', {
    props: {
        pics: Array,
        bigpic: Array,
    },
    template:
        /*html*/
        `<div class="w-2/3 my-auto " v-show="bigpic.check">
        <div class="flex justify-end"><i class="material-icons  text-5xl mb-6 mr-3 cursor-pointer"
                @click="check(-1)">highlight_off</i></div>
        <img class="w-10/12 mx-auto" v-bind:src="pics[bigpic.index].img">
    </div>
        `,
    data() {
        return {
        }
    },
    methods: {
        check(index) {
            this.$emit('check-img', index)
        }
    },
})