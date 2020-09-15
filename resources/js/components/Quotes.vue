<template>
    <q-page padding>
        <div class="row justify-center">
            <div class="col col-sm-10 col-md-8 col-lg-6">
               <div class="text-h6 text-center q-pa-lg bg-primary text-grey">Wisdom of the mountains</div>
                <q-list>
                    <q-item v-for="quote in quotes" :key="quote.id">
                        <q-item-section>{{ quote.body }} </q-item-section>
                        <q-item-section class="text-caption">
                            <q-item-label>
                                – {{ quote.quotee }}
                            </q-item-label>
                        </q-item-section>
                    </q-item>
                </q-list>
            </div>
        </div>
    </q-page>
</template>

<script>
export default {
    data() {
        return {
            quotes: []
        };
    },
    beforeRouteEnter(to, from, next) {
        axios
            .get("api/quotes")
            .then(response => {
                next(vm => {
                    vm.quotes = response.data;
                });
            })
            .catch(error => {
                next(false);
            });
    }
};
</script>

<style></style>
