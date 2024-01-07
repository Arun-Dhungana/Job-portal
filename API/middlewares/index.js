const debug = () => {
  process.env.DEBUG == true;
};

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
showError = async (err, next) => {
  if (debug) {
    console.error(err);
  }
  next({
    message: "Problem while executing",
  });
};
module.exports = { isCompany, isJobseeker, showError };
