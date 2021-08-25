<template>
    <div class="home">
        Home page
        <button v-on:click="getData()">Get data</button>
    </div>
</template>

<script>
// @ is an alias to /src
import httpClient from './../services/httpClient';
export default {
    name: 'Home',
    components: {},
    methods: {
        getData() {
            httpClient
                .get('https://api.coindesk.com/v1/bpi/currentprice.json')
                .then(r => {
                    console.log(r);
                });
        },
    },
};
</script>
