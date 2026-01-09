import shiny1 from '../assets/shiny1.jpg';
import dry from '../assets/dry.jpg';
import normal from '../assets/normal.jpg';
import combination from '../assets/combination.jpg';
import oilyOften from '../assets/oily-often.jpg';
import tZone from '../assets/t-zone.jpg';
import oilyShiny from '../assets/oily-shiny.jpg';
import dryFlaky from '../assets/dry-flaky.jpg';
import normalFresh from '../assets/normal-fresh.jpg';
import comShiny from '../assets/com-shiny.jpg';

const quizData = [
    {
        id: 1,
        question: "How does your skin feel a few hours after washing your face?",
        options: [
            {
                id: "oily",
                label: "Greasy / Shiny",
                image: shiny1,
            },
            {
                id: "dry",
                label: "Tight / Dry",
                image: dry,
            },
            {
                id: "normal",
                label: "Comfortable / Soft",
                image: normal,
            },
            {
                id: "combination",
                label: "Oily in some areas, dry in others",
                image: combination,
            },
        ],
    },
    {
        id: 2,
        question: "How often does your skin get oily during the day?",
        options: [
            {
                id: "oily",
                label: "Very often",
                image: oilyOften,
            },
            {
                id: "combination",
                label: "Only T-zone area",
                image: tZone,
            },
            {
                id: "normal",
                label: "Rarely",
                image: normal,
            },
            {
                id: "dry",
                label: "Never",
                image: dry,
            },
        ],
    },
    {
        id: 3,
        question: "How does your skin look by the end of the day?",
        options: [
            {
                id: "oily",label: "Shiny",image: oilyShiny,
            },
            {
                id: "dry",
                label: "Dull or flaky",
                image: dryFlaky,
            },
            {
                id: "normal",
                label: "Fresh and balanced",
                image: normalFresh,
            },
            {
                id: "combination",
                label: "Shiny in some areas",
                image: comShiny,
            },
        ],
    },
];


export default quizData;