import React from "react";
import Cards from "../Cards/Cards";

const showAll = (COMPANIES, showModal) => {
  console.log("ShowModal : ", showModal);
  return COMPANIES.map((company) => {
    return <Cards key={company._id} showModal={showModal} company={company} />;
  });
};

function NotFound(props) {
  return (
    <div style={{ width: "100%" }}>
      <div
        class="spinner-grow"
        style={{ width: "3rem", height: "3rem" }}
        role="status"
      >
        <span class="sr-only">Loading...</span>
      </div>
      <div
        style={{
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {props.firstTime
          ? showAll(props.COMPANIES, props.showModal)
          : "No such event found"}
      </div>
    </div>
  );
}

export default NotFound;
