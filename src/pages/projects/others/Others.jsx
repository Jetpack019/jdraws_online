import React, { useEffect, useState } from 'react';
import "./others.scss";
import OthersList from '../otherList/OthersList';
import {

  uiDesign,
  infographics,
  Model3D,
  iconsLogo
} from "../../../data";


function Others() {

  const [selected, setSelected] = useState("UI");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "UI",
      title: "Figma",
    },
    {
      id: "Infographics",
      title: "Infographics",
    },
    {
      id: "IconsLogo",
      title: "Icons and Logo",
    },
    {
      id: "3D Model",
      title: "3D Model",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "UI":
        setData(uiDesign);
        break;
      case "Infographics":
        setData(infographics);
        break;
      case "IconsLogo":
        setData(iconsLogo);
        break;
      case "3D Model":
        setData(Model3D);
        break;
      default:
        setData(uiDesign);
    }
  }, [selected]);

  const handleContainerClick = (link) => {
    window.open(link, "_blank"); // Open the link in a new tab/window
  };

  return (
    <div className="others" id="others">
      <h1>Designs</h1>
      <ul>
        {list.map(item => (
          <OthersList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container" >
        {data.map((d) => (
          <div className="item" key={d.id}>
            <img src={d.img} alt="" onClick={() => handleContainerClick(d.imgLink)}/>
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Others;
