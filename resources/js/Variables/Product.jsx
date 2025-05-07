// Renvoie le formulaire produit de base avec les données passées
export const getProductData = (product = {}) => ({
    name: product?.variant.name || '',
    slug: product?.variant.slug || '',
    color: product?.variant.color || '',
    description: product?.variant.description || '',
    price: product?.variant.price || '',
    brand: product?.product.brand || '',
    stock_quantity: product?.variant.stock_quantity || '',
    category_id: product?.product.category_id || '',
});

export const getProductDetailData = (productDetails, category_id = {}) => {
    switch(category_id) {
        case 1:
            return getElectronics(productDetails);
        case 2:
            return getClothings(productDetails);
        case 3:
            return getAccessories(productDetails);
        case 4:
            return getHomeFurnitures(productDetails);
        case 5:
            return getToys(productDetails);
        case 6:
            return getBeautyCares(productDetails);
        case 7:
            return getFoods(productDetails);
        default:
            return [];
    }
};


export const getElectronics = (productDetails = {}) => ([
    {
        id: 1,
        label: 'Modèle',
        name: 'model',
        placeholder: 'Entrez le modèle exact de votre produit',
        value: productDetails?.model || ''
    },
    {
        id: 2,
        label: 'État',
        name: 'condition',
        placeholder: "Indiquez l'état du produit (neuf, reconditionné, usagé...)",
        value: productDetails?.condition || ''
    },
    {
        id: 3,
        label: 'Garantie',
        name: 'warranty',
        placeholder: 'Durée de la garantie de votre produit (en mois ou années)',
        value: productDetails?.warranty || ''
    },
    {
        id: 4,
        label: 'Capacité',
        name: 'capacity',
        placeholder: 'Capacité de votre produit (ex : 256Go, 500L...)',
        value: productDetails?.capacity || ''
    },
    {
        id: 5,
        label: "Type d'appareil",
        name: 'device_type',
        placeholder: 'Spécifiez le type d\'appareil (ex : téléphone, ordinateur, etc.)',
        value: productDetails?.device_type || ''
    }
]);

export const getClothings = (productDetails = {}) => ( [
    {
        id: 0,
        label: "Taille",
        name: "size",
        placeholder: "Exemple : S, M, L, XL, 38...",
        value: productDetails?.size || '',
    },
    {
        id: 1,
        label: "Matière",
        name: "material",
        placeholder: "Indiquez le tissu ou matériau (coton, cuir, laine, etc.)",
        value: productDetails?.material || ''
    },
    {
        id: 2,
        label: "Genre",
        name: "gender",
        placeholder: "Indiquez pour quel genre le vêtement est destiné (homme, femme, unisexe)",
        value: productDetails?.gender || ''
    },
    {
        id: 3,
        label: "Saison",
        name: "season",
        placeholder: "Saison adaptée pour ce vêtement (été, hiver, toutes saisons...)",
        value: productDetails?.season || ''
    },
    {
        id: 4,
        label: "Type de vêtement",
        name: "type",
        placeholder: "Exemple : Pantalon, Veste, Robe, T-shirt...",
        value: productDetails?.type || ''
    },
]);

export const getAccessories = (productDetails = {}) => ([
    {
        id: 0,
        label: "Type d'accessoire",
        name: "type",
        placeholder: "Entrez le type d'accessoire (sac, montre, ceinture...)",
        value: productDetails?.type || ''
    },
    {
        id: 1,
        label: "Matière",
        name: "material",
        placeholder: "Spécifiez le matériau (cuir, métal, tissu, etc.)",
        value: productDetails?.material || ''
    },
    {
        id: 2,
        label: "Genre",
        name: "gender",
        placeholder: "Indiquez pour quel genre l'accessoire est destiné (homme, femme, unisexe)",
        value: productDetails?.gender || ''
    },
]);

