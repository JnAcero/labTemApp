import { ref, reactive, computed } from "vue"
import experimentService from "@/services/experiment.service"
import { state } from "./user.module"

const experimentState = {
  experiments: ref([]),
  currentExperiment: reactive({
    /*{
      estado: [completado| enCurso | error],
      PIDparams: {Kp. Kd, Ki, tempRef }
    }
     */
  })
}
const expGetters = {
  getNumberExperiment: computed(() => {
    return experimentState.experiments.value.length
  })
}

const experimentActions = {
  createNewExperient: (params) => {
    try {
      const data = reactive({
        estado: 'enCurso',
        PIDParams: params
      })
      experimentState.currentExperiment = data
      experimentState.experiments.value.push(data)
      const uid = computed(() =>state.currentUser.value.uid )
      const numberExp = expGetters.getNumberExperiment.value
      experimentService.setParametersToExperiment(params,uid.value,numberExp)
    }
    catch(error){
      console.error(error)
      console.log("error en action de creacion de experimento")
    }
  }
}

export default {
  experimentState,
  experimentActions,
  expGetters
}