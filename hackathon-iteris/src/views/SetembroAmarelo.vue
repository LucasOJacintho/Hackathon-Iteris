<template>
    <v-container class="setembro-amarelo">
        <h2>Setembro Amarelo</h2>
        <v-img class="inicio-imagem mb-4" src="https://th.bing.com/th/id/R.688954d8a406af7a50c525fd21a62579?rik=BI4sBOKtdD5FGA&pid=ImgRaw&r=0" />
        <hr/>
        <v-p class="mt-2">
            Pensamos nosso app para lhe fornecer algumas ideias de como se divertir praticando o isolamento social, mas se ainda assim
            você achar que não está bem, não deixe de <strong>pedir ajuda!</strong>
        </v-p>
        <v-simple-table>
            <template v-slot:default>
            <thead>
                <tr>
                <th colspan="2" class="text-left text-center">Referências Externas</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="referencia of referencias" :key="referencia.id">

                    <h3> {{ referencia.nome }} </h3>
                    <v-img class="inicio-imagem mb-5" :src="referencia.imagem">
                    </v-img>
                    <span class="pl-2">{{ referencia.descrição }}</span>

                </tr>
            </tbody>
            </template>
        </v-simple-table>
    </v-container>


</template>

<script>
export default {
    name: 'SetembroAmarelo',
    data() {

        return {
            referencias: []
        }
        
    },

    created() {
        fetch('https://it3zxc-default-rtdb.firebaseio.com/setembroamarelo.json')
            .then(response => response.json())
            .then(json => {
                this.referencias = json;
            })
    }
}
</script>

<style scoped>


</style>
