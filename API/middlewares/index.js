isCompany = async (req, res, next) => {
  if (req.user.type !== "company") {
    next({ message: "Access only for company" });
  } else {
    next();
  }
};
isJobseeker = async (req, res, next) => {
  if (req.user.type !== "jobseeker") {
    next({ message: "Access only for job seeker" });
  } else {
    next();
  }
};
module.exports = { isCompany, isJobseeker };
