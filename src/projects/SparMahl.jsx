// src/projects/SparMahl.jsx
import Carousel from "../components/Carousel";
import recipesImage from "../assets/images/sparmahl/recipes.png";
import recipeImage from "../assets/images/sparmahl/recipe.png";
import productsImage from "../assets/images/sparmahl/products.png";
import storesImage from "../assets/images/sparmahl/stores.png"

const SparMahl = () => {
    const images = [recipesImage, recipeImage, productsImage, storesImage];

    return (
        <div
            className="flex flex-col md:flex-row items-center justify-center border-2 border-gray-300 p-4 rounded-lg mb-8">
            <div className="md:w-1/2 p-4">
                <h2 className="text-2xl font-bold mb-2">SparMahl</h2>
                <p className="text-1xl font-custom">
                    <strong>My Idea:</strong> SparMahl was my first start-up, launched in 2023. Initially, it aimed to
                    show users discounted groceries nearing expiration. However, due to challenges with data
                    transparency, the concept shifted to an app that combines supermarket offers with recipes, helping
                    users find the cheapest place to buy ingredients for their meals.
                    <br/><br/>
                    <strong>The Main Page:</strong> Users can scroll through 100+ recipes and instantly see the price
                    per portion, along with the savings at the cheapest supermarket. Various filters and search options
                    are available for customization.
                    <br/><br/>
                    <strong>The Recipe Page:</strong> Users can view prices for a recipe across selected supermarkets.
                    The portion size is adjustable, and prices update accordingly. If multiple options are available for
                    an ingredient, users can review and switch to their preferred item.
                    <br/><br/>
                    <strong>The Products Page:</strong> This page displays all selected offers, allowing users to
                    compare prices and check for discounts on their favorite products. They can toggle item types or use
                    the search bar to refine their results.
                    <br/><br/>
                    <strong>The Store Page:</strong> Here, users can choose the supermarkets they want to compare. We
                    gather data from the largest supermarket chains to ensure accurate prices, accounting for store
                    locations and regional differences.
                </p>
            </div>
            <div className="md:w-1/2 p-4">
                <Carousel images={images}/>
            </div>
        </div>
    );
};

export default SparMahl;
