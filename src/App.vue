<template>
    <fade-transition appear>
        <div id="app" class="app">
            <TheNavBar />
            <section class="app__body">
                <router-view class="app__page"/>
            </section>
            <TheNavBar v-if="$mq === 'M'" footer />
        </div>
    </fade-transition>
</template>

<script>
import { mapActions } from "vuex"
import { TheNavBar } from "./components"
import { supabase } from "./lib/supabase"

export default {
    components: {
        TheNavBar,
    },
    created() {
        this.loadDatabase()
        this.fetchAlbums()
    },
    methods: {
        ...mapActions(["loadDatabase"]),
        async fetchAlbums() {
            // Rappel: Supabase endort la db au bout de quelques semaines d'inutilisation
            // TODO ce qu'il reste à faire: lister tous les enums (region, criterium), supprimer leurs tables mortes, puis générer côté App.vue un fichier .json ou .csv qui renomme les champs
            // TODO créer requete sql d'insertion
            // TODO script de migration
            // TODO il faudrait générer un script .sql à partir de la db
            // INSERT INTO public.albums (cover_id, ...) VALUES (abedul, Abedul, ...)
            const { data: regions, error } = await supabase.from("regions").select("*")
            const { data: criteria } = await supabase.from("criteria").select("id")
            const { data: albums } = await supabase.from("albums").select("*")
            const { data: region } = await supabase.from("region").select("*")
            console.log(region)
        },
    },
}
</script>

<style lang="scss">
@import './style/gatherer';
@import './style/mixins/page';
@import './style/modules/link';

.app {
    &__body {
        padding-top: var(--header-height);
    }

    &__page {
        -webkit-overflow-scrolling: touch;
        overflow: auto;
    }
}

@media (max-width: $mobile) {
    .app {
        &__body {
            padding-bottom: var(--header-height);
        }
    }
}
</style>
