<template>
    <q-page padding>
        <div class="row justify-center">
            <div class="col col-sm-10 col-md-8 col-lg-6">
                <q-card class="bg-primar q-pa-md">
                    <q-card-section class="q-mb-md">
                        <div class="text-h5">Login</div>
                    </q-card-section>
                    <q-form @submit="onSubmit" class="q-gutter-sm">
                        <q-input
                            filled
                            type="email"
                            v-model="email"
                            label="Email *"
                            lazy-rules
                            :rules="[
                                val =>
                                    val !== '' || 'Please type a valid email',
                                val =>
                                    (val.includes('@') && val.includes('.')) ||
                                    'Please type a valid email'
                            ]"
                        />

                        <q-input
                            filled
                            type="password"
                            v-model="password"
                            label="Password *"
                            lazy-rules
                            :rules="[
                                val =>
                                    val.length >= 8 ||
                                    'Please use minimum 8 characters'
                            ]"
                        />

                        <q-checkbox v-model="remember" label="Remember Me?" />

                        <div class="q-mb-md q-gutter-sm">
                            <q-btn
                                label="Submit"
                                type="submit"
                                color="primary"
                            />
                            <q-btn
                                to="/forgot-password"
                                label="Forgot Password?"
                                type="a"
                                color="primary"
                                class="q-ml-sm"
                                disable
                            />
                            <q-btn
                                @click="resendActivation"
                                label="Resend Activation Link?"
                                disable
                                type="a"
                                color="info"
                                text-color="black"
                                size="sm"
                                class="float-right"
                            />
                        </div>
                    </q-form>
                </q-card>
            </div>
        </div>
    </q-page>
</template>

<script>
export default {
    name: "Login",

    data() {
        return {
            email: "",
            password: "",
            remember: false
        };
    },

    computed: {
        in: function() {
            return this.$store.state.authenticated;
        }
    },

    created() {
        window.axios.get("/sanctum/csrf-cookie").then(response => {
            // Login...
            // console.log("ok");
        });
    },

    meta() {
        return {
            title: "Login - Innouts",

            meta: {
                description: {
                    name: "description",
                    content: "Login to Demo!"
                }
            }
        };
    },

    methods: {
        onSubmit() {
            let payload = {
                email: this.email,
                password: this.password,
                remember: this.remember
            };
            window
                .axios({
                    url: "/login",
                    data: payload,
                    method: "POST"
                })
                .then(response => {
                    this.$q.notify({
                        color: "positive",
                        textColor: "white",
                        icon: "flight_land",
                        message: "Logged in."
                    });
                    this.$store.commit("loggedIn");
                    this.$router.push({ name: "home" });
                })
                .catch(error => {
                    let message = ''
                    for (const [key, value] of Object.entries(error.response.data.errors)) {
                      message + (`${value} \n`)
                    }
                    console.log(message)
                    this.$q.notify({
                        color: "negative",
                        textColor: "white",
                        icon: "error",
                        message: error.response.data.message
                    });
                });
        },

        resendActivation() {
            if (this.email) {
                this.$axios({
                    url: "api/resend-activation-link",
                    data: { email: this.email },
                    method: "POST"
                })
                    .then(response => {
                        this.$q.notify({
                            color: "positive",
                            textColor: "white",
                            icon: "fas fa-check-circle",
                            message: response.data.message
                        });
                    })
                    .catch(error => {
                        this.$q.notify({
                            color: "negative",
                            textColor: "white",
                            icon: "fas fa-exclamation-triangle",
                            message: error.response.data.error
                        });
                    });
            } else {
                this.$q.notify({
                    color: "negative",
                    icon: "fas fa-exclamation-triangle",
                    message: "Please enter your email!"
                });
            }
        }
    }
};
</script>

<style></style>
