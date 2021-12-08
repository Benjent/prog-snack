import { criteria } from './criteria';

const subgenres = [
    {
        name: 'Afrobeat',
        description: `The subgenre is closely related to artists from around the world that moved to London. It mixes African music with groove and soul, wrapped in long instrumental jams. The music is either chill - almost trippy - or upbeat.`,
        mostRepresentativeAlbum: 'osibisa_osibisa',
        albums: [
            'cymande_promised_heights',
            'carlos_garnett_journey_to_enlightenment',
        ],
        criteria: [criteria.UNCOMMON_INSTRUMENTS, criteria.JAZZY_GROOVY, criteria.JAM, criteria.C_FOLK, criteria.ODD_RHYTHM, criteria.LATINO]
    },
    {
        name: 'Art Pop / Crossover Prog',
        description: `This subgenre will adapt to the music trends when they change. It is lyrics-oriented, vocals are often theatrical; a lot of attention is given to the arrangement to create complex layers of instruments. Albums are almost always well produced, with a distinctive use of the piano. As it follows what is popular, the genre is present throughout all the Prog years, with a Rock influence during all the 70's and a heavy reliance on any kind of electronic music during the 80's and the 90's, resulting in a softer sound.`,
        mostRepresentativeAlbum: 'supertramp_crime_of_the_century',
        albums: [
            'peter_gabriel_car',
            'david_bowie_the_rise_and_fall_of_ziggy_stardust_and_the_spiders_from_mars',
            'the_doors_the_soft_parade',
            'kate_bush_never_for_ever',
        ],
        criteria: [criteria.ART_POP, criteria.BLENDS, criteria.ROCK_OPERA, criteria.FANFARE, criteria.TOUCHING_VOCALS, criteria.ORCHESTRAL_PARTS, criteria.BAROQUE]
    },
    {
        name: 'Avant-Prog / Experimental',
        description: `The boundaries of music of this subgenre are pushed to challenge the listener's mind with unpleasant melodies, sounds, odd vocals, uncommon use of instruments and song destructurations. While the aim of the albums is not to be as enjoyable as usual, albums are overflowed with creativity and specific usage of sounds that design unsettling emotions but disgusting beauty. Avant-Prog was popular in the very late 60's and early 70's as the counterculture movement gained spotlight at this time.`,
        mostRepresentativeAlbum: 'henry_cow_legend',
        albums: [
            'area_arbeit_macht_frei',
            'faust_faust',
            'baba_yaga_collage',
            'soft_machine_third',
        ],
        criteria: [criteria.EXPERIMENTAL, criteria.INSTRUMENTAL, criteria.C_ELECTRO, criteria.C_PSYCHE, criteria.LENGTHY_TRACKS, criteria.SOUND_COLLAGES]
    },
    {
        name: 'Canterbury School / Folk Rock',
        description: `TODO description`,
        mostRepresentativeAlbum: 'caravan_in_the_land_of_grey_and_pink',
        albums: [
            'national_health_national_health',
            'jethro_tull_thick_as_a_brick',
            'camel_camel',
            'matching_mole_matching_mole',
        ],
        criteria: [criteria.FOLK, criteria.C_FOLK, criteria.C_JAZZ, criteria.JAM, criteria.JAZZY_GROOVY, criteria.SOFT, criteria.FUNNY]
    },
    {
        name: 'Classical',
        description: `TODO description`,
        mostRepresentativeAlbum: 'beggars_opera_act_one',
        albums: [
            'the_nice_ars_longa_vita_brevis',
            'gracious_gracious',
        ],
        criteria: [criteria.TECHNICAL, criteria.INSTRUMENTAL, criteria.ODD_RHYTHM, criteria.ORCHESTRAL_PARTS, criteria.FANFARE, criteria.SYMPHONIC, criteria.BAROQUE, criteria.SPECTACULAR]
    },
    {
        name: 'Eclectic',
        description: `TODO description`,
        mostRepresentativeAlbum: 'gentle_giant_acquiring_the_taste',
        albums: [
            'king_crimson_red',
            'alpha_ralpha_alpha_ralpha',
            'jade_warrior_way_of_the_sun',
        ],
        criteria: [criteria.CONCEPT, criteria.C_JAZZ, criteria.C_ELECTRO, criteria.ODD_RHYTHM, criteria.TECHNICAL, criteria.SOPHISTICATED, criteria.UNCOMMON_INSTRUMENTS]
    },
    {
        name: 'Electro Rock',
        description: `TODO description`,
        mostRepresentativeAlbum: 'electric_light_orchestra_time',
        albums: [
            'asia_asia',
            'happy_the_man_happy_the_man',
            'ml_bongers_project_pacific_prison',
            'triumvirat_spartacus',
        ],
        criteria: [criteria.ELECTRO, criteria.C_ELECTRO, criteria.GLITTER, criteria.SCI_FI, criteria.SPECTACULAR]
    },
    {
        name: 'Fantasy / Baroque',
        description: `This short-lived subgenre was influenced by the late 60's British style of blending Pop Rock with Classical instrumentations with a small touch of psychedelism. It often includes bluesy guitar solos and some extended jams, but is overall known for its fake harpsichord sound, string arrengements and easy melodies.`,
        mostRepresentativeAlbum: 'deep_purple_the_book_of_taliesyn',
        albums: [
            'the_moody_blues_days_of_future_passed',
            'the_beatles_yellow_submarine',
            'pink_floyd_the_piper_at_the_gates_of_dawn',
            'fantasy_paint_a_picture',
            // todo Procol Harum
        ],
        criteria: [criteria.C_FOLK, criteria.C_ELECTRO, criteria.FANTASY, criteria.BAROQUE, criteria.ORCHESTRAL_PARTS, criteria.ART_POP, criteria.FANFARE]
    },
    {
        name: 'Folk',
        description: `TODO description`,
        mostRepresentativeAlbum: 'spirogyra_old_boot_wine',
        albums: [
            'comus_first_utterance',
            'tea_and_symphony_jo_sago',
            'fuchsia_fuchsia',
            'love_forever_changes',

        ],
        criteria: [criteria.FOLK, criteria.FANTASY, criteria.SOFT, criteria.HUMBLE, criteria.C_PSYCHE, criteria.BAROQUE]
    },
    {
        name: 'Glitter',
        description: `TODO description`,
        mostRepresentativeAlbum: 'windchase_symphinity',
        albums: [
            'starcastle_starcastle',
            'yes_going_for_the_one',
            'nightwinds_nightwinds',
            'ramses_light_fantastic',
        ],
        criteria: [criteria.GLITTER, criteria.SYMPHONIC, criteria.SPECTACULAR, criteria.C_ELECTRO]
    },
    {
        name: 'Groove / Jazz Fusion',
        description: `TODO description`,
        mostRepresentativeAlbum: 'foehn_faeria',
        albums: [
            'messengers_children_of_tomorrow',
            'return_to_forever_musicmagic',
            'george_duke_feel',
        ],
        criteria: [criteria.JAZZ, criteria.C_ELECTRO, criteria.ODD_RHYTHM, criteria.JAZZY_GROOVY, criteria.SOFT_SEVENTIES, criteria.FEMALE]
    },
    {
        name: 'Heavy',
        description: `TODO description`,
        mostRepresentativeAlbum: 'uriah_heep_demons_and_wizards',
        albums: [
            'rainbow_rising',
            'winterhawk_revival',
            'badger_one_live_badger',
            'nazareth_hair_of_the_dog',
            'budgie_bandolier'

        ],
        criteria: [criteria.HEAVY, criteria.ROCK, criteria.JAM, criteria.FANTASY, criteria.ODD_RHYTHM]
    },
    {
        name: 'Impressionism / Ambient Rock',
        description: `TODO description`,
        mostRepresentativeAlbum: 'jade_warrior_waves',
        albums: [
            'didier_bonin_larbre_verre',
            'carlos_santana_and_alice_coltrane_illuminations',
            'brave_new_world_impressions_on_reading_aldous_huxley',
            'camel_the_snow_goose',
            'miles_davis_aura',
            'john_g_perry_sunset_wading',
        ],
        criteria: [criteria.CONCEPT, criteria.INSTRUMENTAL, criteria.AMBIENT, criteria.UNCOMMON_INSTRUMENTS, criteria.LENGTHY_TRACKS, criteria.SOFT]
    },
    {
        name: 'Jazz Rock / Jazz Fusion',
        description: `TODO description`,
        mostRepresentativeAlbum: 'frank_zappa_hot_rats',
        albums: [
            'return_to_forever_romantic_warrior',
            'weather_report_black_market',
            'gong_gazeuse',
            'herbie_hancock_thrust',
            'il_baricentro_sconcerto',
        ],
        criteria: [criteria.JAZZ, criteria.INSTRUMENTAL, criteria.UNCOMMON_INSTRUMENTS, criteria.JAZZY_GROOVY, criteria.C_ELECTRO, criteria.ODD_RHYTHM, criteria.SOFT]
    },
    // TODO Add Krautrock because Heavy Prog/Kraut rock / stoner is really that (Jane, Dschinn, Dull Knife, ...)
    {
        name: 'New Age / Ambient Electronic',
        description: `TODO description`,
        mostRepresentativeAlbum: 'jean_michel_jarre_oxygene',
        albums: [
            'zanov_in_course_of_time',
            'tangerine_dream_phaedra',
            'ralph_lundsten_alpha_ralpha_boulevard',
            'anna_sjalv_tredje_tussilago_fanfara',
            'vangelis_beaubourg',
            'jade_warrior_at_peace',
            'pythagoras_journey_to_the_vast_unknown',
        ],
        criteria: [criteria.ELECTRO, criteria.AMBIENT, criteria.EXPERIMENTAL, criteria.INSTRUMENTAL, criteria.SOFT, criteria.C_PSYCHE, criteria.SCI_FI, criteria.SOUND_COLLAGES]
    },
    {
        name: 'Neo-Prog',
        description: `TODO description`,
        mostRepresentativeAlbum: 'marillion_script_for_a_jesters_tear',
        albums: [
            'king_crimson_three_of_a_perfect_pair',
            'low_flying_aircraft_low_flying_aircraft',
            'camel_nude',
            'eskaton_4_visions',
            'kaipa_nattdjurstid',
        ],
        criteria: [criteria.ELECTRO, criteria.C_ELECTRO, criteria.ART_POP, criteria.SOFT, criteria.CONCEPT, criteria.TOUCHING_VOCALS, criteria.NEO_EIGHTIES]
    },
    {
        name: 'Occult / Heavy',
        description: `TODO description`,
        mostRepresentativeAlbum: 'black_widow_sacrifice',
        albums: [
            'black_sabbath_black_sabbath',
            'coven_witchcraft_destroys_minds_and_reaps_souls',
            'sir_lord_baltimore_kingdom_come',
            'warhorse_warhorse',
            'aphrodites_child_666',
        ],
        criteria: [criteria.OCCULT, criteria.HEAVY, criteria.C_PSYCHE, criteria.ROCK, criteria.C_FOLK, criteria.JAM]
    },
    {
        name: 'Opera Rock / Fanfare',
        description: `TODO description`,
        mostRepresentativeAlbum: 'roger_glover_the_butterfly_ball_and_the_grasshoppers_feast',
        albums: [
            'queen_queen_ii',
            'the_crazy_world_of_arthur_brown_the_crazy_world_of_arthur_brown',
            'frank_zappa_joes_garage',
            'roy_wood_mustard',
            'wizzard_wizzard_brew',
            'andrew_lloyd_webber_and_tim_rice_jesus_christ_superstar',
            'la_revolution_francaise_la_revolution_francaise',
        ],
        criteria: [criteria.ROCK_OPERA, criteria.ART_POP, criteria.BLENDS, criteria.FANFARE, criteria.ORCHESTRAL_PARTS, criteria.BAROQUE, criteria.TRANSITION, criteria.STORYLINE]
    },
    {
        name: 'Progcore / Small Symphonic',
        description: `TODO description`,
        mostRepresentativeAlbum: 'kaipa_kaipa',
        albums: [
            'camel_moonmadness',
            'canamii_concept',
            'emerson_lake_and_palmer_emerson_lake_and_palmer',
            'focus_moving_waves',
            'genesis_a_trick_of_the_tail',
            'gnidrolog_lady_lake',
            'harmonium_si_on_avait_besoin_dune_cinquieme_saison',
            'ikarus_ikarus',
            'khan_space_shanty',
            'miklagard_miklagard',
            'pink_floyd_dark_side_of_the_moon',
            'robert_connolly_plateau',
            'indian_summer_indian_summer',
        ],
        criteria: [criteria.SYMPHONIC, criteria.SPECTACULAR, criteria.SOPHISTICATED, criteria.TECHNICAL, criteria.C_JAZZ, criteria.C_ELECTRO, criteria.ODD_RHYTHM]
    },
    {
        name: 'Psychedelic',
        description: `TODO description`,
        mostRepresentativeAlbum: 'gong_flying_teapot',
        albums: [
            'can_tago_mago',
            'sweet_smoke_just_a_poke',
            'frank_zappa_were_only_in_it_for_the_money',
            'amon_duul_paradieswarts_duul',
            'the_incredible_string_band_the_5000_spirits_or_the_layers_of_the_onion',
            'jefferson_airplane_crown_of_creation',
            'ultimate_spinach_ultimate_spinach',
            'may_blitz_may_blitz',
        ],
        criteria: [criteria.C_PSYCHE, criteria.AMBIENT, criteria.PATCHWORK, criteria.C_FOLK, criteria.CRISPY_SIXTIES, criteria.SOFT]
    },
    {
        name: 'Renaissance',
        description: `TODO description`,
        mostRepresentativeAlbum: 'semiramis_dedicato_a_frazz',
        albums: [
            'arti_mestieri_giro_di_valzer_per_domani',
            'ange_au_dela_du_delire',
            'banco_del_mutuo_soccorso_darwin',
        ],
        criteria: [criteria.MEDIEVAL, criteria.C_JAZZ, criteria.C_FOLK, criteria.ODD_RHYTHM, criteria.FANFARE, criteria.SYMPHONIC, criteria.SPECTACULAR, criteria.BAROQUE, criteria.TECHNICAL]
    },
    {
        name: 'Rock',
        description: `TODO description`,
        mostRepresentativeAlbum: 'titus_groan_titus_groan',
        albums: [
            'fuzzy_duck_fuzzy_duck',
            'deep_purple_machine_head',
            'atomic_rooster_in_hearing_of_atomic_rooster',
            'man_be_good_to_yourself_at_least_once_a_day',
            'grateful_dead_terrapin_station',
            'klaatu_hope',
            'journey_journey',
            'led_zeppelin_led_zeppelin_iv',
            'guns_and_butter_guns_and_butter',
        ],
        criteria: [criteria.ROCK, criteria.C_FOLK, criteria.ODD_RHYTHM, criteria.JAM, criteria.JAZZY_GROOVY, criteria.HEAVY]
    },
    {
        name: 'Space Rock',
        description: `Often heavy, this subgenre is based on hypnotic loops and intense electronic effects to create a spacy immersion. Tracks are moderately long to give the music time to take off, musicians to experiment with sound effects and play around with theme and variations.`,
        mostRepresentativeAlbum: 'hawkwind_doremi_fasol_latido',
        albums: [
            'nektar_a_tab_in_the_ocean',
            'ozric_tentacles_strangeitude',
        ],
        criteria: [criteria.SPACY, criteria.SCI_FI, criteria.ROCK, criteria.C_ELECTRO, criteria.C_PSYCHE, criteria.INSTRUMENTAL, criteria.LENGTHY_TRACKS, criteria.HEAVY, criteria.AMBIENT]
    },
    {
        name: 'Symphonic',
        description: `TODO description`,
        mostRepresentativeAlbum: 'yes_close_to_the_edge',
        albums: [
            'mike_oldfield_hergest_ridge',
            'bubu_anabelas',
            'van_der_graaf_generator_h_to_he_who_am_the_only_one',
            'emerson_lake_and_palmer_tarkus',
            'eloy_ocean',
        ],
        criteria: [criteria.SYMPHONIC, criteria.CONCEPT, criteria.SCI_FI, criteria.FANTASY, criteria.C_JAZZ, criteria.C_ELECTRO, criteria.TECHNICAL, criteria.LENGTHY_TRACKS, criteria.ODD_RHYTHM, criteria.ROCK_OPERA, criteria.SPECTACULAR, criteria.ORCHESTRAL_PARTS]
    },
    {
        name: 'Zeuhl',
        description: `This subgenre draws its name from the language invented by Christian Vander and is closely related to the French scene of the early 70's. It defines music that on one hand is spectacular, like a Rock opera, with heavy percussions and intense, mezmerizing eerie chants; and on the other hand is spiritual, celestial, cosmic, forseeing dystopian scenes. Albums are structured as symphonies with long tracks that tell stories for most cases.`,
        mostRepresentativeAlbum: 'magma_mekanik_destruktiw_kommandoh',
        albums: [
            'weidorje_weidorje',
            'laurent_thibault_mais_on_ne_peut_pas_rever_tout_le_temps',
        ],
        criteria: [criteria.ZEUHL, criteria.SPECTACULAR, criteria.ROCK_OPERA, criteria.SCI_FI, criteria.LENGTHY_TRACKS, criteria.CONCEPT, criteria.C_PSYCHE, criteria.EXPERIMENTAL, criteria.FANFARE, criteria.C_JAZZ, criteria.SYMPHONIC]
    },
]

export default subgenres