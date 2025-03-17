import Ingredient from "../Ingredient/Ingredient";

const BurgerStack = ({ stack, removeFromBurger }) => {
  return (
    <ul style={{ listStyle: "none", padding: "0" }}>
      {stack.length === 0 ? (
        <p>No Ingredients</p>
      ) : (
        stack.map((ingredient, index) => (
          <Ingredient
            key={index}
            ingredient={ingredient}
            onClick={() => removeFromBurger(index)}
            isStacked={true} // Shows "X" button
          />
        ))
      )}
    </ul>
  );
};

export default BurgerStack;
