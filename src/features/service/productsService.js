import axios from "axios";

export const fetchProducts = async () => {
    const storedProducts = localStorage.getItem("products");

    if (storedProducts) {
        console.log("Returning cached products");
        return JSON.parse(storedProducts); // ✅ Local storage se return kar raha hai
    }

    console.log("Fetching products from API");
    const response = await axios.get("https://makeup-api.herokuapp.com/api/v1/products.json");
    localStorage.setItem("products", JSON.stringify(response.data));
    return response.data;
};

export const fetchCategory = async (categories) => {
    const storedCategoryProducts = localStorage.getItem("categoryProducts");

    if (storedCategoryProducts) {
        console.log(`Returning cached category: ${categories}`);
        return JSON.parse(storedCategoryProducts);
    }

    console.log(`Fetching category ${categories} from API`);
    const response = await axios.get(
        `https://makeup-api.herokuapp.com/api/v1/products.json?product_type=${categories}`
    );
    localStorage.setItem("categoryProducts", JSON.stringify(response.data));

    return response.data;
};
