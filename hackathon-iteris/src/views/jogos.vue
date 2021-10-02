<template>
    <v-container> 
        <h2>Jogos</h2>
        <p class="mt-2"> O Videogame ou game é uma disputa competitiva, executada no formato de um jogo eletrônico. O jogador permanece diante de um veículo que transmite as imagens do confronto lúdico, quase sempre uma TV ou o dispositivo de um computador. A seguir alguns exemplos: </p>
        <v-simple-table>
            <template v-slot:default>
            <thead>
                <tr>
                <th colspan="2" class="text-left text-center"></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="jogo of jogos" :key="jogo.id">

                    <div id="referencias"> 

                    <h3> {{ jogo.name }} </h3>
                    <h3> {{ jogo.genre}} </h3>
                    <v-img class="inicio-imagem mb-5" :src="jogo.photo">
                    </v-img>
                    <span class="pl-2">{{ jogo.platform }}</span>
                    <h3> {{ jogo.year }} </h3>
                    <hr/>
                    </div>

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
            jogos: []
        }
    },
    created () {
        fetch ('https://it3zxc-default-rtdb.firebaseio.com/lazer/jogos.json')
        .then(response => response.json())
        .then(json => {
            this.jogos = json;
        });
    }
}
</script>

<style scoped>
#referencias {
max-width: 85vw;
margin: 5px;
border: 2px;
} 
 
 


</style>
