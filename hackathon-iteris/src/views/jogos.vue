<template>
    <v-container> 
        <h2 class= "text-h5 text-center mb-3 mt-5">Jogos</h2>
        <p> O Videogame ou game é uma disputa competitiva, executada no formato de um jogo eletrônico. O jogador permanece diante de um veículo que transmite as imagens do confronto lúdico, quase sempre uma TV ou o dispositivo de um computador. A seguir alguns exemplos: </p>
        <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th colspan="2" class="text">
            Genero
          </th>
          <th class="text">
            Nome
          </th>
          <th class="text">
            Foto
          </th>
          <th class="text">
            Plataforma
          </th>
          <th class="text">
            Ano
          </th>
          
        </tr>
      </thead>
      <tbody>
        <tr v-for="(jogo) of jogos" :key="jogo.id">
          <td>
              <v-avatar size="24">
                <img
                    :src="jogo.photo"
                    :alt="jogo.nome"
                >
                </v-avatar>
              <span class="pl-2">{{ clube.nome }}</span>
              </td>
          <td class="text-right">{{ clube.pontos }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
    </v-container>
    
</template>

<script>
export default {
    name: 'jogos',
    data () {
        return {
            jogo: []
        }
    },
    created () {
        fetch ('https://it3zxc-default-rtdb.firebaseio.com/lazer/jogos.json')
        .then(resposta => resposta.json())
        .then(json => {
            this.jogo = json;
            console.log (this.jogo);
        });
    }
}
</script>

<style scoped>

</style>
