<template>
     <section class="attic">
        <aside class="attic__sidebar">
            <div class="attic__title attic__title--reset">
                <button class="attic__reset button" @click="resetFilter()">Reset filter</button>
            </div>
            <div class="attic__title" @click="isDisplayedRegionYear = !isDisplayedRegionYear">
                Region & Year
                <Arrow color=dark size="small" :orientation="isDisplayedRegionYear ? 'top' : 'bottom'"></Arrow>
            </div>
            <div class="attic__panel" v-if="isDisplayedRegionYear">
                <Select class="attic__filter" v-model="selectedRegion" :options="regions" @change="filterAttic"></Select>
                <Select class="attic__filter" v-model="selectedYear" :options="years" @change="filterAttic"></Select>
            </div>
            <div v-for="(panel, index) in filterModel" :key="panel.panel">
                <div class="attic__title" @click="panel.isDisplayed = !panel.isDisplayed">
                    {{ panel.panel }}
                    <Arrow color=dark size="small" :orientation="panel.isDisplayed ? 'top' : 'bottom'"></Arrow>
                </div>
                <div class="attic__panel" v-if="panel.isDisplayed">
                    <template v-for="(item, indexCriteria) in panel.criteria">
                        <Radio v-if="item.name" v-model="radioGroups[item.name]"
                            class="attic__filter"
                            :label="item.criterium | criterium" :own="item.criterium" :key="item.criterium"
                            @click.native="filterAttic(item.criterium)"></Radio>
                        <Check v-else
                            class="attic__filter"
                            v-model="filterModel[index].criteria[indexCriteria].checked"
                            :label="item.criterium | criterium" :key="item.criterium" 
                            @click.native="filterAttic(item.criterium)"></Check>
                    </template>
                    <Check v-if="panel.panel === 'Type'" class="attic__filter" v-model="onlyGems" label="Album is a gem" @click.native="filterAttic('gem')"></Check>
                </div>
            </div>
        </aside>
        <section id="albumList" class="attic__mosaic">
            <Cover class="attic__cover" v-for="album in albums" :key="album.id" :album="album" :class="album.id" thumbnail @click.native="selectAlbumAndView(album)"></Cover>
        </section>
    </section>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import { criteria } from '../db/criteria.js';
import Cover from '../components/Cover.vue'
import Arrow from '../components/Arrow.vue'
import Check from '../components/Check.vue'
import Radio from '../components/Radio.vue'
import Select from '../components/Select.vue'

