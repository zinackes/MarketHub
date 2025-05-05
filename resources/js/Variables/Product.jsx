// Renvoie le formulaire produit de base avec les données passées
export const getProductForm = (product = {}) => ({
    name: product.name || '',
    slug: product.slug || '',
    description: product.description || '',
    price: product.price || '',
    brand: product.brand || '',
    stock_quantity: product.stock_quantity || '',
    category_id: product.category_id || '',
});

export const getProductDetailForm = (productDetails = {}) => ([
    {
        size: productDetails.size || '',
        material: productDetails.material || '',
        gender: productDetails.gender || '',
        season: productDetails.season || '',
        type: productDetails.type || '',
    },
    {
        model: productDetails.model || '',
        condition: productDetails.condition || '',
        warranty: productDetails.warranty || '',
        capacity: productDetails.capacity || '',
        device_type: productDetails.device_type || '',
    },
    {
        type: productDetails.type || '',
        material: productDetails.material || '',
    },
    {
        type: productDetails.type || '',
        material: productDetails.material || '',
        dimensions: productDetails.dimensions || '',
        condition: productDetails.condition || '',
    },
    {
        age_recommendation: productDetails.age_recommendation || '',
        toy_type: productDetails.toy_type || '',
        material: productDetails.material || '',
        dimensions: productDetails.dimensions || '',
        gender: productDetails.gender || '',
    },
    {
        product_type: productDetails.product_type || '',
        volume: productDetails.volume || '',
        main_ingredients: productDetails.main_ingredients || '',
        target: productDetails.target || '',
    },
    {
        food_type: productDetails.food_type || '',
        weight_volume: productDetails.weight_volume || '',
        expiration_date: productDetails.expiration_date || '',
        is_organic: productDetails.is_organic || '',
        allergens: productDetails.allergens || '',
    }
]);

export const electronics = [
    {
        id: 1,
        label: 'Modèle',
        name: 'model',
        placeholder: 'Entrez le modèle exact de votre produit',
    },
    {
        id: 2,
        label: 'État',
        name: 'condition',
        placeholder: "Indiquez l'état du produit (neuf, reconditionné, usagé...)",
    },
    {
        id: 3,
        label: 'Garantie',
        name: 'warranty',
        placeholder: 'Durée de la garantie de votre produit (en mois ou années)',
    },
    {
        id: 4,
        label: 'Capacité',
        name: 'capacity',
        placeholder: 'Capacité de votre produit (ex : 256Go, 500L...)',
    },
    {
        id: 5,
        label: "Type d'appareil",
        name: 'device_type',
        placeholder: 'Spécifiez le type d\'appareil (ex : téléphone, ordinateur, etc.)',
    }
];

export const clothings = [
    {
        id: 0,
        label: "Taille",
        name: "size",
        placeholder: "Exemple : S, M, L, XL, 38...",
    },
    {
        id: 1,
        label: "Matière",
        name: "material",
        placeholder: "Indiquez le tissu ou matériau (coton, cuir, laine, etc.)",
    },
    {
        id: 2,
        label: "Genre",
        name: "gender",
        placeholder: "Indiquez pour quel genre le vêtement est destiné (homme, femme, unisexe)",
    },
    {
        id: 3,
        label: "Saison",
        name: "season",
        placeholder: "Saison adaptée pour ce vêtement (été, hiver, toutes saisons...)",
    },
    {
        id: 4,
        label: "Type de vêtement",
        name: "type",
        placeholder: "Exemple : Pantalon, Veste, Robe, T-shirt...",
    },
];

export const accesories = [
    {
        id: 0,
        label: "Type d'accessoire",
        name: "type",
        placeholder: "Entrez le type d'accessoire (sac, montre, ceinture...)",
    },
    {
        id: 1,
        label: "Matière",
        name: "material",
        placeholder: "Spécifiez le matériau (cuir, métal, tissu, etc.)",
    },
    {
        id: 2,
        label: "Genre",
        name: "gender",
        placeholder: "Indiquez pour quel genre l'accessoire est destiné (homme, femme, unisexe)",
    },
];

export const homeFurniture = [
    {
        id: 0,
        label: "Type",
        name: "type",
        placeholder: "Exemple : Canapé, Bureau, Chaise, Table basse, Bibliothèque...",
    },
    {
        id: 1,
        label: "Matière",
        name: "material",
        placeholder: "Exemple : Bois, Métal, Cuir, Tissu, Verre...",
    },
    {
        id: 2,
        label: "Dimensions",
        name: "dimensions",
        placeholder: "Exemple : 200 cm x 90 cm x 80 cm (longueur x largeur x hauteur)",
    },
    {
        id: 3,
        label: "État",
        name: "condition",
        placeholder: "Neuf, Reconditionné, Usagé, Bon état...",
    },
];

export const toys = [
    {
        id: 0,
        label: "Âge recommandé",
        name: "age_recommendation",
        placeholder: "Exemple : 3 ans et plus, 6-12 ans, dès la naissance...",
    },
    {
        id: 1,
        label: "Type de jouet",
        name: "toy_type",
        placeholder: "Exemple : Puzzle, Figurine, Jeu de société, Peluche...",
    },
    {
        id: 2,
        label: "Matière",
        name: "material",
        placeholder: "Exemple : Bois, Plastique, Tissu, Métal...",
    },
    {
        id: 3,
        label: "Dimensions",
        name: "dimensions",
        placeholder: "Exemple : 30 cm x 20 cm x 15 cm (L x l x h)",
    },
    {
        id: 4,
        label: "Genre",
        name: "gender",
        placeholder: "Indiquez le genre si nécessaire (fille, garçon, unisexe)",
    },
];


export const beautyProducts = [
    {
        id: 0,
        label: "Type de produit",
        name: "product_type",
        placeholder: "Exemple : Crème hydratante, Sérum, Shampoing, Démaquillant...",
    },
    {
        id: 1,
        label: "Volume",
        name: "volume",
        placeholder: "Exemple : 50 ml, 200 ml, 1 L...",
    },
    {
        id: 2,
        label: "Ingrédients principaux",
        name: "main_ingredients",
        placeholder: "Exemple : Aloe vera, Acide hyaluronique, Huile d’argan...",
    },
    {
        id: 3,
        label: "Cible",
        name: "target",
        placeholder: "Exemple : Peau sensible, Cheveux secs, Tous types de peaux...",
    },
];

export const foodProducts = [
    {
        id: 0,
        label: "Type d'aliment",
        name: "food_type",
        placeholder: "Exemple : Biscuits, Jus de fruit, Pâtes, Fromage...",
    },
    {
        id: 1,
        label: "Poids / Volume",
        name: "weight_volume",
        placeholder: "Exemple : 500 g, 1 kg, 1 L...",
    },
    {
        id: 2,
        label: "Date d'expiration",
        name: "expiration_date",
        placeholder: "JJ/MM/AAAA",
    },
    {
        id: 3,
        label: "Produit biologique",
        name: "is_organic",
        placeholder: "Cochez si le produit est bio",
        type: "checkbox", // utile si tu veux afficher une case à cocher
    },
    {
        id: 4,
        label: "Allergènes",
        name: "allergens",
        placeholder: "Exemple : Gluten, Lactose, Arachides...",
    },
];
