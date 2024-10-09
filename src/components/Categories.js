
const Categories = (props) => {
  return (
    <div className="categories">
      <ul>
        {props.categories.map(({key, name}) => (
          <li onClick={()=> props.sortProducts(name)} key={key}>{name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
