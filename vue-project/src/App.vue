<template>
    <div class="container">
        <nav class="nav-menu">
            <router-link to="/" class="link" >Главная</router-link>
            <router-link to="/about" class="link">О проекте</router-link>
            <router-link to="/feedback" class="link">Обратная связь</router-link>
        </nav>
        <router-view/>
    </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.nav-menu {
  margin-bottom: 30px;
  background: rgba(31, 15, 36, 0.9);
  padding: 15px 30px;
  border-radius: 20px;
}

.link {
  color: white;
  text-decoration: none;
  font-family: sans-serif;
  font-weight: bold;
  margin: 0 15px;
  font-size: 16px;
  transition: color 0.3s ease;
}

.link:hover {
  color: yellow;
}

.router-link-exact-active {
  color: yellow;
  border-bottom: 2px solid yellow;
  padding-bottom: 4px;
}
</style>