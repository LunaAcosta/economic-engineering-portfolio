<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from "vue-router";

const router = useRouter();
const routes = ref([]);

const getRoutes = () => {

  router.options.routes.forEach((route) => {
    routes.value.push({
      name: route.name,
      path: route.path,
    });
  });
};

onMounted(() => {
  getRoutes();
});
</script>
<template>
  <nav class="navbar navbar-expand-lg navbar-dark color-navbar  fixed-top">
    <div class="container">
      <a href="https://repositorio.cuc.edu.co/handle/11323/6766" class="navbar-brand" target="_blank"
        ><span class="text-warning">Ingeniería</span> Económica</a
      >
      <!-- Boton responsivo -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarS"
        aria-controls="navbarS"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarS">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item" v-for="route in routes" :key="route">
            <RouterLink :to="route.path" class="nav-link text-light">{{
              route.name
            }}</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.color-navbar {
  background: #030029;
}
</style>