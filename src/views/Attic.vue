<template>
    <fade-transition appear>
        <main class="attic">
            <slide-y-up-transition appear :duration="500">
                <aside class="attic__sidebar">
                    <div class="attic__actions">
                        <button class="attic__actions__button button" aria-label="Reset filters" @click="resetFilter()">Reset filters</button>
                        <button class="attic__actions__button button" aria-label="Download filtered list" @click="downloadFilteredList()">Download filtered list</button>
                    </div>

                    <Accordion title="Year" drawered>
                        <!-- eslint-disable-next-line vuejs-accessibility/form-control-has-label -->
                        <Select class="attic__filter" v-model.number="selectedYear" :options="years" custom @input="filterAttic" />
                        <template v-if="selectedYear === 'Custom'">
                            <Range class="attic__filter" :min="1965" :max="1995" v-model="yearRange" @release="filterAttic" />
                        </template>
                    </Accordion>

                    <Accordion title="Region" drawered>
                        <!-- eslint-disable-next-line vuejs-accessibility/form-control-has-label -->
                        <Select class="attic__filter" v-model="selectedRegion" :options="regions" :filter="$options.filters.region" @input="filterAttic" />
                    </Accordion>

                    <Accordion title="Language" drawered>
                        <!-- eslint-disable-next-line vuejs-accessibility/form-control-has-label -->
                        <Select class="attic__filter" v-model="selectedLanguage" :options="languages" :filter="$options.filters.criterium" @input="filterAttic" />
                    </Accordion>

                    <Accordion v-for="(panel, index) in filterModel" :key="panel.panel" :title="$options.filters.criteriumCategory(panel.panel)" drawered>
                        <template v-for="(item, indexCriteria) in panel.criteria">
                            <Radio
                                v-if="item.name"
                                v-model="radioGroups[item.name]"
                                :id="item.criterium"
                                class="attic__filter"
                                :label="item.criterium | criterium" :own="item.criterium"
                                :key="`${item.criterium}Radio`"
                                @click.native="filterAttic(item.criterium)" />
                            <Check
                                v-else
                                :id="item.criterium"
                                class="attic__filter"
                                v-model="filterModel[index].criteria[indexCriteria].checked"
                                :label="item.criterium | criterium"
                                :key="`${item.criterium}Check`"
                                @click.native="filterAttic(item.criterium)" />
                        </template>
                        <Check v-if="panel.panel === categories.TYPE" id="gemCheck" class="attic__filter" v-model="onlyGems" label="Album is a gem" @click.native="filterAttic('gem')" />
                    </Accordion>
                </aside>
            </slide-y-up-transition>
            <section id="albumList" class="attic__mosaic">
                <Cover class="attic__cover" v-for="album in albums" :key="album.id" :album="album" :class="album.id" thumbnail @click.native="selectAlbumAndView(album)" />
            </section>
        </main>
    </fade-transition>
</template>

<script>
import { mapActions, mapState } from "vuex"
import {
    categories, categoriesOrder, criteria, criteriaCategory, languages,
} from "../db/criteria"
import { applyChainedFadeInEarlyOnly } from "../utils/transition"
import {
    Accordion, Cover, Check, Radio, Range, Select,
} from "../components"

export default {
    components: {
        Accordion,
        Check,
        Cover,
        Radio,
        Range,
        Select,
    },
    data() {
        return {
            categories,
            criteria,
            languages,
            filterModel: [],
            selectedLanguage: null,
            selectedRegion: null,
            selectedYear: null,
            yearRange: {
                min: 1965,
                max: 1995,
            },
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
                    // We use a select for languages
                    this.filterModel.push(filterPanel)
                }
            })
            this.filterModel.sort((a, b) => +(categoriesOrder.indexOf(a) > categoriesOrder.indexOf(b)))
        },
        selectAlbumAndView(album) {
            this.selectAlbum(album)
            this.$router.push("/discographies")
        },
        getFilteredAlbums() {
            const shownAlbumsDom = this.$el.querySelectorAll(".attic__cover:not(.hidden)")
            // Do not bother if no filter is on
            if (shownAlbumsDom.length === this.albums.length) {
                return this.albums
            }
            const shownAlbumIds = [...shownAlbumsDom].map((a) => a.id.replace("cover_", ""))
            return this.albums.filter((a) => shownAlbumIds.includes(a.id))
        },
        downloadFilteredList() {
            const filteredAlbums = this.getFilteredAlbums()
            // Rework the album type to a database-friendly naming convention. Remove when Supabase migration is over
            const snakeCasedAlbums = filteredAlbums.map((a) => {
                return {
                    id: a.id,
                    title: a.title,
                    artist: a.artist,
                    region: a.country,
                    criteria: a.criteria,
                    release_date: `${a.year}-01-01`,
                    selected_track_title: a.selectedTrackTitle,
                    selected_track_youtube_id: a.selectedTrackYtId,
                    spotify_id: a.spotifyId,
                    deezer_id: a.deezerId,
                    designers: a.designers,
                    similar_albums: a.similarAlbums,
                    is_gem: a.isAGem,
                    description: a.description,
                }
            }) 
            const dataString = `data:text/json;charset=utf-8,${encodeURIComponent(JSON.stringify(snakeCasedAlbums))}`
            const node = document.createElement("a")
            node.setAttribute("href", dataString)
            node.setAttribute("download", "prog-snack-albums.json")
            document.body.appendChild(node) // Required for Firefox
            node.click()
            node.remove()
        },
        resetFilter() {
            this.selectedLanguage = null
            this.selectedRegion = null
            this.selectedYear = null
            this.onlyGems = false
            // Reset criteria
            this.filterModel.forEach((panel) => {
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
        handleFilterPanels(criteriumClicked) {
            // Use criteria.BLENDS as a mutual exclusive option over "contains element" criteria
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
        },
        getWantedCriteria() {
            const wantedCriteria = []
            this.filterModel.forEach((panel) => {
                panel.criteria.forEach((c) => {
                    if (c.checked || this.radioGroups[c.name] === c.criterium) {
                        wantedCriteria.push(c.criterium)
                    }
                })
            })
            return wantedCriteria
        },
        filterAttic(criteriumClicked) {
            this.handleFilterPanels(criteriumClicked)
            const wantedCriteria = this.getWantedCriteria()

            // Use CSS display logic over JS array filter logic to allow CSS transitions to be triggered on filter changes
            this.albums.forEach((a) => {
                const albumDom = this.$el.querySelector(`.${a.id}`)
                const isAMatch = {
                    year: true,
                    region: true,
                    language: true,
                    gem: true,
                }
                if (this.selectedYear) {
                    isAMatch.year = this.selectedYear === "Custom" ? a.year >= this.yearRange.min && a.year <= this.yearRange.max : a.year === this.selectedYear
                }
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
@import '../style/mixins/sunset';
@import '../style/modules/button';

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
    }

    & &__actions {
        top: 0;
        position: sticky;
        background: $secondary;
        z-index: 1;
        padding: 15px;
        border-bottom: solid 2px $primary;
        display: flex;
        flex-direction: column;
        gap: var(--form-item-gap);

        &__button {
            width: 100%;
        }
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
        margin-top: var(--form-item-gap);

        &:first-child {
            margin-top: 0;
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
