<template>
    <fade-transition appear>
        <main class="about">
            <div class="about__section">
                <Heading class="about__heading" color="secondary">Hi!</Heading>

                <Heading class="about__heading" :level="3" color="tertiary">
                    Prog Snack is a tiny web project with big music ambitions: dusting old prog albums, known as prog
                    gems, to make them shine beside classic albums.
                </Heading>
                <Typography>
                    Prog albums are anything related to progressive music, from late 60's psychedelic vibes to early
                    80's electronic wave ; still focusing on the progressive bloom of the 70's and not going further
                    than 1965-1995.
                </Typography>
                <Typography>
                    Only studio albums are featured. No extended plays, compilations, maxis, cover albums, other
                    promotional releases. Live albums are only featured if they mainly consist of new material from the
                    artist, if they are a work in their own right in the discography and not a collection of live
                    interpretations of previously recorded songs in studio.
                </Typography>
                <Typography>
                    This project is designed as a tool to discover albums, the way we would pick up vinyls in music
                    stores, as well as centralizer of what can be found scrapping the web.
                </Typography>
                <Typography>
                    About once a week, I try to grow the collection with more albums if I manage to find information and
                    the time to listen to them.
                </Typography>
                <Typography>
                    If you spot any wrong information or any typo, think of improvements, or would like to leave a sweet
                    comment, please feel free to contact me at benjent@hotmail.fr.
                </Typography>
            </div>

            <section class="about__section">
                <caption class="title title--2">
                    Some criteria clarifications
                </caption>
                <div class="card about__glossary">
                    <dl class="about__glossary__entry" v-for="criterium in glossary" :key="criterium.name">
                        <dt class="about__criterium text text--secondary">{{ criterium.label }}</dt>
                        <dd class="text text--description about__definition">
                            {{ criterium.description }}
                        </dd>
                    </dl>
                    <dl class="about__glossary__entry">
                        <dt class="about__criterium text text--secondary">Language sung</dt>
                        <dd class="text text--description about__definition">
                            Album contains some lyrics or is completely sung in a specific language.
                        </dd>
                    </dl>
                </div>
            </section>
        </main>
    </fade-transition>
</template>

<script>
import { mapState } from "vuex"
import { Heading, Typography } from "@/components"

export default {
    components: { Heading, Typography },
    computed: {
        ...mapState(["criteria"]),
        glossary() {
            return this.criteria.filter((criterium) => criterium.description)
        },
    },
}
</script>

<style lang="scss" scoped>
@import "../style/gatherer";
@import "../style/mixins/page";
@import "../style/modules/card";
@import "../style/modules/text";
@import "../style/modules/title";

.about {
    &__section {
        display: flex;
        flex-direction: column;
        width: 100%;
        margin-bottom: 60px;
        max-width: 860px;
        margin-right: auto;
        margin-left: auto;
        padding: 0 20px;

        &:first-child {
            margin-top: 60px;
        }
    }

    &__heading {
        margin-bottom: 1rem;
    }

    &__glossary {
        display: flex;
        flex-direction: column;

        &__entry {
            display: flex;
            align-items: baseline;
            width: 100%;
        }
    }

    &__criterium {
        width: 30%;
        text-align: right;
        padding-right: var(--label-gap);
        overflow: hidden;
        word-break: break-all;
        text-overflow: ellipsis;
        white-space: nowrap;
        color: $quaternary;
    }

    &__definition {
        padding: 5px;
        width: 70%;
        display: flex;
        align-items: center;
    }
}

@media (max-width: $mobile) {
    .about {
        &__section {
            &:first-child {
                margin-top: 20px;
            }
        }
    }
}
</style>
