import SingleItem from "./SingleItem";

const Items = ({ items, removeItem, editItem }) => {
  return (
    <div className="mt-6">
      {items.map((item) => {
        return (
          <SingleItem
            item={item}
            key={item.id}
            removeItem={removeItem}
            editItem={editItem}
          />
        );
      })}
    </div>
  );
};

export default Items;
