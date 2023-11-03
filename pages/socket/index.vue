<template>
  <div>
    <button @click="sendMessage">Send Message</button>
    <ul>
      <li v-for="message in messages" :key="message.id">{{ message.text }}</li>
    </ul>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import io from "socket.io-client";

// const socket = io("http://localhost:4000");
const messages = ref([]);

const newMessage = () => {
  // socket.emit("newMessage", messages.value);
}

onMounted(() => {
  // socket.on("onMessage", (message) => {
  //   messages.value.push(message);
  // });
});

const sendMessage = () => {
  // socket.emit("message", { text: "Hello, Socket.IO!" });
};
</script>
