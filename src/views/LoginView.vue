<script setup>
import { auth } from "@/firebase/firebase";
import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signInWithEmailAndPassword,
  getAuth
} from "firebase/auth";
import { computed, onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import userModule from "@/modules/user.module";
const router = useRouter()

const { actions, state } = userModule
const loginState = computed(() => state.loginState.value)
const loginNormal = ref(false)
const email = ref("");
const password = ref("");

async function handleClick() {
  const googleProvider = new GoogleAuthProvider();
  await signInWithGoogle(googleProvider);
}

async function signInWithGoogle(googleProvider) {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    console.log(res);
  } catch (error) {
    console.error(error);
  }
}

function handleAuthStateChanged(user) {
  if (user) {
    const userData = {
      userName: user.displayName,
      uid: user.uid,
      photoURL: user.photoURL
    }
    actions.setCurrentUser(userData)
    router.push('/home')
  } else {
    actions.setLoginState(4)
    console.log("No hay nadie autenticado");
  }
}
function login() {
  loginNormal.value = true
}
function registrarse() {
  const auth = getAuth();
        signInWithEmailAndPassword(auth, email.value, password.value)
        .then((data) => {
            console.log("Successfully registered");
            router.push('/home');
        })
        .catch((error) => {
            alert(error.message);
        });
}
onMounted(() => {
  console.log("Loginnnn");
  actions.setLoginState(1);
  onAuthStateChanged(auth, handleAuthStateChanged);
});
</script>

<template>
  <main class="container">
    <template v-if="loginState === 1">
      <h3> Loading ...</h3>
    </template>
    <template v-else-if="loginState === 3">
      <h3>Estas autenticado pero no registrado</h3>
    </template>
    <template v-else>
      <button @click="handleClick" class="btn btn-primary">
      Login con Google
    </button>
    <button @click="login">Login</button>
    </template>
    <div v-if="loginNormal">
      <label for="">Correo</label>
      <input type="text" v-model="email">
      <br>
      <label for="">Contraseña</label>
      <input type="password" v-model="password">
      <button @click="registrarse">Entrar</button>
    </div>
  </main>
</template>
