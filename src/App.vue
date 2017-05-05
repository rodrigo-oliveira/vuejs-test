<template>
  <div id="app">
    <main class="main">
      <header>
          <nav class="navbar navbar-default">
            <div class="container-fluid">
              <div class="center-element">
                <div class="navbar-header">
                    <a class="navbar-brand" href="#">Listando dados</a>
                </div>
                <ul class="nav navbar-nav">
                    <li>
                        <router-link to="/users">
                          Usuários<span class="sr-only"></span>
                        </router-link>
                    </li>
                    <li>
                        <router-link to="/albums">
                          Álbuns</span>
                        </router-link>
                    </li>
                </ul>
                  </div>
            </div>
          </nav>
      </header>
      <div class="center-element">
        <router-view></router-view>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
