<template>
    <v-container class="animes">
        <h2>Lista de Animes</h2>
        <v-img class="inicio-imagem mb-4" src="https://observatoriodeseries.uol.com.br/wp-content/uploads/2021/05/confira-agora-os-25-melhores-animes-que-ja-foram-criados-1.jpg" />
        <hr/>
        <p><v-p class="mt-2">
            O termo é abreviado da palavra “animação” em japonês, que se refere a qualquer animação. Geralmente, toda animação japonesa, ou boa parte delas, também possui uma versão em mangá (quadrinhos japoneses). Uma das características mais marcantes das animações japonesas, são os olhos dos personagens. Nosso app traz uma lista de animes para assistir e garantir o entreterimento na pandemia. <strong>Confira já!</strong>
        </v-p></p>
        <v-simple-table>
            <template v-slot:default>
            <thead>
                <tr>
                </tr>
            </thead>
            <tbody>
                <tr v-for="referencia of referencias" :key="referencia.id">
                    <center>
                    <div id="classeAnime">
                    <span class="pl-1">{{ referencia.name }}</span>
                
                    <v-img class="inicio-imagem mb-5" :src="referencia.photo">
                    </v-img>
                    <h5>{{ referencia.genre }}</h5>
                    <br>
                    <h5>{{ referencia.status }}</h5>
                    <br>
                    <p><span class="pl-2">{{ referencia.description }}</span></p>
                    <hr>
                    <br>
                    </div>
                    </center>
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
        fetch('https://it3zxc-default-rtdb.firebaseio.com/lazer/animes.json')
            .then(response => response.json())
            .then(json => {
                this.referencias = json;
            })
    }
}
</script>

<style scoped>


</style>


<style scoped>
    .Inicio h1{
        color:black;
    }
    p {
        text-align: justify;
        padding: 0 10px;
    }
    #classeAnime {
        max-width: 85vw;
        margin: 5px;
    }
    h5 {
        text-align: left;
    }
</style>