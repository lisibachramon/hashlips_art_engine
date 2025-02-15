const basePath = process.cwd();
const {MODE} = require(`${basePath}/constants/blend_mode.js`);
const {NETWORK} = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "Test ramon ";
const description = "Remember to pull out";
const baseUri = "ipfs://QmcQBTKNaW3kSBBwCard8cbJEfZayuMT5cB4Kn8qDgFUnR";

const solanaMetadata = {
    symbol: "YC",
    seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
    external_url: "https://lisibach.xyz",
    creators: [
        {
            address: "0xAc9f60e0C1afE93DBD3C59A968e5C46A6093DFFB",
            share: 100,
        },
    ],
};

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
    {
        growEditionSizeTo: 100,
        layersOrder: [
            {name: "Planet Background"},
            {name: "Planet"},
            {name: "Planet Form"},
            {name: "Planet Surface"},
            {name: "Planet Atmosphere"},
            {name: "Planet Ring"},
            {name: "Planet Moon"},
        ],
    }, {
        growEditionSizeTo: 102,
        layersOrder: [
            {name: "Sun"},
            {name: "Sun Form"},
        ],
    },
];

const shuffleLayerConfigurations = false;

const debugLogs = false;

const format = {
    width: 512,
    height: 512,
    smoothing: false,
};

const gif = {
    export: false,
    repeat: 0,
    quality: 100,
    delay: 500,
};

const text = {
    only: false,
    color: "#ffffff",
    size: 20,
    xGap: 40,
    yGap: 40,
    align: "left",
    baseline: "top",
    weight: "regular",
    family: "Courier",
    spacer: " => ",
};

const pixelFormat = {
    ratio: 2 / 128,
};

const background = {
    generate: false,
    brightness: "80%",
    static: false,
    default: "#000000",
};

const extraMetadata = {
    artist: "Vodoo"
};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
    thumbPerRow: 5,
    thumbWidth: 50,
    imageRatio: format.height / format.width,
    imageName: "preview.png",
};

const preview_gif = {
    numberOfImages: 5,
    order: "ASC", // ASC, DESC, MIXED
    repeat: 0,
    quality: 100,
    delay: 500,
    imageName: "preview.gif",
};

module.exports = {
    format,
    baseUri,
    description,
    background,
    uniqueDnaTorrance,
    layerConfigurations,
    rarityDelimiter,
    preview,
    shuffleLayerConfigurations,
    debugLogs,
    extraMetadata,
    pixelFormat,
    text,
    namePrefix,
    network,
    solanaMetadata,
    gif,
    preview_gif,
};
