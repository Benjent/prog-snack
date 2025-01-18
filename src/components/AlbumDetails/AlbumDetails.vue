<template>
    <div class="albumDetails">
        <Cover v-if="$mq !== 'M'" class="albumDetails__cover" :album="album" rounded fade />
        <div class="albumDetails__infos">
            <Heading :level="3" class="discographies__album__title text--name">
                {{ album.title }}
            </Heading>
            <div class="card albumDetails__infos__body">
                <Cover v-if="$mq === 'M'" :album="album" rounded fade />
                <Typography class="albumDetails__gem" v-if="album.gem"> This album is a must-hear </Typography>
                <Typography>
                    <span>
                        <Icon name="event" /> {{ album.year }} -
                        {{ album.region_flag }}
                        {{ album.region }}
                    </span>
                    <span class="discographies__album__designers" v-if="album.designers.length > 0">
                        - <Icon name="palette" />
                        Cover by
                        <List :values="album.designers.map((d) => d.value)" type="flattened" />
                    </span>
                </Typography>
                <footer class="discographies__album__footer">
                    <List
                        class="discographies__album__criteria"
                        :values="[
                            ...album.criterium_labels.map((l) => l.value),
                            ...album.languages.map((l) => `${l.value} lyrics`),
                        ]"
                    />
                </footer>
                <AlbumStarter class="discographies__track" :album="album" />
            </div>
        </div>
    </div>
</template>

<script>
import { flags } from "@/db/regions"
import AlbumStarter from "../AlbumStarter/AlbumStarter.vue"
import Cover from "../Cover/Cover.vue"
import Heading from "../Heading/Heading.vue"
import Icon from "../Icon/Icon.vue"
import List from "../List/List.vue"
import Typography from "../Typography/Typography.vue"

export default {
    name: "AlbumDetails",
    components: {
        AlbumStarter,
        Cover,
        Heading,
        Icon,
        List,
        Typography,
    },
    props: {
        album: {
            type: Object,
        },
    },
    data() {
        return {
            flags,
        }
    },
}
</script>

<style lang="scss" scoped>
@import "@/style/gatherer";
@import "@/style/mixins/golden";
@import "@/style/modules/card";

.albumDetails {
    display: flex;

    &__cover {
        width: 100%;
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
    }

    &__infos {
        padding: 0 2rem;
        display: flex;
        flex-direction: column;

        &__body {
            display: flex;
            flex-direction: column;
            gap: 1.2rem;
        }
    }

    &__gem {
        @include golden;
        font-style: italic;
        font-weight: bold;
        width: 100%;
    }
}
</style>
