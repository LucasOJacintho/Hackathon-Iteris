<template>
    <v-container> 
        <h2 class= "text-h5 text-center mb-3 mt-5">Jogos</h2>
        <p> O Videogame ou game é uma disputa competitiva, executada no formato de um jogo eletrônico. O jogador permanece diante de um veículo que transmite as imagens do confronto lúdico, quase sempre uma TV ou o dispositivo de um computador. A seguir alguns exemplos: </p>
        <ul>
            <li>

            </li>
        </ul>
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
        .then(resposta => resposta.json())
        .then(json => {
            this.jogos = json;
            console.log (this.jogos);
        });
    }
}
</script>

<style scoped>

</style>
