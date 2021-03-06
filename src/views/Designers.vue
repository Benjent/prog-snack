<template>
    <section class="designers">
        <section class="designers__section" v-for="designer in designersWithEnoughWorks" :key="designer.name">

            <h2 class="title title--2 designers__name">{{ designer.name }}</h2>
            
            <div class="designers__border-wrapper">
                <div class="designers__albums" :class="getClassDesigner(designer.name)">
                    <div class="designers__albums__item" v-for="album in designer.works" :key="album.id" @click="selectAlbumAndView(album)">
                        <Cover :album="album" thumbnail></Cover>
                    </div>
                </div>
            </div>
        </section>
    </section>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import Cover from '../components/Cover.vue'

export default {
    components: {
        Cover,
    },
    computed: {
        ...mapState(['designers']),
        designersWithEnoughWorks() {
            return Object.values(this.designers).filter((d) => {
                return d.works.length > 1
            })
        }
    },
    methods: {
        ...mapActions(['selectAlbum']),
        getClassDesigner(name) {
            if (this.$mq === 'M') {
                return
            }

            return {
                'designers__albums--hipgnosis': name === 'Hipgnosis',
                'designers__albums--rogerDean': name === 'Roger Dean',
                'designers__albums--calSchenkel': name === 'Cal Schenkel',
                'designers__albums--marcusKeef': name === 'Marcus Keef',
                'designers__albums--hughSyme': name === 'Hugh Syme',
            }
        },
        selectAlbumAndView(album) {
            this.selectAlbum(album)
            this.$router.push('/discographies')
        },
    },
}
</script>

<style lang="scss" scoped>
@import '../style/gatherer';
@import '../style/mixins/page';
@import '../style/modules/title';

.designers {
    display: flex;
    flex-direction: column;
    align-items: center;

    & &__section {
        max-width: 1200px;
        text-align: center;
        margin: 60px;
    }

    & &__name {
        padding-bottom: 10px;
    }

    & &__albums {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    & &__albums__item {
        display: flex;
        flex-direction: column;
        position: relative;
        height: auto;
        font-size: 17px;
        width: 150px;
        height: 150px;
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


    & &__border-wrapper {
        width: 100%;
        box-sizing: border-box;
        border-top: solid 2px;
        // padding: 0 50px;
    }
}

@media (max-width: $mobile) {
    .designers {
        & &__section {
            margin: 20px;
        }

        & &__albums__item {
            height: 120px;
            width: 120px;
        }

        & &__border-wrapper {
            // padding: 0 20px;
        }
    }
}
</style>
