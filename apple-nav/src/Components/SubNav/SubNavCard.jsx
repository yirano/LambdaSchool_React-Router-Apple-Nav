import React from "react";

const SubNavCard = props => {
  console.log(props.menu);
  const menu = props.menu;
  return (
    <div className="subNav">
      {menu.products.map(product => {
        return (
          <div className="subNavCard">
            <img
              src={require(`../../images/${menu.name}/${product.image}.svg`)}
            />
            <p>{product.item}</p>
          </div>
        );
      })}
    </div>
  );
};

export default SubNavCard;
