<template>
    <div class="container">
        <div v-if="Object.keys(user).length > 0">
            <div class="form-group">
                <div class="input-group">
                    <label for="fullName">Full Name</label>
                    <input
                        v-model="user.name"
                        id="fullName"
                        class="form-control"
                        placeholder="******"
                        type="text"
                    />
                </div>
            </div>
            <div class="form-group">
                <div class="input-group">
                    <label for="username">username</label>
                    <input
                        v-model="user.username"
                        id="username"
                        class="form-control"
                        placeholder="******"
                        type="text"
                    />
                </div>
            </div>
            <div class="form-group">
                <div class="input-group">
                    <label for="role">Role</label>
                    <input
                        v-model="user.role"
                        id="role"
                        class="form-control"
                        placeholder="******"
                        type="text"
                    />
                </div>
            </div>
            <div class="form-group">
                <div class="input-group">
                    <label for="save">Save</label>
                    <button class="btn btn-primary" v-on:click="saveUser()">
                        Save
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import router from '@/router/index.js';
import http from '@/services/httpClient.js';
export default {
    name: 'UserDetail',
    data: function() {
        return {
            user: {},
            id: '',
        };
    },
    methods: {
        getUser(id) {
            http.get(`User/Get?id=${id}`)
                .then(result => {
                    console.log(result);

                    Object.keys(result.data.result).forEach(key => {
                        if (key != 'password')
                            this.user[key] = result.data.result[key];
                    });
                })
                .catch(err => {});
        },
        saveUser() {
            http.put(`User/Update?id=${this.id}`, this.user)
                .then(result => {
                    console.log(result.data);
                })
                .catch(err => {});
        },
    },
    //1b6e39d28afff457b463d821510442e2
    beforeMount() {
        this.id = router.currentRoute.value.params.id;
        this.getUser(this.id);
        this.user.password = null;
    },
};
</script>
