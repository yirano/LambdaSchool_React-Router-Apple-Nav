import React, { useState, useEffect } from "react";
import SubNavCard from "./SubNavCard";

const SubNav = props => {
  const [subNav, setSubNav] = useState();
  const id = props.match.params.id;
  // console.log(props.data[0].products);
  return (
    <div>
      {props.data.map(data => {
        return data.name == id ? (
          <ul>
            <li>
              <SubNavCard menu={data} />
            </li>
          </ul>
        ) : null;
      })}
    </div>
  );
};

export default SubNav;
