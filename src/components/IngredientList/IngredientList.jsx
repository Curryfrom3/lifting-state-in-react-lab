
import Ingredient from "../Ingredient/Ingredient"; // Ensure correct import path

const IngredientList = ({ ingredients, addToBurger }) => {
  return (
    <ul>
      {ingredients.map((ingredient, index) => (
        <Ingredient
          key={index}
          ingredient={ingredient}
          onClick={() => addToBurger(ingredient)}
          isStacked={false} // Not in the stack, so shows "+"
        />
      ))}
    </ul>
  );
};

export default IngredientList;
