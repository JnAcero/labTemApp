<template>
  <nav class="navbar bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img
          src="../assets/logo.png"
          alt="Logo"
          width="60"
          class="d-inline-block"
        />
        <span> Laboratorio remoto de Temperatura </span>
      </a>
      <div class="nav-item">
      <img :src="photoUrl" alt="Foto de perfil" width="60px">
    </div>
    </div>
  </nav>
</template>

<script setup>
defineProps({
  photoUrl: String
})
</script>
