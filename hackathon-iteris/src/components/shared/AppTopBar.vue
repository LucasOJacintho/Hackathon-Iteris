<template>
    <div class="app-top-bar">
        <v-app-bar app color="rgba(247, 209, 29,224)">
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title app color="black">
        Início
      </v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer app fixed v-model="drawer" temporary>
      <v-list nav dense>
        <v-list-item-group v-model="group" active-class="green--text text--lighten-2">
            <router-link to="/">
                <v-list-item>
                    <v-list-item-icon>
                    <v-icon>mdi-home</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>
                    Início
                    </v-list-item-title>
                </v-list-item>
            </router-link>
            <router-link to = "/jogos">
                <v-list-item>
                    <v-list-item-icon>
                    <v-icon>mdi-google-controller</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>
                    Jogos
                    </v-list-item-title>
                </v-list-item>
            </router-link>
            <router-link to = "/animes">
                <v-list-item>
                    <v-list-item-icon>
                    <v-icon>mdi-youtube-tv</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>
                    Animes
                    </v-list-item-title>
                </v-list-item>
            </router-link>
            <router-link to = "/SetembroAmarelo">
                <v-list-item>
                    <v-list-item-icon>
                    <v-icon>mdi-account-heart-outline</v-icon>
                    </v-list-item-icon>
                    <v-list-item-title>
                    Setembro Amarelo
                    </v-list-item-title>
                </v-list-item>
            </router-link>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    </div>
</template>

<script>
export default {
    name: 'AppTopBar',
    data: () => ({
    drawer: false,
    group: null,
  }),
}
</script>

<style scoped>
    .app-top-bar a{
        text-decoration: none;
    }

</style>