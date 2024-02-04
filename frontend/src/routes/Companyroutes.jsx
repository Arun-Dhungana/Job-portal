import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export const Companyroutes = ({ element }) => {
  const user = useSelector((state) => state.user.value);

  const navigate = useNavigate();

  useEffect(() => {
    if (Object.keys(user).length) {
      if (user.role !== "company") {
        toast.error("Can only be accessed by company!!");
        navigate("/");
      }
    }
  }, [user]);
  return element;
};
