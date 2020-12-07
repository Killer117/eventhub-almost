import React from "react";
import { Link } from "react-router-dom";
import ShortPortfolio from "../shortPortfolio/ShortPortfolio";
import {
  getUserRegister,
  getUserDetails,
  getCompanyDetails,
} from "../../data/Data";

function Modal({ companyDetails }) {
  console.log("companyDetails : ", companyDetails);
  console.log("getUserRegister : ", getUserRegister());
  console.log("getUserDetails : ", getUserDetails());
  console.log("getUserDetails : ", getUserDetails());
  // getCompanyDetails() !== "" && getCompanyDetails() !== undefined
  //           ? getCompanyDetails()
  //           : "company"
  const handleGoToPortfolio = () => {
    window
      .open(
        `/${
          getUserRegister()
            ? "user"
            : getCompanyDetails() === undefined
            ? "company"
            : getCompanyDetails()
        }/portfolio/${companyDetails._id}`
      )
      .focus();
  };
  return (
    <div
      className="modal fade"
      id="exampleModalLong"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLongTitle"
      aria-hidden="true"
      data-backdrop="false"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLongTitle">
              <b>{companyDetails.company_name}</b>
            </h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <Link to="/filter">
                <span aria-hidden="true">&times;</span>
              </Link>
            </button>
          </div>
          <div className="modal-body">
            <ShortPortfolio
              mediumContent={companyDetails.bio}
              SampleImages={"Hello"}
            />
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
              onClick={handleGoToPortfolio}
            >
              Go to our Portfolio
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
