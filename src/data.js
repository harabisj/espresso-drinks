const start_actions = [{title: 'Zpět na začátek', page: 'milk' }];

export const pages = {
    // Questions
    milk: {
        title: 'Mléko',
        description: 'Měl by výsledný nápoj zahrnovat šlehané mléko?',
        actions: [
            {
                title: 'S mlékem',
                page: 'milk_size',
            },
            {
                title: 'Bez mléka',
                page: 'size',
            },
        ],
    },
    milk_size: {
        title: 'Velikost',
        description: 'Měl by výsledný nápoj být malý (60 ml), střední (150 - 180 ml) nebo velký (> 200 ml)?',
        actions: [
            {
                title: 'Malý',
                page: 'espresso_macchiato',
            },
            {
                title: 'Střední',
                page: 'milk_strength'
            },
            {
                title: 'Velký',
                page: 'latte_macchiato',
            },
        ],
    },
    milk_strength: {
        title: 'Síla',
        description: 'Měl by výsledný nápoj být středně silný nebo více silný?',
        actions: [
            {
                title: 'Středně',
                page: 'cappuccino',
            },
            {
                title: 'Více',
                page: 'flat_white',
            },
        ],
    },
    size: {
        title: 'Velikost',
        description: 'Měl by výsledný nápoj být malý (30 - 60 ml), nebo velký (> 150 ml)?',
        actions: [
            {
                title: 'Malý',
                page: 'strength',
            },
            {
                title: 'Velký',
                page: 'americano',
            },
        ],
    },
    strength: {
        title: 'Síla',
        description: 'Měl by výsledný nápoj být středně silný nebo více silný?',
        actions: [
            {
                title: 'Středně',
                page: 'ice_cream',
            },
            {
                title: 'Více',
                page: 'espresso_doppio',
            },
        ],
    },
    ice_cream: {
        title: 'Zmrzlina',
        description: 'Měl by výsledný nápoj obsahovat zmrzlinu?',
        actions: [
            {
                title: 'Ano',
                page: 'affogato',
            },
            {
                title: 'Ne',
                page: 'espresso',
            },
        ],
    },

    // Drinks
    espresso_macchiato: {
        title: 'Espresso Macchiato',
        actions: start_actions,
        image: 'https://www.piccoloneexistuje.cz/userfiles/napoje_detail/macchiato_moderni_v2.png',
    },
    latte_macchiato: {
        title: 'Latte Macchiato',
        actions: start_actions,
        image: 'https://www.piccoloneexistuje.cz/userfiles/napoje_detail/latte_macchiato.png',
    },
    cappuccino: {
        title: 'Cappucino',
        actions: start_actions,
        image: 'https://www.piccoloneexistuje.cz/userfiles/napoje_detail/cappuccino_moderni_v2.png',
    },
    flat_white: {
        title: 'Flat White',
        actions: start_actions,
        image: 'https://www.piccoloneexistuje.cz/userfiles/napoje_detail/flat_white.png',
    },
    americano: {
        title: 'Ameriacno',
        actions: start_actions,
        image: 'https://www.piccoloneexistuje.cz/userfiles/napoje_detail/americano_v2.png',
    },
    espresso_doppio: {
        title: 'Espresso Doppio',
        actions: start_actions,
        image: 'https://www.piccoloneexistuje.cz/userfiles/napoje_detail/doppio_v3.png',
    },
    affogato: {
        title: 'Affogato',
        actions: start_actions,
    },
    espresso: {
        title: 'Espresso',
        actions: start_actions,
        image: 'https://www.piccoloneexistuje.cz/userfiles/napoje_detail/espresso_v3.png',
    },
}