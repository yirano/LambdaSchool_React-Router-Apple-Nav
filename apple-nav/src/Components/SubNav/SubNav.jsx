import React, { useState, useEffect } from "react";

const SubNav = props => {
  const [subNav, setSubNav] = useState();
  const id = props.match.params.id;
  console.log(props.data[0].products);
  return (
    <div>
      {props.data.map(x => {
        {
          console.log(x.products);
        }
        return x.name == id ? (
          <div>
            <ul>
              {x.products.map(product => {
                return (
                  <li>
                    <img
                      src={require(`../../images/${id}/${product.image}.svg`)}
                    />
                  </li>
                );
              })}
            </ul>
          </div>
        ) : null;
      })}
    </div>
  );
};

export default SubNav;
