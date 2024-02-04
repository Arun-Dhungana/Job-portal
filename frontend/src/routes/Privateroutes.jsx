import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fromStorage, removeStorage } from "../lib";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { setUser, setCompany } from "../store";
import http from "../http";
import { Loading } from "../components/Loading";
export const PrivateRoutes = ({ element }) => {
  const [loading, setLoading] = useState(false);

  const user = useSelector((state) => {
    return state.user.value;
  });
  const company = useSelector((state) => {
    return state.company.value;
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    if (Object.keys(user).length === 0) {
      const token = fromStorage("token");

      if (token) {
        setLoading(true);
        http
          .get("/profile/detail")
          .then(({ data }) => {
            dispatch(setUser(data));
          })

          .catch((err) => {
            removeStorage("token");
            toast.error("Please login to continue");
            navigate("/login");
          })
          .finally(() => setLoading(false));
      } else {
        toast.error("Please login to continue");

        navigate("/login");
      }
    }
  }, [user]);
  useEffect(() => {
    if (user.role == "company") {
      if (Object.keys(company).length == 0) {
        setLoading(true);
        http
          .get(`/cms/company/detail/${user._id}`)
          .then(({ data }) => {
            dispatch(setCompany(data));
          })

          .catch((err) => {
            toast.error("Please fill the data for contact person");
            navigate("/company/create");
          })
          .finally(() => setLoading(false));
      }
    }
  }, [user]);
  return loading ? <Loading></Loading> : element;
};
