import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fromStorage, removeStorage } from "../lib";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { setUser } from "../store";
import http from "../http";
import { Loading } from "../components/Loading";
export const PrivateRoutes = ({ element }) => {
  const [loading, setLoading] = useState(false);

  const user = useSelector((state) => state.user.value);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    if (Object.keys(user).length == 0) {
      const token = fromStorage("12cmstoken");
      if (token) {
        setLoading(true);
        http
          .get("profile/detail")
          .then(({ data }) => {
            dispatch(setUser(data));
          })
          .catch((err) => {
            removeStorage("12cmstoken");
            toast.error("Please login to continue");
            navigate("/login");
          })
          .finally(() => setLoading(false));
      } else {
        toast.error("Please login to continue");
        console.log(13);
        navigate("/login");
      }
    }
  }, [user]);
  return loading ? <Loading></Loading> : element;
};
