import React from "react";
import ShowRatings from "../RatingsStar/ShowRatings";

function Cards(props) {
  console.log(props.company);
  return (
    <div
      className="card p-2 m-3"
      style={{
        width: "20rem",
      }}
    >
      <img className="card-img-top" src={props.company.image} alt="Card-cap" />
      <div className="card-body">
        <h5 className="card-title">
          <b>{props.company.company_name}</b>
        </h5>
        <p className="card-text">
          <label>{props.company.portfolio_about.description}</label>
        </p>
        {/* <ShowRatings rating={props.company.rating} /> */}

        <p
          className="btn btn-primary"
          data-toggle="modal"
          data-target="#exampleModalLong"
          onClick={() => props.showModal(props.company._id)}
        >
          More..
        </p>
      </div>
    </div>
  );
}

export default Cards;
