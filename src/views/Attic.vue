<template>
    <fade-transition appear>
        <section class="attic">
            <slide-y-up-transition appear :duration="500">
                <aside class="attic__sidebar">
                    <div class="attic__title attic__title--reset">
                        <button class="attic__reset button" @click="resetFilter()">Reset filter</button>
                    </div>
                        <div>
                            <div class="attic__title" @click="isDisplayedYear = !isDisplayedYear">
                                <div>Year</div>
                                <Arrow color=dark size="small" :orientation="isDisplayedYear ? 'top' : 'bottom'"></Arrow>
                            </div>
                            <div class="attic__panel" v-if="isDisplayedYear">
                                <Select class="attic__filter" v-model.number="selectedYear" :options="years" @input="filterAttic"></Select>
                            </div>
                        </div>
                        <div>
                            <div class="attic__title" @click="isDisplayedRegion = !isDisplayedRegion">
                                <div>Region</div>
                                <Arrow color=dark size="small" :orientation="isDisplayedRegion ? 'top' : 'bottom'"></Arrow>
                            </div>
                            <div class="attic__panel" v-if="isDisplayedRegion">
                                <Select class="attic__filter" v-model="selectedRegion" :options="regions" :filter="$options.filters.region" @input="filterAttic"></Select>
                            </div>
                        </div>
                        <div>
                            <div class="attic__title" @click="isDisplayedLanguage = !isDisplayedLanguage">
                                <div>Language</div>
                                <Arrow color=dark size="small" :orientation="isDisplayedLanguage ? 'top' : 'bottom'"></Arrow>
                            </div>
                            <div class="attic__panel" v-if="isDisplayedLanguage">
                                <Select class="attic__filter" v-model="selectedLanguage" :options="languages" :filter="$options.filters.criterium" @input="filterAttic"></Select>
                            </div>
                        </div>
                        <div v-for="(panel, index) in filterModel" :key="panel.panel">
                            <div class="attic__title" @click="panel.isDisplayed = !panel.isDisplayed">
                                <div>{{ panel.panel | criteriumCategory }}</div>
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
                                <Check v-if="panel.panel === categories.TYPE" class="attic__filter" v-model="onlyGems" label="Album is a gem" @click.native="filterAttic('gem')"></Check>
                            </div>
                        </div>
                </aside>
            </slide-y-up-transition>
            <section id="albumList" class="attic__mosaic">
                <Cover class="attic__cover" v-for="album in albums" :key="album.id" :album="album" :class="album.id" thumbnail @click.native="selectAlbumAndView(album)"></Cover>
            </section>
        </section>
    </fade-transition>
</template>

<script>
import { mapActions, mapState } from "vuex"
import {
    categories, categoriesOrder, criteria, criteriaCategory,
} from "../db/criteria"
import { applyChainedFadeInEarlyOnly } from "../utils/transition-utils"
import Cover from "../components/Cover.vue"
import Arrow from "../components/Arrow.vue"
import Check from "../components/Check.vue"
import Radio from "../components/Radio.vue"
import Select from "../components/Select.vue"

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
            categories,
            criteria,
            filterModel: [],
            isDisplayedLanguage: false,
            isDisplayedRegion: false,
            isDisplayedYear: false,
            selectedLanguage: null,
            selectedRegion: null,
            selectedYear: null,
            onlyGems: false,
            radioGroups: {
                [categories.TYPE]: null,
                [categories.THEME]: null,
                [categories.GENRE]: null,
                [categories.CONTAINS]: null,
                [categories.ERA]: null,
                [categories.LOUDNESS]: null,
            },
        }
    },
    computed: {
        ...mapState(["albums", "regions", "albumsPerYear"]),
        containsElementsOfCriteria() {
            return this.filterModel.find((fm) => fm.panel === categories.CONTAINS).criteria
        },
        languages() {
            return criteriaCategory[categories.LANGUAGE]
        },
        years() {
            return Object.keys(this.albumsPerYear)
        },
    },
    created() {
        this.generateCriteriaFilterModel()
    },
    mounted() {
        applyChainedFadeInEarlyOnly(this.$el, ".attic__cover", 3000, 30)
    },
    methods: {
        ...mapActions(["selectAlbum"]),
        generateCriteriaFilterModel() {
            const exclusiveCriteria = [
                criteria.CONCEPT,
                criteria.STORYLINE,
                criteria.SOUNDTRACK,
                criteria.SCI_FI,
                criteria.FANTASY,
                criteria.MEDIEVAL,
                criteria.OCCULT,
                criteria.SPIRITUAL,
                criteria.SOCIOPOLITICAL,
                criteria.HISTORICAL,
                criteria.ROCK,
                criteria.JAZZ,
                criteria.FOLK,
                criteria.ELECTRO,
                criteria.ART_POP,
                criteria.AFROBEAT,
                criteria.BLENDS,
                criteria.CRISPY_SIXTIES,
                criteria.GREASY_SEVENTIES,
                criteria.SOFT_SEVENTIES,
                criteria.NEO_EIGHTIES,
                criteria.SOFT,
                criteria.HEAVY,
                criteria.HUMBLE,
                criteria.SPECTACULAR,
            ]
            Object.entries(criteriaCategory).forEach(([key, value]) => {
                const filterPanel = {
                    panel: key,
                    isDisplayed: false,
                    criteria: value.map((criterium) => {
                        const c = {
                            criterium,
                        }
                        if (exclusiveCriteria.includes(criterium)) {
                            c.name = key
                        } else {
                            c.checked = false
                        }
                        return c
                    }),
                }
                if (key !== "LANGUAGE") {
                    // We use a select for languages for a bit
                    this.filterModel.push(filterPanel)
                }
            })
            this.filterModel.sort((a, b) => categoriesOrder.indexOf(a) > categoriesOrder.indexOf(b))
        },
        selectAlbumAndView(album) {
            this.selectAlbum(album)
            this.$router.push("/discographies")
        },
        resetFilter() {
            this.selectedLanguage = null
            this.selectedRegion = null
            this.selectedYear = null
            this.onlyGems = false
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
                const albumDom = this.$el.querySelector(`.${a.id}`)
                this.showAlbum(albumDom)
            })
        },
        filterAttic(criteriumClicked) {
            const containsCriteria = this.containsElementsOfCriteria.map((i) => i.criterium)
            if (criteriumClicked === criteria.BLENDS) {
                this.containsElementsOfCriteria.forEach((c) => {
                    if (c.checked) {
                        c.checked = false
                    }
                })
            } else if (containsCriteria.includes(criteriumClicked)) {
                this.radioGroups[categories.CONTAINS] = null
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
                const albumDom = this.$el.querySelector(`.${a.id}`)
                const isAMatch = {
                    year: true,
                    region: true,
                    language: true,
                    gem: true,
                }
                isAMatch.year = this.selectedYear ? a.year === this.selectedYear : true
                isAMatch.region = this.selectedRegion ? a.country === this.selectedRegion : true
                isAMatch.language = this.selectedLanguage ? a.criteria.includes(this.selectedLanguage) : true
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
            if (!album.classList.contains("hidden")) {
                album.classList.add("hidden")
            }
        },
        showAlbum(album) {
            album.classList.remove("hidden")
        },
    },
}
</script>

<style lang="scss" scoped>
@import '../style/gatherer';
@import '../style/mixins/fade-in';
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
        @include fadeIn;
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
