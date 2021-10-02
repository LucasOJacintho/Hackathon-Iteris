<template>
    <v-container> 
        <h2>Jogos</h2>
        <p class="mt-2"> O Videogame ou game é uma disputa competitiva, executada no formato de um jogo eletrônico. O jogador permanece diante de um veículo que transmite as imagens do confronto lúdico, quase sempre uma TV ou o dispositivo de um computador. A seguir alguns exemplos: </p>
        
    
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
