import sneaker from '../public/assets/sneakers.jpg'
import movie from '../public/assets/movie.png'
import pizza from '../public/assets/pizza.png'
import ludus from '../public/assets/ludus.png'


export const projectDetail = [
    {
        name: 'Sneakers Addict',
        description: `Réalisation d'un site e-commerce développer pour les amoureux de sneakers`,
        techno: ['react'],
        image: sneaker
    },
    {
        name: 'DevFlix',
        description: `site web type 'netflix qui trie et affiche une liste de film et série en récupérant les donnés depuis une API`,
        techno: ['react'],
        image: movie
    },
    {
        name: 'Wild Pizza',
        description: 'Landing page factice representant une pizzeria et ses desserts',
        techno: ['Html', 'css'],
        image: pizza
    },
    {
        name: 'ludus',
        description: `Location de Gladiateurs: Hackaton de 24H réaliser durant un projet d'école sur le thême passé/futur. `,
        techno: ['react'],
        image: ludus
    }
];