export const getHomeFurnitures = (productDetails = {}) => ( [
    {
        id: 0,
        label: "Type",
        name: "type",
        placeholder: "Exemple : Canapé, Bureau, Chaise, Table basse, Bibliothèque...",
        value: productDetails?.type || ''
    },
    {
        id: 1,
        label: "Matière",
        name: "material",
        placeholder: "Exemple : Bois, Métal, Cuir, Tissu, Verre...",
        value: productDetails?.material || ''
    },
    {
        id: 2,
        label: "Dimensions",
        name: "dimensions",
        placeholder: "Exemple : 200 cm x 90 cm x 80 cm (longueur x largeur x hauteur)",
        value: productDetails?.dimensions || ''
    },
    {
        id: 3,
        label: "État",
        name: "condition",
        placeholder: "Neuf, Reconditionné, Usagé, Bon état...",
        value: productDetails?.condition || ''
    },
]);

export const getToys = (productDetails = {}) => ( [
    {
        id: 0,
        label: "Âge recommandé",
        name: "age_recommendation",
        placeholder: "Exemple : 3 ans et plus, 6-12 ans, dès la naissance...",
        value: productDetails?.age_recommendation || ''
    },
    {
        id: 1,
        label: "Type de jouet",
        name: "toy_type",
        placeholder: "Exemple : Puzzle, Figurine, Jeu de société, Peluche...",
        value: productDetails?.toy_type || ''
    },
    {
        id: 2,
        label: "Matière",
        name: "material",
        placeholder: "Exemple : Bois, Plastique, Tissu, Métal...",
        value: productDetails?.material || ''
    },
    {
        id: 3,
        label: "Dimensions",
        name: "dimensions",
        placeholder: "Exemple : 30 cm x 20 cm x 15 cm (L x l x h)",
        value: productDetails?.dimensions || ''
    },
    {
        id: 4,
        label: "Genre",
        name: "gender",
        placeholder: "Indiquez le genre si nécessaire (fille, garçon, unisexe)",
        value: productDetails?.gender || ''
    },
]);


export const getBeautyCares = (productDetails = {}) => ([
    {
        id: 0,
        label: "Type de produit",
        name: "product_type",
        placeholder: "Exemple : Crème hydratante, Sérum, Shampoing, Démaquillant...",
        value: productDetails?.product_type || ''
    },
    {
        id: 1,
        label: "Volume",
        name: "volume",
        placeholder: "Exemple : 50 ml, 200 ml, 1 L...",
        value: productDetails?.volume || ''
    },
    {
        id: 2,
        label: "Ingrédients principaux",
        name: "main_ingredients",
        placeholder: "Exemple : Aloe vera, Acide hyaluronique, Huile d’argan...",
        value: productDetails?.main_ingredients || ''
    },
    {
        id: 3,
        label: "Cible",
        name: "target",
        placeholder: "Exemple : Peau sensible, Cheveux secs, Tous types de peaux...",
        value: productDetails?.target || ''
    },
]);

export const getFoods = (productDetails = {}) => ([
    {
        id: 0,
        label: "Type d'aliment",
        name: "food_type",
        placeholder: "Exemple : Biscuits, Jus de fruit, Pâtes, Fromage...",
        value: productDetails?.food_type || ''
    },
    {
        id: 1,
        label: "Poids / Volume",
        name: "weight_volume",
        placeholder: "Exemple : 500 g, 1 kg, 1 L...",
        value: productDetails?.weight_volume || ''
    },
    {
        id: 2,
        label: "Date d'expiration",
        name: "expiration_date",
        placeholder: "JJ/MM/AAAA",
        value: productDetails?.expiration_date || ''
    },
    {
        id: 3,
        label: "Produit biologique",
        name: "is_organic",
        placeholder: "Cochez si le produit est bio",
        type: "checkbox", // utile si tu veux afficher une case à cocher
        value: productDetails?.is_organic || ''
    },
    {
        id: 4,
        label: "Allergènes",
        name: "allergens",
        placeholder: "Exemple : Gluten, Lactose, Arachides...",
        value: productDetails?.allergens || ''
    },
]);
