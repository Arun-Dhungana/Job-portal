import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import React from "react";
export const Seekeroutes = ({ element }) => {
  const user = useSelector((state) => state.user.value);
  const navigate = useNavigate();
  useEffect(() => {
    if (Object.keys(user).length) {
      if (user.role != "jobseeker") {
        navigate("/");
      }
    }
  }, [user]);
  return element;
};
