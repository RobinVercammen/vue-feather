<template>
    <li class="message-list-item">
        <h5 class="message-author-name">{{ message.authorName }}</h5>
        <time class="message-time">{{ message.timestamp | time }}</time>
        <p class="message-text">{{ message.text }}</p>
    </li>
</template>

<script>
export default {
  name: 'Message',
  props: {
    message: Object
  }
}
</script>