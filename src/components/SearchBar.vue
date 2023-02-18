<template>
    <div class="searchBar">
        <input class="searchBar__input"
            :class="{ 'searchBar__input--empty': currentSearch }"
            placeholder="Album, artist, designer, year..."
            v-model="currentSearch"
            @input="search($event.target.value)">

            <div class="searchBar__reset" :class="{ 'searchBar__reset--available': currentSearch || currentSearch === '' }" @click="resetSearch">
                <Icon :name="currentSearch || currentSearch === '' ? 'close' : 'search'" />
            </div>

            <div class="options searchBar__result" v-if="matchingAlbums.length > 0">
                <div class="options__item searchBar__album" v-for="album in matchingAlbums" :key="album.id" @click="selectSearchResult(album)">
                    <Cover :album="album" :size="30"></Cover>
                    <div class="searchBar__album__title">{{ album.title }}</div>
                </div>
            </div>
    </div>
</template>

<script>
import { mapActions, mapState } from "vuex"
import Cover from "./Cover.vue"
import Icon from "./Icon.vue"

export default {
    name: "SearchBar",
    components: {
        Cover,
        Icon,
    },
    data() {
        return {
            currentSearch: null,
            matchingAlbums: [],
        }
    },
    computed: {
        ...mapState(["albums"]),
    },
    methods: {
        ...mapActions(["selectAlbum"]),
        search(search) {
            this.currentSearch = search
            if (search) {
                let keyWords = search.split(" ")
                keyWords = keyWords.map((word) => word.toLowerCase())

                this.matchingAlbums = this.albums.filter((a) => {
                    const title = a.title.toLowerCase()
                    const artist = a.artist.toLowerCase()
                    const year = a.year.toString()
                    const designers = a.designers.slice(0)
                    const data = [title, artist, year, designers]

                    return keyWords.every((word) => data.some((d) => d.includes(word)))
                })
            }
        },
        resetSearch() {
            this.currentSearch = null
            this.matchingAlbums = []
        },
        selectSearchResult(album) {
            this.selectAlbum(album)
            this.$router.push("/discographies")
            this.resetSearch()
        },
    },
}
</script>

<style lang="scss" scoped>
@import '../style/gatherer';
@import '../style/mixins/sunset';
@import '../style/modules/options';

$search-bar-width: 300px;
$search-bar-height: 40px;

.searchBar {
    $reset-size: 20px;
    height: $search-bar-height;
    max-width: $search-bar-width;
    width: 100%;
    color: $primary;
    position: relative;

    & &__input {
        height: 100%;
        width: 100%;
        padding: var(--button-vertical-padding) var(--button-horizontal-padding);
        padding-right: $reset-size * 2;
        border: solid var(--input-border-width) $primary;
        border-right: 0;
        border-radius: var(--select-radius);
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        text-overflow: ellipsis;

        &:hover {
            @include sunset;
        }
    }

    & &__reset {
        cursor: pointer;
        pointer-events: none;
        position: absolute;
        right: 10px;
        top: ($search-bar-height / 2) - 20px / 2; // Roughly icon height

        &--available {
            pointer-events: all;
        }
    }

    & &__result {
        position: absolute;
        top: calc(var(--header-height) / 2 + $search-bar-height / 2); // Position the result below the header, not the input
        width: 100%;
        overflow-x: hidden;
        border-right: 0;
        border-bottom-right-radius: 0;
    }

    & &__album {
        display: flex;
        align-items: center;
        cursor: pointer;

        &:hover {
            background: $primary;
            color: $text-dark;
        }

        .l-cover {
            width: 36px;
            height: 36px;
        }

        &__title {
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow-x: hidden;
            margin-left: 5px;
        }
    }
}

</style>