export default {
    components: {
        Arrow,
        Check,
        Cover,
        Radio,
        Select,
    },
    data() {
        return {
            criteria,
            filterModel: [
                {
                    panel: 'Type',
                    isDisplayed: false,
                    criteria: [
                        { criterium: criteria.CONCEPT, name: 'type' },
                        { criterium: criteria.STORYLINE, name: 'type' },
                        { criterium: criteria.SOUNDTRACK, name: 'type' },
                        { criterium: criteria.LIVE, checked: false },
                    ],
                },
                {
                    panel: 'Language',
                    isDisplayed: false,
                    criteria: [
                        { criterium: criteria.FRENCH, name: 'language' },
                        { criterium: criteria.ITALIAN, name: 'language' },
                        { criterium: criteria.SPANISH, name: 'language' },
                        { criterium: criteria.SWEDISH, name: 'language' },
                        { criterium: criteria.ZEUHL, name: 'language' },
                    ],
                },
                {
                    panel: 'Theme',
                    isDisplayed: false,
                    criteria: [
                        { criterium: criteria.SCI_FI, name: 'theme' },
                        { criterium: criteria.FANTASY, name: 'theme' },
                        { criterium: criteria.MEDIEVAL, name: 'theme' },
                        { criterium: criteria.OCCULT, name: 'theme' },
                        { criterium: criteria.SPIRITUAL, name: 'theme' },
                    ],
                },
                {
                    panel: 'Main genre',
                    isDisplayed: false,
                    criteria: [
                        { criterium: criteria.ROCK, name: 'genre' },
                        { criterium: criteria.JAZZ, name: 'genre' },
                        { criterium: criteria.FOLK, name: 'genre' },
                        { criterium: criteria.ELECTRO, name: 'genre' },
                        { criterium: criteria.ART_POP, name: 'genre' },
                        { criterium: criteria.AFROBEAT, name: 'genre' },
                    ],
                },
                {
                    panel: 'Contains elements of',
                    isDisplayed: false,
                    criteria: [
                        { criterium: criteria.C_JAZZ, checked: false },
                        { criterium: criteria.C_FOLK, checked: false },
                        { criterium: criteria.C_ELECTRO, checked: false },
                        { criterium: criteria.C_PSYCHE, checked: false },
                        { criterium: criteria.BLENDS, name: 'blend' },
                    ],
                },
                {
                    panel: 'Style',
                    isDisplayed: false,
                    criteria: [
                        { criterium: criteria.ODD_RHYTHM, checked: false },
                        { criterium: criteria.TECHNICAL, checked: false },
                        { criterium: criteria.INSTRUMENTAL, checked: false },
                        { criterium: criteria.EXPERIMENTAL, checked: false },
                        { criterium: criteria.JAM, checked: false },
                        { criterium: criteria.SOPHISTICATED, checked: false },
                        { criterium: criteria.BLUESY, checked: false },
                        { criterium: criteria.JAZZY_GROOVY, checked: false },
                        { criterium: criteria.ROCK_OPERA, checked: false },
                        { criterium: criteria.FANFARE, checked: false },
                        { criterium: criteria.SPACY, checked: false },
                        { criterium: criteria.GLITTER, checked: false },
                        { criterium: criteria.AMBIENT, checked: false },
                        { criterium: criteria.ORIENTAL, checked: false },
                        { criterium: criteria.RENAISSANCE, checked: false },
                        { criterium: criteria.ARENA, checked: false },
                    ],
                },
                {
                    panel: 'Album structuration',
                    isDisplayed: false,
                    criteria: [
                        { criterium: criteria.LENGTHY_TRACKS, checked: false },
                        { criterium: criteria.PATCHWORK, checked: false },
                        { criterium: criteria.TRANSITION, checked: false },
                        { criterium: criteria.SYMPHONIC, checked: false },
                    ],
                },
                {
                    panel: 'Era sound',
                    isDisplayed: false,
                    criteria: [
                        { criterium: criteria.CRISPY_SIXTIES, name: 'era' },
                        { criterium: criteria.GREASY_SEVENTIES, name: 'era' },
                        { criterium: criteria.SOFT_SEVENTIES, name: 'era' },
                        { criterium: criteria.NEO_EIGHTIES, name: 'era' },
                    ],
                },
                {
                    panel: 'Loudness',
                    isDisplayed: false,
                    criteria: [
                        { criterium: criteria.SOFT, name: 'loudness' },
                        { criterium: criteria.HEAVY, name: 'loudness' },
                        { criterium: criteria.HUMBLE, name: 'loudness' },
                        { criterium: criteria.SPECTACULAR, name: 'loudness' },
                    ],
                },
                {
                    panel: 'Arrangement',
                    isDisplayed: false,
                    criteria: [
                        { criterium: criteria.UNCOMMON_INSTRUMENTS, checked: false },
                        { criterium: criteria.FEMALE, checked: false },
                        { criterium: criteria.SOUND_COLLAGES, checked: false },
                        { criterium: criteria.ORCHESTRAL_PARTS, checked: false },
                        { criterium: criteria.BAROQUE, checked: false },
                    ],
                },
                {
                    panel: 'Temper',
                    isDisplayed: false,
                    criteria: [
                        { criterium: criteria.FUNNY, checked: false },
                        { criterium: criteria.TOUCHING_VOCALS, checked: false },
                    ],
                },
            ],
            isDisplayedRegionYear: false,
            selectedRegion: null,
            selectedYear: null,
            onlyGems: false,
            radioGroups: {
                type: null,
                language: null,
                theme: null,
                genre: null,
                blend: null,
                era: null,
                loudness: null,
            },
        }
    },
    computed: {
        ...mapState(['albums', 'regions', 'albumsPerYear']),
        years() {
            return Object.keys(this.albumsPerYear)
        },
    },
    methods: {
        ...mapActions(['selectAlbum']),
        selectAlbumAndView(album) {
            this.selectAlbum(album)
            this.$router.push('/discographies')
        },
        resetFilter() {
            // Reset region & year
            this.selectedRegion = null
            this.selectedYear = null
            // Reset criteria
            this.filterModel.forEach((panel) => {
                panel.isDisplayed = false
                panel.criteria.forEach((c) => {
                    c.checked = false
                    if (this.radioGroups[c.name]) {
                        this.radioGroups[c.name] = null
                    }
                })
            })
            this.albums.forEach((a) => {
                const albumDom = document.querySelector(`.${a.id}`)
                this.showAlbum(albumDom)
            })
        },
        filterAttic(criteriumClicked) {
            const filterModelContains = this.filterModel[4].criteria // TODO computed
            const containsCriteria = filterModelContains.map((i) => i.criterium)
            if (criteriumClicked === criteria.BLENDS) {
                filterModelContains.forEach((c) => {
                    if (c.checked) {
                        c.checked = false
                    }
                })
            } else if (containsCriteria.includes(criteriumClicked)) {
                this.radioGroups.blend = null
            }
            // Filter model
            const wantedCriteria = []
            this.filterModel.forEach((panel) => {
                panel.criteria.forEach((c) => {
                    if (c.checked || this.radioGroups[c.name] === c.criterium) {
                        wantedCriteria.push(c.criterium)
                    }
                })
            })

            this.albums.forEach((a) => {
                const albumDom = document.querySelector(`.${a.id}`)
                // Region & Year, Gem
                const isAMatch = {
                    year: true,
                    region: true,
                    gem: true,
                }
                isAMatch.year = this.selectedYear ? a.year == this.selectedYear : true
                isAMatch.region = this.selectedRegion ? a.country === this.selectedRegion : true
                isAMatch.gem = this.onlyGems ? a.isAGem : true
                isAMatch.criteria = wantedCriteria.every((c) => a.criteria.includes(c))
                
                const isDisplayed = Object.values(isAMatch).every((v) => v)
                if (isDisplayed) {
                    this.showAlbum(albumDom)
                } else {
                    this.hideAlbum(albumDom)
                }
            })
        },
        hideAlbum(album) {
            if (!album.classList.contains('hidden')) {
                album.classList.add('hidden')
            }
        },
        showAlbum(album) {
            album.classList.remove('hidden')
        }
    },
}
</script>


