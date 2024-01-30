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
                    <dl class="about__glossary__entry" v-for="data in glossary" :key="data.title">
                        <dt class="about__criterium text text--secondary">{{ data.title }}</dt>
                        <dd class="text text--description about__definition">
                            {{ data.definition }}
                        </dd>
                    </dl>
                </div>
            </section>
        </main>
    </fade-transition>
</template>

<script>
import { criteria } from "../db/criteria"
import { Heading, Typography } from "../components"

export default {
    components: { Heading, Typography },
    data() {
        return {
            criteria,
            glossary: [
                {
                    title: this.$options.filters.criterium(criteria.ARENA),
                    definition:
                        "Album is typical off the 80's and early 90's. Album revolves around keyboards and electronic layers, guitars are secondary, drums may be programmed with a machine.",
                },
                {
                    title: this.$options.filters.criterium(criteria.BAROQUE),
                    definition: "Album contains strings arrangements - british style. Album style is quite cold.",
                },
                {
                    title: this.$options.filters.criterium(criteria.FANFARE),
                    definition: "Album contains brass arrangements - sometimes upbeats sections.",
                },
                {
                    title: this.$options.filters.criterium(criteria.GLITTER),
                    definition: "Album style is keyboard-oriented with high-pitched vocal harmonies.",
                },
                {
                    title: this.$options.filters.criterium(criteria.JAM),
                    definition: "Albums contains music sections that are solos or instrumental improvisations.",
                },
                {
                    title: "Language sung",
                    definition: "Album contains some lyrics or is completely sung in a specific language.",
                },
                {
                    title: this.$options.filters.criterium(criteria.LENGTHY_TRACKS),
                    definition: "Album tracklist is composed of songs that can go over 8 minutes.",
                },
                {
                    title: this.$options.filters.criterium(criteria.PATCHWORK),
                    definition: "Album tracklist is composed of songs of less that 2 minutes.",
                },
                {
                    title: this.$options.filters.criterium(criteria.RENAISSANCE),
                    definition:
                        "Album contains strings arrangements - italian style. Album is rather spectacular, often technical.",
                },
                {
                    title: this.$options.filters.criterium(criteria.ROCK_OPERA),
                    definition:
                        "Album contains songs that do not follow verse and chorus patterns, often upbeat. Album is either a soundtrack opera or feels a bit like theatrical.",
                },
                {
                    title: this.$options.filters.criterium(criteria.SPACY),
                    definition:
                        "Albums contains sections that are a mixture of electronic and psychedelic riffs that loop and evolve progressively.",
                },
                {
                    title: this.$options.filters.criterium(criteria.STORYLINE),
                    definition: "Album follows a story that is narrated.",
                },
                {
                    title: this.$options.filters.criterium(criteria.SYMPHONIC),
                    definition:
                        "Album contains songs that have movements in their structure. Song durations are often long.",
                },
                {
                    title: this.$options.filters.criterium(criteria.UNCOMMON_INSTRUMENTS),
                    definition: `Album contains "non-Rock" instruments: wind or brass instruments, world percussions.`,
                },
            ],
        }
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
