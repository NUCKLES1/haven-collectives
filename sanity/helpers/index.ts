import { sanityFetch } from "../lib/live";
import { CATEGORIES_QUERY, HERO_QUERY, PRODUCTS_QUERY } from "./queries";

export const getHero = async()=>{
    try {
const products = await sanityFetch ({
    query: HERO_QUERY,
})

return products?.data || [];

    } catch (error) {
        console.error("Error fetching image:", error)
        return [];
    }
}


export const getAllProducts = async()=>{
    try {
const products = await sanityFetch ({
    query: PRODUCTS_QUERY,
})

return products?.data || [];

    } catch (error) {
        console.error("Error fetching all products:", error)
        return [];
    }
}


export const getAllCategories = async()=>{
    try {
const categories = await sanityFetch ({
    query: CATEGORIES_QUERY,
})

return categories.data || [];

    } catch (error) {
        console.error("Error fetching all Categories:", error)
        return [];
    }
}