<style lang="scss" scoped>
@import '../style/gatherer';
@import '../style/mixins/page';
@import '../style/mixins/shadow';
@import '../style/modules/button';
@import '../style/modules/select';

.hidden {
    opacity: 0 !important;
    width: 0 !important;
    height: 0 !important;
    user-select: none;
}

.attic {
    display: flex;

    & &__sidebar {
        @include page;
        @include shadow;
        position: sticky;
        z-index: 1;
        width: var(--aside-width);
        min-width: var(--aside-min-width);
        overflow-y: scroll;
        scrollbar-width: none;
        // border-right: solid 2px $primary;
        box-sizing: border-box;
        background: $secondary-dark;
    }

    & &__reset {
        width: 100%;
    }

    & &__title {
        cursor: pointer;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 15px;
        border-bottom: solid 1px $primary;
        background: $secondary-dark;

        &--reset {
            top: 0;
            position: sticky;
            z-index: 1;
        }
    }

    & &__panel {
        background: $secondary;
        padding: 15px;
    }

    & &__mosaic {
        @include page;
        display: flex;
        flex-wrap: wrap;
        align-content: baseline;
        width: 100%;
        overflow-y: scroll;
    }

    & &__cover {
        height: max-content;
        width: calc(100% / 8);
    }

    & &__filter {
        margin-top: 10px;

        &:first-child {
            margin-top: 0;
        }
    }
}

@media (max-width: $mobile) {
    .attic {
        & &__title {
            padding: 10px;
        }
    }
}

@media (max-width: 1080px) {
    .attic {
        & &__cover {
            width: calc(100% / 6);
        }
    }
}

@media (max-width: 860px) {
    .attic {
        & &__cover {
            width: calc(100% / 5);
        }
    }
}

@media (max-width: 640px) {
    .attic {
        & &__cover {
            width: calc(100% / 3);
        }
    }
}
</style>