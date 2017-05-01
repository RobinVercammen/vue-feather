<template>
    <div>
        <form v-on:submit.prevent="submit">
            <div v-for="m in messages">
                <p>{{m.text}}</p>
                <br>
            </div>
            <input type="text" name="text" v-model="message" />
            <button>Zender</button>
        </form>
    </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
    name: 'chat',
    computed: {
        ...mapState(['messages'])
    },
    data() {
        return {
            message: '',
        }
    },
    created() {
        // commit vs dispatch
        this.$store.dispatch('getMessagesAsync');
    },
    methods: {
        submit(ev) {
            const text = this.message;
            const date = new Date();
            this.$store.dispatch('addMessageAsync', { text, date });
        }
    }
}

</script>