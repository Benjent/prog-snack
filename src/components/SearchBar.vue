<template>
    <div class="l-search-bar">
        <input class="l-search-bar__input"
            :class="{ 'l-search-bar__input--empty': currentSearch }"
            placeholder="Search by album, artist, designer or year..."
            v-model="currentSearch"
            @input="search($event.target.value)">

            <div class="l-search-bar__reset" v-if="currentSearch || currentSearch === ''" @click="resetSearch"></div>

            <div class="l-search-bar__result" v-if="matchingAlbums.length > 0">
                <Arrow class="l-search-bar__arrow" color="dark" orientation="bottom"></Arrow>

                <div class="l-search-bar__album" v-for="album in matchingAlbums" :key="album.id" @click="selectSearchResult(album)">
                    <Cover :album="album" size="30"></Cover>
                    <div class="l-search-bar__album__title"> {{ album.title }} </div>
                </div>
            </div>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import Cover from './Cover.vue'
import Arrow from './Arrow.vue'

export default {
    name: 'SearchBar',
    components: {
        Cover,
        Arrow,
    },
    data() {
        return {
            currentSearch: null,
            matchingAlbums: []
        }
    },
    computed: {
        ...mapState(['albums']),
    },
    methods: {
        ...mapActions(['selectAlbum']),
        search(search) {
            this.currentSearch = search
            if (search) {
                let keyWords = search.split(' ')
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
            this.$router.push('/discographies')
            this.resetSearch()
        },
    },
}
</script>

<style lang="scss" scoped>
@import '../style/gatherer';

$search-bar-width: 300px;

.l-search-bar {
    $reset-size: 20px;
    height: 40px;
    border-bottom: solid 1px $primary;

    & &__arrow {
        position: sticky;
        top: 0;
        z-index: 1;
        margin: 0 auto;
        margin-bottom: -20px;
    }

    & &__input {
        width: $search-bar-width;
        height: 100%;
        box-sizing: border-box;
        padding: 5px 10px;
        padding-right: $reset-size * 2 + 8px;
        text-overflow: ellipsis;
    }

    & &__reset {
        cursor: pointer;
        position: absolute;
        right: 30px;
        top: 20px;
        width: $reset-size;
        height: $reset-size;

        &:before, &:after {
            content: '';
            position: absolute;
            left: 12px;
            height: 22px;
            width: 2px;
            background-color: $primary;
        }

        &:before { transform: rotate(45deg); }
        &:after { transform: rotate(-45deg); }
    }

    & &__result {
        position: absolute;
        top: 68px; // TODO var
        max-height: 300px;               
        width: $search-bar-width;
        box-sizing: border-box;
        border: solid 2px $primary;
        border-top: none;
        border-bottom-left-radius: $borderRadius;
        border-bottom-right-radius: $borderRadius;
        background: $secondary-dark;

        overflow-x: hidden;
        overflow-y: auto;

        &__item {
            cursor: pointer;
            display: flex;
            align-items: center;

            &:hover {
                background: $primary;
                color: $black;
            }
        }
    }

    & &__album {
        display: flex;
        align-items: center;
        cursor: pointer;

        &:hover {
            background: $primary;
            color: $black;
        }

        .l-cover {
            width: 36px;
            height: 36px;
            margin-right: 5px;
        }

        &__title {
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow-x: hidden;
        }
    }
}

@media (max-width: 1280px) {
    .l-search-bar {
        $search-bar-width: 220px;

        & &__input {
            width: $search-bar-width;
        }

        & &__result {
            width: $search-bar-width;
        }
    }
}

</style>
