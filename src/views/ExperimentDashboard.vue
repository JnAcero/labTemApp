<script setup>
import { ref } from "vue";
const showForm = ref(false);
import experimentModule from "@/modules/experiment.module";
import { useRouter } from "vue-router";

const router = useRouter()

const {experimentActions} = experimentModule
//PID Parameter
const Kp = ref(0)
const Kd = ref(0)
const Ki = ref(0)
const tempRef = ref(0)

const openForm = () => {
  showForm.value = true;
};

const sendParameters = () => {
  const data = {
    Kp: Kp.value,
    Kd: Kd.value,
    Ki: Ki.value,
    tempRef: tempRef.value
  }
  experimentActions.createNewExperient(data)
  router.push('/viewExperimentChart')

}
</script>

<template>
  <main>
    <h1>Hello this is the experiment dashboard</h1>
    <section class="container row">
      <aside class="col-md-3"></aside>
      <main class="col-md-9 h-100">
        <h2>Mis experimentos</h2>
        <button class="btn btn-primary" @click="openForm">
          Agregar experimento
        </button>
        <section class="container h-100 mt-5">
          <form action="" v-if="showForm">
            <div class="mb-3">
              <label for="Kd" class="form-label"><strong>Temperatura de referencia</strong></label>
              <input
                v-model="tempRef"
                type="number"
                class="form-control"
                id="Kd"
                placeholder="Temperatura de referencia"
              />
            </div>
            <div class="mb-3">
              <label for="Kp" class="form-label"><strong>Kp</strong></label>
              <input
                v-model="Kp"
                type="number"
                class="form-control"
                id="Kp"
                placeholder="Control proporcional"
              />
            </div>
            <div class="mb-3">
              <label for="Kd" class="form-label"><strong>Kd</strong></label>
              <input
                v-model="Kd"
                type="number"
                class="form-control"
                id="Kd"
                placeholder="Control derivativo"
              />
            </div>
            <div class="mb-3">
              <label for="Ki" class="form-label"><strong>Ki</strong></label>
              <input
                v-model="Ki"
                type="number"
                class="form-control"
                id="Ki"
                placeholder="Control integral"
              />
              <button
                type="button"
                class="btn btn-primary"
                @click.prevent="sendParameters"
              >
                Enviar al laboratorio
              </button>
            </div>
          </form>
        </section>
      </main>
    </section>
  </main>
</template>
