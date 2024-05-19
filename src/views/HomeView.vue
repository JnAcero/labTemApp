<script setup>
import { onMounted,computed } from 'vue';
import NavbarC from '@/components/NavbarC.vue';
import userModule from '@/modules/user.module';
import { useRouter } from 'vue-router';

const router = useRouter()

const {state} = userModule

const username = computed(() => state.currentUser.value.userName)
const photoUrl = computed(() => state.currentUser.value.photoURL)

function handleClick() {
  router.push('/experimentDashboard')
}

onMounted(() => {
  console.log("Home mounted");
  console.log(state.currentUser.value);
})

</script>

<template>
  <main>
    <NavbarC :photo-url="photoUrl"></NavbarC>
    <h2>Bienvenido {{ username }}</h2>
    <section>
      <button @click="handleClick">Empezar experimento</button>
    </section>
  </main>
</template>
