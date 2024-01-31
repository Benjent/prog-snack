<!-- eslint-disable vuejs-accessibility/no-static-element-interactions -->
<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<!-- TODO fix above -->
<template>
    <fade-transition appear>
        <main class="designers">
            <section class="designers__section" v-for="designer in designersWithEnoughWorks" :key="designer.name">
                <Heading :level="2" color="secondary">{{ designer.name }}</Heading>

                <div class="card card--secondary designers__albums" :class="getClassDesigner(designer.name)">
                    <div
                        class="designers__albums__item"
                        v-for="album in getShuffledDesignerWorks(designer.works)"
                        :key="album.id"
                        @click="selectAlbumAndView(album)"
                    >
                        <Cover :album="album" thumbnail rounded />
                    </div>
                </div>
            </section>
        </main>
    </fade-transition>
</template>

<script>
import { mapActions, mapState } from "vuex"
import { shuffle } from "../utils/array"
import { applyChainedFadeIn } from "../utils/transition"
import { Cover, Heading } from "../components"

export default {
    components: {
        Cover,
        Heading,
    },
    computed: {
        ...mapState(["designers"]),
        designersWithEnoughWorks() {
            return Object.values(this.designers).filter((d) => d.works.length > 1)
        },
    },
    mounted() {
        this.$el.querySelectorAll(".designers__section").forEach((s) => {
            applyChainedFadeIn(s, ".designers__albums__item", 30)
        })
    },
    methods: {
        ...mapActions(["selectAlbum"]),
        getClassDesigner(name) {
            if (this.$mq === "M") {
                return null
            }
            return {
                "designers__albums--hipgnosis": name === "Hipgnosis",
                "designers__albums--rogerDean": name === "Roger Dean",
                "designers__albums--calSchenkel": name === "Cal Schenkel",
                "designers__albums--marcusKeef": name === "Marcus Keef",
                "designers__albums--hughSyme": name === "Hugh Syme",
            }
        },
        getShuffledDesignerWorks(array) {
            return shuffle(array)
        },
        selectAlbumAndView(album) {
            this.selectAlbum(album)
            this.$router.push("/discographies")
        },
    },
}
</script>

<style lang="scss" scoped>
@import "../style/gatherer";
@import "../style/mixins/fade-in";
@import "../style/mixins/page";
@import "../style/modules/card";
@import "../style/modules/text";
@import "../style/modules/title";

