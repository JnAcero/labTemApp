import { db } from "@/firebase/firebase";
import { ref, set,onValue  } from "firebase/database";

function setParametersToExperiment({Kp,Kd,Ki,tempRef},uid,numberExp) {
  try {
    set(ref(db, 'UsersData/'+uid+'/Valores_Referencia/'+'Experimento'+numberExp),{
      Kp,
      Kd,
      Ki,
      temperaturaReferencia: tempRef
    })
  } catch (error) {
    console.log(error)
    throw new Error("Error enciando a firebase")
  }
}

function readTemperatureFromDb(uid, numberExp) {
  const starCountRef = ref(db, 'UsersData/'+uid+'/Muestras_Temperatura/'+'Experimento'+numberExp);
  onValue(starCountRef, (snapshot) => {
  const data = snapshot.toJSON();
  console.log(data);
  return data
});
}

export default {
  setParametersToExperiment,
  readTemperatureFromDb
}