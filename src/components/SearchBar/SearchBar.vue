<template>
    <div class="searchBar">
        <input
            class="searchBar__input"
            :class="{ 'searchBar__input--empty': currentSearch }"
            placeholder="Album, artist, designer, year..."
            v-model="currentSearch"
            @input="search($event.target.value)"
        />

        <button class="searchBar__reset" :class="{ 'searchBar__reset--available': hasText }" @click="resetSearch">
            <Icon :name="hasText ? 'close' : 'search'" :aria-label="hasText && 'Erase search'" />
        </button>

        <div class="options searchBar__result" v-if="matchingAlbums.length > 0">
            <button
                class="options__item searchBar__album"
                v-for="album in matchingAlbums"
                :key="album.human_id"
                @click="selectSearchResult(album)"
            >
                <Cover :album="album" :size="30" />
                <div class="searchBar__album__title">{{ album.title }}</div>
            </button>
        </div>
    </div>
</template>

<script>
import { mapActions, mapState } from "vuex"
import Cover from "../Cover/Cover.vue"
import Icon from "../Icon/Icon.vue"

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
        hasText() {
            return this.currentSearch || this.currentSearch === ""
        },
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
            this.$router.push("/")
            this.resetSearch()
        },
    },
}
</script>

<style lang="scss" scoped>
@import "@/style/gatherer";
@import "@/style/mixins/sunset";
@import "@/style/modules/options";

$search-bar-width: 300px;
$search-bar-height: 40px;

.searchBar {
    $reset-size: 20px;
    height: $search-bar-height;
    max-width: $search-bar-width;
    width: 100%;
    color: $input-text-color;
    position: relative;

    & &__input {
        height: 100%;
        width: 100%;
        padding: var(--button-vertical-padding) var(--button-horizontal-padding);
        padding-right: $reset-size * 2;
        background: $input-background-color;
        // border: solid var(--input-border-width) $input-border-color;
        border-right: 0;
        border-radius: var(--select-radius);
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        text-overflow: ellipsis;

        &:hover {
            // @include sunset;
        }
    }

    & &__reset {
        cursor: pointer;
        pointer-events: none;
        position: absolute;
        right: 10px;
        top: calc(($search-bar-height / 2) - 20px / 2); // Roughly icon height

        &--available {
            pointer-events: all;
        }
    }

    & &__result {
        position: absolute;
        top: calc(
            var(--header-height) / 2 + $search-bar-height / 2
        ); // Position the result below the header, not the input
        width: 100%;
        overflow-x: hidden;
        border-right: 0;
        border-bottom-right-radius: 0;
    }

    & &__album {
        display: flex;
        align-items: center;
        cursor: pointer;
        color: $text-light;

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
