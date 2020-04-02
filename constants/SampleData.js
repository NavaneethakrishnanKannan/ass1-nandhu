export const data = {
    title: "SS Hyderabad Biryani",
    desc: "North Indian, Chinese",
    image: "food.png",
    Hiz: 5,
    Lezzet: 8,
    Sunum: 10,
    itemOptions: [
        {
            name: "Min. Paket Tutan",
            count: "25 TL",
            image: "wallet.png"
        },
        {
            name: "Ort. Service Suresi",
            count: "45 dk",
            image: "helmet.png"
        },
        {
            name: "Siparis Saatleri",
            count: "09:00 - 22:00",
            image: "clock.png"
        },
    ]
};

export const accordionOptions = [
    {
        name: "Drumstick Chicken Gravy",
        desc: "A country style gravy which hits the taste bud with the hotness of pepper.",
        tag: "19.90 Rs"
    },
    {
        name: "Drumstick Chicken Gravy",
        desc: "A country style gravy which hits the taste bud with the hotness of pepper.",
        tag: "21.10 Rs"
    },
    {
        name: "Drumstick Chicken Gravy",
        desc: "A country style gravy which hits the taste bud with the hotness of pepper.",
        tag: "30.00 Rs"
    },
];

export const accordionOptionsBiryani = [
    {
        name: "Drumstick Chicken Gravy",
        desc: "A country style gravy which hits the taste bud with the hotness of pepper.",
        tag: "19.90 Rs"
    },
    {
        name: "Drumstick Chicken Gravy",
        desc: "A country style gravy which hits the taste bud with the hotness of pepper.",
        tag: "21.10 Rs"
    },
    {
        name: "Drumstick Chicken Gravy",
        desc: "A country style gravy which hits the taste bud with the hotness of pepper.",
        tag: "30.00 Rs"
    },
];

export const accordionOptionsBBQ = [
    {
        name: "Drumstick Chicken Gravy",
        desc: "A country style gravy which hits the taste bud with the hotness of pepper.",
        tag: "19.90 Rs"
    },
    {
        name: "Drumstick Chicken Gravy",
        desc: "A country style gravy which hits the taste bud with the hotness of pepper.",
        tag: "21.10 Rs"
    },
    {
        name: "Drumstick Chicken Gravy",
        desc: "A country style gravy which hits the taste bud with the hotness of pepper.",
        tag: "30.00 Rs"
    },
];

export const accordionOptionsQuickBite = [
    {
        name: "QuickBite-Drumstick Chicken Gravy",
        desc: "A country style gravy which hits the taste bud with the hotness of pepper.",
        tag: "19.90 Rs"
    },
    {
        name: "QuickBite-Drumstick Chicken Gravy",
        desc: "A country style gravy which hits the taste bud with the hotness of pepper.",
        tag: "21.10 Rs"
    },
    {
        name: "QuickBite-Drumstick Chicken Gravy",
        desc: "A country style gravy which hits the taste bud with the hotness of pepper.",
        tag: "30.00 Rs"
    },
];
export const cartOptions = accordionOptions.map((each, i) => ({
    ...each,
    value: i
}));