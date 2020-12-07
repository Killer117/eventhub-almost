let Data = {
  login: { isLoggedIn: false },
  register: { userRegister: true },
  userDetails: { id: "" },
  companyDetails: { id: "" },
  userRegister: true,
  pagesName: [
    "portfolio",
    "filter",
    "login",
    "profile_page",
    "about_us",
    "user_registeration",
    "company_registeration",
    "contact_us",
    "faqs",
    "",
    "user",
    "company",
  ],
};
const inPagesName = (name) => {
  const page = Data.pagesName.filter((page) => {
    return page === name;
  });
  return page.length === 0 ? false : true;
};
const setUserRegister = (isUserRegister) => {
  Data.userRegister = isUserRegister;
};
const getUserRegister = () => {
  return Data.userRegister;
};
const setLoginStatus = (loginStatus) => {
  Data.login.isLoggedIn = loginStatus;
};
const getLoginStatus = () => {
  return Data.login.isLoggedIn;
};

const setRegisterPage = (RegisterPage) => {
  Data.register.userRegister = RegisterPage;
};
const getRegisterPage = () => {
  return Data.register.userRegister;
};

const setUserDetails = (obj) => {
  Data.userDetails.id = obj.id;
};
const getUserDetails = () => {
  return Data.userDetails.id;
};
const setCompanyDetails = (obj) => {
  Data.companyDetails.id = obj.id;
};
const getCompanyDetails = () => {
  return Data.companyDetails.id;
};
exports.setLoginStatus = setLoginStatus;
exports.getLoginStatus = getLoginStatus;
exports.setRegisterPage = setRegisterPage;
exports.getRegisterPage = getRegisterPage;
exports.setUserDetails = setUserDetails;
exports.getUserDetails = getUserDetails;
exports.setCompanyDetails = setCompanyDetails;
exports.getCompanyDetails = getCompanyDetails;
exports.setUserRegister = setUserRegister;
exports.getUserRegister = getUserRegister;
exports.inPagesName = inPagesName;
