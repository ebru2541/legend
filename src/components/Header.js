import React, { useState } from "react";
import nba from "../assets/nba-logo.png";
import { data } from "../helper/data";

const Header = () => {
  const [inputValue, setInputValue] = useState("");
  let dataSon;

  dataSon = inputValue
    ? data
        .filter(
          (item) =>
            item.name[0].toLocaleUpperCase() ===
            inputValue[0].toLocaleUpperCase()
        )
        .map((itemm) => itemm)
    : data;

  return (
    <div>
      <div className="header">
        <img src={nba} width="150px" alt="" />
        <h1 className="p-2">NBA Legends</h1>
        <input
          className="form-control me-2"
          type="search"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Search Player..."
          aria-label="Search"
        />
      </div>
      <div className=" d-flex my-4 p-2">
        <div className="box row justify-content-center gap-5">
          {dataSon.map((item, index) => {
            const { img, name, statistics } = item;
            return (
              <div key={index} className="card col-4 mb-4">
                <div className="card-img">
                  <img src={img} className="card-img-top py-2" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                  </div>
                </div>

                <div className="card-text">
                  <ul>
                    <h2>{name}</h2>
                    <p>
                      <i className="fa-solid fa-basketball"> </i> Points:
                      <span> {statistics[0].split(" ")[0]}</span>
                    </p>
                    <p>
                      <i className="fa-solid fa-basketball"> </i> Rebaunds:
                      <span> {statistics[1].split(" ")[0]}</span>
                    </p>
                    <p>
                      <i className="fa-solid fa-basketball"> </i> Assist:
                      <span> {statistics[2].split(" ")[0]}</span>
                    </p>
                    <p>
                      <i className="fa-solid fa-basketball"> </i> All Star:
                      <span> {statistics[3].split(" ")[0]}</span>
                    </p>
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Header;
