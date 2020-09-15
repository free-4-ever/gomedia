<template>
    <q-layout view="hHh lpR fFf">
        <q-header elevated class="bg-primary text-white" height-hint="98">
            <div class="row no-wrap shadow-">
                <q-toolbar>
                    <q-toolbar-title>
                        Go Media Demo
                    </q-toolbar-title>
                </q-toolbar>
                <q-btn v-if="authenticated" @click="logout" icon="logout" roun size="sm" color="red" dens ></q-btn>
            </div>
            <q-tabs align="center">
                <q-route-tab to="/" label="Home" />
                <q-route-tab v-if="!authenticated" to="/login" label="Login" />
                <q-route-tab to="/quotes" label="Quotes" />
            </q-tabs>
        </q-header>

        <q-ajax-bar size="2px" color="warning" />

        <q-page-container>
            <router-view />
        </q-page-container>
    </q-layout>
</template>

<script>
export default {
    name: "MyLayout",

    data: () => {
        return {};
    },

    computed: {
        authenticated: function() {
            return this.$store.getters.loggedIn;
        }
    },

    methods: {
        logout() {
            window
                .axios({
                    url: "/logout",
                    method: "POST"
                })
                .then(response => {
                    this.$q.notify({
                        color: "positive",
                        textColor: "white",
                        icon: "flight_takeoff",
                        message: "Logged out."
                    });
                    this.$store.commit("loggedOut");
                    this.$router.push({ name: "home" });
                })
                .catch(error => {
                    this.$q.notify({
                        color: "negative",
                        textColor: "white",
                        icon: "error",
                        message: error.response.data.error
                    });
                });
        }
    }
};
</script>

<style></style>
