<template>
    <nav class="col-md-2 d-none d-md-block bg-light sidebar">
        <div class="sidebar-sticky">
            <ul class="nav flex-column">
                <li
                    class="nav-item"
                    v-for="link in menuConfig"
                    v-bind:key="link.key"
                >
                    <router-link v-bind:to="link.link" class="nav-link">
                        <em v-bind:class="link.icon"></em>
                        {{ link.label }}</router-link
                    >
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'Menu',
    data: function() {
        return {
            menuConfig: [
                {
                    label: 'Home',
                    key: 'home',
                    link: '/',
                    icon: 'fa fa-user',
                },
                {
                    label: 'Users',
                    key: 'about',
                    link: '/users',
                    icon: 'fa fa-user',
                },
            ],
        };
    },
};
</script>
