<template>
    <div class="container ">
        <div class="card">
            <div class="card-body">
                <h4 class="card-title text-center mb-4 mt-1">Sign in</h4>
                <hr />
                <p class="text-success text-center">Some message goes here</p>
                <div class="form-group">
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text">
                                <i class="fa fa-user"></i>
                            </span>
                        </div>
                        <input
                            v-model="loginCredentials.username"
                            name=""
                            class="form-control"
                            placeholder="Email or login"
                            type="email"
                        />
                    </div>
                    <!-- input-group.// -->
                </div>
                <!-- form-group// -->
                <div class="form-group">
                    <div class="input-group">
                        <div class="input-group-prepend">
                            <span class="input-group-text">
                                <i class="fa fa-lock"></i>
                            </span>
                        </div>
                        <input
                            v-model="loginCredentials.password"
                            class="form-control"
                            placeholder="******"
                            type="password"
                        />
                    </div>
                </div>
                <div class="form-group">
                    <button
                        type="submit"
                        v-on:click="login()"
                        class="btn btn-primary btn-block"
                    >
                        Login
                    </button>
                </div>
                <p class="text-center">
                    <a href="#" class="btn">Forgot password?</a>
                </p>
            </div>
        </div>
    </div>
</template>
<script>
import httpClient from '@/services/httpClient.js';
import router from '@/router/index.js';
export default {
    name: 'Login',
    data: function() {
        return {
            loginCredentials: {
                username: '',
                password: '',
            },
        };
    },
    methods: {
        login() {
            httpClient.post('Auth/Login', this.loginCredentials).then(r => {
                var resp = r.data;
                if (resp) {
                    if (resp.message == 'Successfully logged in!') {
                        localStorage.setItem(
                            'currentUser',
                            JSON.stringify(resp.result)
                        );
                        router.push('home');
                    }
                }
                console.log(r);
            });
            console.log(this.loginCredentials);
        },
    },
};
</script>
