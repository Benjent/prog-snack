<template>
    <section class="l-about">
        <h2>Hi!</h2>
    
        <p>
            Would You Like A Snack is a tiny web project with big music ambitions: dusting old prog albums, known as prog gems, to make them shine beside classic albums.
        </p>
        <p>
            Prog albums are anything related to progressive music, from late 60's psychedelic vibes to early 80's electronic wave ; still focusing on the progressive bloom of the 70's and not going further than 1965-1995.
        </p>
        <p>
            This project is designed as a tool to discover albums, the way we would pick up vinyls in music stores, as well as centralizer of what can be found scrapping the web.
        </p>
        <p>
            Each week, I try to grow the collection with more albums if I manage to find information and the time to listen to them.
        </p>
        <p>
            If you spot any wrong information or any typo, think of improvements, or would like to leave a sweet comment, please feel free to contact me at benjent@hotmail.fr.
        </p>

        <div class="l-about__glossary">
            <caption class="l-about__caption">Some criteria clarifications</caption>
            <div class="l-about__glossary-body">
                <div class="l-about__glossary-entry">
                    <div class="l-about__criterium">{{ criteria.ARENA | criterium }}</div>
                    <div class="l-about__definition">Album is typical off the 80's and early 90's. Album revolves around keyboards and electronic layers, guitars are secondary, drums may be programmed with a machine.</div>
                </div>
                <div class="l-about__glossary-entry">
                    <div class="l-about__criterium">{{ criteria.BAROQUE | criterium }}</div>
                    <div class="l-about__definition">Album contains strings arrangements - british style. Album style is quite cold.</div>
                </div>
                <div class="l-about__glossary-entry">
                    <div class="l-about__criterium">{{ criteria.FANFARE | criterium }}</div>
                    <div class="l-about__definition">Album contains brass arrangements - sometimes upbeats sections.</div>
                </div>
                <div class="l-about__glossary-entry">
                    <div class="l-about__criterium">{{ criteria.GLITTER | criterium }}</div>
                    <div class="l-about__definition">Album style is keyboard-oriented with high-pitched vocal harmonies.</div>
                </div>
                <div class="l-about__glossary-entry">
                    <div class="l-about__criterium">{{ criteria.JAM | criterium }}</div>
                    <div class="l-about__definition">Albums contains music sections that are solos or instrumental improvisations.</div>
                </div>
                <div class="l-about__glossary-entry">
                    <div class="l-about__criterium">Language sung</div>
                    <div class="l-about__definition">Album contains some lyrics or is completely sung in a specific language.</div>
                </div>
                <div class="l-about__glossary-entry">
                    <div class="l-about__criterium">{{ criteria.LENGTHY_TRACKS | criterium }}</div>
                    <div class="l-about__definition">Album tracklist is composed of songs that can go over 8 minutes.</div>
                </div>
                <div class="l-about__glossary-entry">
                    <div class="l-about__criterium">{{ criteria.PATCHWORK | criterium }}</div>
                    <div class="l-about__definition">Album tracklist is composed of songs of less that 2 minutes.</div>
                </div>
                <div class="l-about__glossary-entry">
                    <div class="l-about__criterium">{{ criteria.RENAISSANCE | criterium }}</div>
                    <div class="l-about__definition">Album contains strings arrangements - italian style. Album is rather spectacular, often technical.</div>
                </div>
                <div class="l-about__glossary-entry">
                    <div class="l-about__criterium">{{ criteria.ROCK_OPERA | criterium }}</div>
                    <div class="l-about__definition">Album contains songs that do not follow verse and chorus patterns, often upbeat. Album is either a soundtrack opera or feels a bit like theatrical.</div>
                </div>
                <div class="l-about__glossary-entry">
                    <div class="l-about__criterium">{{ criteria.SPACY | criterium }}</div>
                    <div class="l-about__definition">Albums contains sections that are a mixture of electronic and psychedelic riffs that loop and evolve progressively.</div>
                </div>
                <div class="l-about__glossary-entry">
                    <div class="l-about__criterium">{{ criteria.STORYLINE | criterium }}</div>
                    <div class="l-about__definition">Album follows a story that is narrated.</div>
                </div>
                <div class="l-about__glossary-entry">
                    <div class="l-about__criterium">{{ criteria.SYMPHONIC | criterium }}</div>
                    <div class="l-about__definition">Album contains songs that have movements in their structure. Song durations are often long.</div>
                </div>
                <div class="l-about__glossary-entry">
                    <div class="l-about__criterium">{{ criteria.UNCOMMON_INSTRUMENTS | criterium }}</div>
                    <div class="l-about__definition">Album contains "non-Rock" instruments: wind or brass instruments, world percussions.</div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { criteria } from '../db/criteria.js';

export default {
    data() {
        return {
            criteria,
        }
    },
}
</script>

<style lang="scss">
@import '../style/gatherer';

.l-about {
    max-width: 860px;
    margin: 0 auto;
    padding: 60px;

    &__glossary {
        display: flex;
        flex-direction: column;
        width: 100%;
        margin-top: 60px;

        &-body {
            display: flex;
            flex-direction: column;
        }

        &-entry {
            display: flex;
            align-items: baseline;
            width: 100%;
        }
    }

    &__caption {
        padding-bottom: 50px;
    }

    &__criterium {
        width: 30%;
        text-align: right;
        padding-right: 10px;
        overflow: hidden;
        word-break: break-all;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    &__definition {
        font-style: italic;
        padding: 5px;
        width: 70%;
        display: flex;
        align-items: center;
        box-sizing: border-box;
    }
}
</style>
