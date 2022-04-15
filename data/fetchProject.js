import sneaker from '../public/assets/sneakers.jpg'
import movie from '../public/assets/movie.png'
import pizza from '../public/assets/pizza.png'
import ludus from '../public/assets/ludus.png'


export const projectDetail = [
    {
        name: 'Sneakers Addict',
        description: `Réalisation d'un site e-commerce développer pour les amoureux de sneakers.`,
        techno: ['react'],
        image: sneaker,
        web: 'https://sneakers-addict-a8f97.web.app/',
        github: 'https://github.com/MaulineYoann/sneackers-addict'
    },
    {
        name: 'DevFlix',
        description: `site web type 'netflix qui trie et affiche une liste de film et série en récupérant les donnés depuis une API.`,
        techno: ['react'],
        image: movie,
        web: 'https://wild-movie.netlify.app/',
        github: 'https://github.com/MaulineYoann/movie-app'
    },
    {
        name: 'Wild Pizza',
        description: 'Landing page factice representant une pizzeria et ses desserts.',
        techno: ['Html', 'css'],
        image: pizza,
        web: 'https://wild-pizza.netlify.app/',
        github: 'https://github.com/MaulineYoann/Wild-pizza',
    },
    {
        name: 'ludus',
        description: `Location de Gladiateurs: Hackaton de 24H réaliser durant un projet d'école sur le thême passé/futur. `,
        techno: ['react'],
        image: ludus,
        web: 'https://lugus-findus-chevalus.netlify.app/',
        github: 'https://github.com/BenSbnt/Les-Esclavagistes'
    }
];