import React, { useState } from "react";
import "./About.css";
import ManipulateIcons from "../ManipulateItems/manipulateicons";
import Card from "../Card/Card";

function About(props) {
  const [description, setDescription] = useState(
    "Stop wasting time and money designing and managing a website that doesn’t get results. Happiness guaranteed!"
  );
  const handleDescriptionClick = () => {
    props.funct(setDescription);
    props.type("text");
  };
  return (
    <div className="portfolio_about">
      <h1 className="portfolio_about__title">About</h1>
      <div className="portfolio_about__contentBox">
        {!props.isUser ? (
          <div
            style={{
              position: "relative",
              marginLeft: "auto",
              marginRight: "0px",
              textAlign: "end",
            }}
            data-toggle="modal"
            data-target="#exampleModal"
            onClick={handleDescriptionClick}
          >
            <ManipulateIcons color="black" />
          </div>
        ) : (
          ""
        )}
        <p className="portfolio_about__content">{description}</p>
      </div>
      <div className="d-flex flex-wrap justify-content-center">
        <Card isUser={props.isUser} funct={props.funct} type={props.type} />
        <Card isUser={props.isUser} funct={props.funct} type={props.type} />
        <Card isUser={props.isUser} funct={props.funct} type={props.type} />
      </div>
      <div className="portfolio_about__details">
        <div className="portfolio_about__details__one">
          <p>
            <small>email</small>
            <br />
            {props.company.email}
          </p>
          <p>
            <small>mobile</small>
            <br />
            {props.company.mobile_no}
          </p>
          <p>
            <small>landline</small>
            <br />
            {props.company.landline_no}
          </p>
        </div>
        <div className="portfolio_about__details__two">
          <p>
            <small>address</small>
            <br />
            {props.company.address}
          </p>
          <p>
            <small>state</small>
            <br />
            {props.company.state}
          </p>
          <p>
            <small>city</small>
            <br />
            {props.company.city}
          </p>
          <p>
            <small>pincode</small>
            <br />
            {props.company.pincode}
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
