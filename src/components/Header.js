import React, { useState } from "react";
import nba from "../assets/nba-logo.png";
import { data } from "../helper/data";

const Header = () => {
  const [inputValue, setInputValue] = useState("");
  let dataSon;
  console.log(data);
  console.log(inputValue.toLocaleUpperCase()[0]);
  console.log(data[0].name[0]);

  dataSon = inputValue
    ? data
        .filter((item) => item.name[0] === inputValue.toLocaleUpperCase()[0])
        .map((item) => item)
    : data;

  return (
    <div className="header ">
      <img src={nba} width="180px" alt="" />
      <h1 className="p-2">NBA Legends</h1>
      <div className="icon-div">
        <i className="fa-solid fa-basketball"></i>
        <input
          className="form-control me-2"
          type="search"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Search Player..."
          aria-label="Search"
        />
        <div className=" d-flex my-4 p-2">
          <div className="box row justify-content-center gap-5">
            {dataSon.map((item, index) => {
              const { img, name, statistics } = item;
              return (
                <div key={index} className="card col-4">
                  <div className="card-img">
                    <img src={img} className="card-img-top py-2" alt="..." />
                    <div className="card-body">
                      <h5 className="card-title">{name}</h5>
                    </div>
                  </div>

                  <div className="card-text">
                    <ul className="list-group ">
                      <li className="list-group-item">
                        <i className="fa-solid fa-basketball"> </i> Points:
                        <span> {statistics[0].split(" ")[0]}</span>
                      </li>
                      <li className="list-group-item">
                        <i className="fa-solid fa-basketball"> </i> Rebaunds:
                        <span> {statistics[0].split(" ")[0]}</span>
                      </li>
                      <li className="list-group-item">
                        <i className="fa-solid fa-basketball"> </i> Assist:
                        <span> {statistics[0].split(" ")[0]}</span>
                      </li>
                      <li className="list-group-item">
                        <i className="fa-solid fa-basketball"> </i> Assist:
                        <span> {statistics[0].split(" ")[0]}</span>
                      </li>
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
