const getFoods = (state) => state.foods;
const getDrinks = (state) => state.drinks;
const getSnacks = (state) => state.snacks;

const getFoodsSize = (state) => state.foods.total || 0;
const getDrinksSize = (state) => state.drinks.total || 0;
const getSnacksSize = (state) => state.snacks.total || 0;

export default {
    getFoods,
    getDrinks,
    getSnacks,
    getFoodsSize,
    getDrinksSize,
    getSnacksSize,
};