.designers {
    display: flex;
    flex-direction: column;
    align-items: center;

    & &__section {
        max-width: 1200px;
        text-align: center;
        margin: 60px;
    }

    & &__albums {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    & &__albums__item {
        @include fadeIn;
        display: flex;
        flex-direction: column;
        position: relative;
        height: auto;
        font-size: 17px;
        width: 150px;
        height: 150px;
        padding: 10px;
    }

    & &__albums {
        &--hipgnosis {
            $unit: 10px;
            display: grid;
            grid-template-columns: repeat(100, $unit);
            grid-auto-rows: $unit;

            .designers__albums__item {
                height: auto;
                width: auto;
                grid-row: auto / span 10;
                grid-column: auto / span 10;

                font-size: 0.6rem !important; // Because span-10 items are too small

                &:nth-child(3) {
                    grid-row: auto / span 30;
                    grid-column: auto / span 30;
                }
                &:nth-child(5) {
                    grid-row: auto / span 15;
                    grid-column: auto / span 15;
                }
                &:nth-child(6) {
                    grid-row: auto / span 15;
                    grid-column: auto / span 15;
                }
                &:nth-child(13) {
                    grid-row: auto / span 20;
                    grid-column: auto / span 20;
                }
                &:nth-child(14) {
                    grid-row: auto / span 20;
                    grid-column: auto / span 20;
                }
                &:nth-child(18) {
                    grid-row: auto / span 20;
                    grid-column: auto / span 20;
                }
                &:nth-child(22) {
                    grid-row: auto / span 20;
                    grid-column: auto / span 20;
                }
                &:nth-child(31) {
                    grid-row: auto / span 20;
                    grid-column: auto / span 20;
                }
                &:nth-child(40) {
                    grid-row: auto / span 20;
                    grid-column: auto / span 20;
                }
                &:nth-child(43) {
                    grid-row: auto / span 30;
                    grid-column: auto / span 30;
                }
                &:nth-child(49) {
                    grid-row: auto / span 15;
                    grid-column: auto / span 15;
                }
                &:nth-child(50) {
                    grid-row: auto / span 15;
                    grid-column: auto / span 15;
                }
                &:nth-child(51) {
                    grid-row: auto / span 30;
                    grid-column: auto / span 30;
                }
                &:nth-child(54) {
                    grid-row: auto / span 20;
                    grid-column: auto / span 20;
                }
                &:nth-child(61) {
                    grid-row: auto / span 20;
                    grid-column: auto / span 20;
                }
            }
        }

        &--rogerDean {
            $unit: 100px;
            display: grid;
            grid-template-columns: repeat(8, $unit);
            grid-auto-rows: $unit;

            .designers__albums__item {
                height: auto;
                width: auto;
                grid-row: auto / span 1;
                grid-column: auto / span 1;

                &:nth-child(3) {
                    grid-row: auto / span 3;
                    grid-column: auto / span 3;
                }
                &:nth-child(9) {
                    grid-row: auto / span 2;
                    grid-column: auto / span 2;
                }
                &:nth-child(11) {
                    grid-row: auto / span 2;
                    grid-column: auto / span 2;
                }
                &:nth-child(15) {
                    grid-row: auto / span 2;
                    grid-column: auto / span 2;
                }
                &:nth-child(19) {
                    grid-row: auto / span 3;
                    grid-column: auto / span 3;
                }
                &:nth-child(23) {
                    grid-row: auto / span 2;
                    grid-column: auto / span 2;
                }
                &:nth-child(27) {
                    grid-row: auto / span 2;
                    grid-column: auto / span 2;
                }
            }
        }

        &--calSchenkel {
            $unit: 100px;
            display: grid;
            grid-template-columns: repeat(10, $unit);
            grid-auto-rows: $unit;

            .designers__albums__item {
                height: auto;
                width: auto;
                grid-row: auto / span 1;
                grid-column: auto / span 1;

                &:nth-child(1) {
                    grid-row: auto / span 3;
                    grid-column: auto / span 3;
                }
                &:nth-child(4) {
                    grid-row: auto / span 2;
                    grid-column: auto / span 2;
                }
                &:nth-child(6) {
                    grid-row: auto / span 2;
                    grid-column: auto / span 2;
                }
                &:nth-child(12) {
                    grid-row: auto / span 3;
                    grid-column: auto / span 3;
                }
                &:nth-child(13) {
                    grid-row: auto / span 2;
                    grid-column: auto / span 2;
                }
                &:nth-child(16) {
                    grid-row: auto / span 3;
                    grid-column: auto / span 3;
                }
            }
        }

        &--marcusKeef {
            $unit: 100px;
            display: grid;
            grid-template-columns: repeat(10, $unit);
            grid-auto-rows: $unit;

            .designers__albums__item {
                height: auto;
                width: auto;
                grid-row: auto / span 1;
                grid-column: auto / span 1;

                &:nth-child(1) {
                    grid-row: auto / span 3;
                    grid-column: auto / span 3;
                }
                &:nth-child(7) {
                    grid-row: auto / span 2;
                    grid-column: auto / span 2;
                }
                &:nth-child(8) {
                    grid-row: auto / span 2;
                    grid-column: auto / span 2;
                }
                &:nth-child(9) {
                    grid-row: auto / span 2;
                    grid-column: auto / span 2;
                }
                &:nth-child(11) {
                    grid-row: auto / span 3;
                    grid-column: auto / span 3;
                }
                &:nth-child(12) {
                    grid-row: auto / span 2;
                    grid-column: auto / span 2;
                }
                &:nth-child(13) {
                    grid-row: auto / span 2;
                    grid-column: auto / span 2;
                }
                &:nth-child(14) {
                    grid-row: auto / span 2;
                    grid-column: auto / span 2;
                }
            }
        }

        &--hughSyme {
            $unit: 100px;
            display: grid;
            grid-template-columns: repeat(10, $unit);
            grid-auto-rows: $unit;

            .designers__albums__item {
                height: auto;
                width: auto;
                grid-row: auto / span 1;
                grid-column: auto / span 1;

                &:nth-child(3) {
                    grid-row: auto / span 2;
                    grid-column: auto / span 2;
                }
                &:nth-child(4) {
                    grid-row: auto / span 3;
                    grid-column: auto / span 3;
                }
                &:nth-child(5) {
                    grid-row: auto / span 2;
                    grid-column: auto / span 2;
                }
            }
        }

        &--grid {
            $unit: 10px;
            display: grid;
            grid-template-columns: repeat(100, $unit);
            grid-auto-rows: $unit;

            .designers__albums__item {
                height: auto;
                width: auto;
                grid-row: auto / span 10;
                grid-column: auto / span 10;

                &:nth-child(5n) {
                    grid-row: auto / span 20;
                    grid-column: auto / span 20;
                }
            }
        }
    }
}

@media (max-width: $mobile) {
    .designers {
        & &__section {
            margin: 20px;
        }

        & &__albums {
            gap: 10px;
        }

        & &__albums__item {
            height: 100px;
            width: 100px;
            padding: 0;
        }
    }
}
</style>
