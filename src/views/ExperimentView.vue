<!-- <template>
<main>
  {{ temps }}
</main>
</template>

<script setup>
import experimentService from '@/services/experiment.service';
import { onMounted, computed } from 'vue';
import { state } from '@/modules/user.module';
import experimentModule from '@/modules/experiment.module';
import { ref } from 'vue';

const temps = ref(null)
const {expGetters} = experimentModule
const uid = computed(() => state.currentUser.value.uid)

onMounted(() => {
  temps.value = experimentService.readTemperatureFromDb(uid.value, expGetters.getNumberExperiment.value)
  console.log(temps.value);
})

</script> -->


<script>
import { ref, onMounted } from 'vue'
import { db } from '@/firebase/firebase'; // Asegúrate de importar tu instancia de Firebase
import { onValue } from 'firebase/database'

export default {
  setup() {
    const data = ref(null) // Crea una referencia reactiva para los datos

    onMounted(() => {
      const starCountRef = ref(db, 'UserData/'+'cBxm5aRTARZUedKvDNFJitLrCZJ3'+'/Valores_Referencia/'+'Experimento'+1)
      onValue(starCountRef, (snapshot) => {
        data.value = snapshot.val() // Actualiza la referencia reactiva con los nuevos datos
      })
    })

    return {
      data // Devuelve la referencia reactiva para usarla en tu plantilla
    }
  }
}
</script>
<template>
  <main>
    {{ data }}
  </main>
</template>
