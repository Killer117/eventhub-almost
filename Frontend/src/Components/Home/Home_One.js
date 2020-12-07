import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  getUserRegister,
  setUserRegister,
  getUserDetails,
  setUserDetails,
  getCompanyDetails,
  setCompanyDetails,
  getLoginStatus,
  setLoginStatus,
  inPagesName,
} from "../../data/Data";

function Home_One() {
  const [Id, setId] = useState("");
  useEffect(() => {
    const url = window.location.href;
    const values = url.split("/");
    // setId(
    //   inPagesName(values[values.length - 1]) ? "" : values[values.length - 1]
    // );
    // if (Id !== "" && Id !== undefined) {
    //   setLoginStatus(true);
    //   setUserRegister(values[3] === "user" ? true : false);
    //   values[3] === "company" ? setCompanyDetails(Id) : setUserDetails(Id);
    // }
  }, [Id]);
  return (
    <div>
      <div className="home__body__one  text-center d-flex flex-column justify-content-center align-items-center vh-100">
        <p className="heading p-2 ">A HUB FOR ALL SORT OF EVENTS</p>
        <p className="sub_heading d-none d-sm-none d-lg-block">
          No need to surf websites for events booking
        </p>
        <p className="sub_sub_heading d-none d-sm-none d-lg-block">
          You can get all the events under a single hood
        </p>
        <Link
          to={`/${
            getUserRegister()
              ? getUserDetails() !== "" && getUserDetails() !== undefined
                ? getUserDetails()
                : "user"
              : getCompanyDetails() !== "" && getCompanyDetails() !== undefined
              ? getCompanyDetails()
              : "company"
          }/filter/${
            getLoginStatus()
              ? getUserRegister()
                ? getUserDetails()
                : getCompanyDetails()
              : ""
          }`}
        >
          <button type="submit" className="p-3 mt-4 border-0 getStarted">
            SEARCH EVENTS
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home_One;
