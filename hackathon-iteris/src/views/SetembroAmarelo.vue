<template>
    <v-container class="setembro-amarelo">
        <h2>Setembro Amarelo</h2>
        <hr/>
        <p class="mt-2">
            Pensamos nosso app para lhe fornecer algumas ideias de como se divertir praticando o isolamento social, mas se ainda assim
            você achar que não está bem, não deixe de <strong>pedir ajuda!</strong>
        </p>
    </v-container>


</template>

<script>
export default {
    name: 'SetembroAmarelo',
    data() {

        return {
            referenciasSA: []
        }
        
    },

    created() {
        fetch('https://it3zxc-default-rtdb.firebaseio.com/setembroamarelo.json')
            .then(response => response.json)
            .then(json => {
                this.referenciaSA = json;
            })
    }
}
</script>

<style scoped>
</style>
