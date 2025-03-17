const Ingredient = ({ ingredient, onClick, isStacked }) => {
  return (
    <li
      style={{
        backgroundColor: ingredient.color,
        padding: "10px",
        margin: "5px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        cursor: "pointer",
      }}
    >
      {ingredient.name}
      <button onClick={onClick}>{isStacked ? "X" : "+"}</button>
    </li>
  );
};

export default Ingredient;
