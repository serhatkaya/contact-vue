<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <table
                    class="table table-bordered table-striped"
                    v-if="users.length > 0"
                >
                    <thead>
                        <tr>
                            <th>
                                Name
                            </th>
                            <th>Username</th>
                            <th>Role</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="user in users" :key="user.id">
                            <td>{{ user.name }}</td>
                            <td>{{ user.username }}</td>
                            <td>{{ user.role }}</td>
                            <td>
                                <a v-on:click="goToDetail(user.id)"
                                    ><em class="fa fa-edit"></em> Edit</a
                                >
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import httpClient from '@/services/httpClient.js';
import router from '@/router/index.js';
export default {
    name: 'Users',
    data: function() {
        return {
            users: [],
        };
    },
    methods: {
        getUsers() {
            httpClient.get('User/GetAll').then(res => {
                this.users = res.data.result;
            });
        },
        goToDetail(id) {
            router.push(`/users/detail/${id}`);
        },
    },
    beforeMount() {
        this.getUsers();
    },
};
</script>
<style scoped>
a {
    cursor: pointer;
}
</style>
