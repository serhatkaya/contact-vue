<template>
    <nav class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
        <a class="navbar-brand col-sm-3 col-md-2 mr-0" href="#">Company name</a>
        <input
            class="form-control form-control-dark w-100"
            type="text"
            placeholder="Search"
            aria-label="Search"
        />
        <ul class="navbar-nav px-3">
            <li class="nav-item text-nowrap" v-on:click="logout()">
                <a class="nav-link" href="#">Sign out</a>
            </li>
        </ul>
    </nav>

    <div class="container-fluid">
        <div class="row">
            <Menu />
            <main role="main" class="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4">
                <div
                    class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom"
                >
                    <h1 class="h2">Dashboard</h1>
                </div>
                <router-view />
            </main>
        </div>
    </div>
</template>

<script>
import Menu from '@/components/Menu.vue';
import router from '@/router/index.js';
export default {
    name: 'HelloWorld',
    props: {
        msg: String,
    },
    components: {
        Menu,
    },
    methods: {
        logout() {
            localStorage.removeItem('currentUser');
            router.push('/login');
        },
    },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
