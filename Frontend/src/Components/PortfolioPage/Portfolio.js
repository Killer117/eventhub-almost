import React, { useEffect, useState } from "react";
import "./Portfolio.css";
import { COMPANIES } from "../../data/CompaniesData";
import TopBar from "./components/Topbar/Topbar";
import About from "./components/About/About";
import Pictures from "./components/PicturesOfEvents/Pictures";
import FAQs from "./components/FAQs/FAQs";
import ContactUs from "./components/ContactUs/ContactUs";
import SocialMediaHandles from "../SocialMediaHandles/SocialMediaHandles";
import Home from "./components/Home/Home";
import Modal from "./components/Modal/Modal";
import Services from "./components/Services/Services";
import axios from "axios";
import { getCompanyDetails, getUserRegister } from "../../data/Data";

function Portfolio() {
  const [isUser, setIsUser] = useState(true);
  const [companyId, setCompanyId] = useState("");
  const [company_details, setCompany_Details] = useState({});
  const [func, setFunc] = useState({ fcn: () => 3 });
  const [type, setType] = useState("text");

  useEffect(() => {
    document.title = "Portfolio";
    const url = window.location.href;
    const values = url.split("/");
    console.log("in portfolio page before setting companyId : ", values);
    setCompanyId(values[values.length - 1]);
    console.log("in portfolio page after setting companyId : ", companyId);
    axios
      .get(`http://localhost:5000/api/organisers/portfolio/${companyId}`)
      .then(function (res) {
        console.log(res.data);
        setCompany_Details(res.data);
      });

    console.log("company details: ", getCompanyDetails());
    setIsUser(
      values[3] === values[5] || values[3] === "company" ? false : true
    );

    // setIsUser(
    //   getUserRegister()
    //     ? true
    //     : getCompanyDetails() === companyId
    //     ? false
    //     : true
    // );

    // COMPANIES.map((company) => {
    //   if (company.id === parseInt(companyId)) {
    //     return setCompany_Details(company);
    //   }
    //   return "";
    // });
  }, [companyId]);

  const getTypeForModal = (modalType) => {
    setType(modalType);
  };
  const getFunctionForModal = (fnctn) => {
    setFunc({ fcn: fnctn });
  };
  return (
    <div className="portfolioPage">
      {type === "" ? "" : <Modal function={func.fcn} type={type} />}
      <TopBar title={company_details.company_name} />
      <div id="homePage">
        <Home
          isUser={isUser}
          company={company_details}
          funct={getFunctionForModal}
          type={getTypeForModal}
        />
      </div>

      <div id="aboutPage">
        <About
          isUser={isUser}
          company={company_details}
          funct={getFunctionForModal}
          type={getTypeForModal}
        />
      </div>
      <div id="servicesPage">
        <Services
          isUser={isUser}
          company={company_details}
          funct={getFunctionForModal}
          type={getTypeForModal}
        />
      </div>
      <div id="portfolioPage">
        <Pictures
          isUser={isUser}
          company={company_details}
          funct={getFunctionForModal}
          type={getTypeForModal}
        />
      </div>

      <div id="faqsPage">
        <FAQs
          isUser={isUser}
          funct={getFunctionForModal}
          type={getTypeForModal}
        />
      </div>

      <div id="contactUsPage">
        <ContactUs
          isUser={isUser}
          funct={getFunctionForModal}
          type={getTypeForModal}
        />
      </div>

      <div style={{ background: "#e1e8f0" }}>
        <SocialMediaHandles />
      </div>
    </div>
  );
}
export default Portfolio;
