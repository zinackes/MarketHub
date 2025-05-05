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
