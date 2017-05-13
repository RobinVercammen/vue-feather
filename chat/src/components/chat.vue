<template>
    <form v-on:submit.prevent="submit">
        <ul>
            <li class="message" v-for="message in messages">
                {{ message.text }}
            </li>
        </ul>
        <input type="text" v-model="message" />
        <button type="submit">Send</button>
    </form>
</template>

<script>
export default {
    name: 'chat',
    computed: {
        messages() {
            return this.$store.state.messages;
        }
    },
    data() {
        return {
            message: '',
        }
    },
    methods: {
        submit() {
            this.$store.dispatch('addMessageAsync', {
                text: this.message,
                date: new Date()
            });
        }
    }
}

</script>