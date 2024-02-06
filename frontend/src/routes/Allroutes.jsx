import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { Topnav } from "../components/Layout";
import { Companyroutes } from "./Companyroutes";
import { PrivateRoutes } from "./Privateroutes";
import { Seekeroutes } from "./Seekerroutes";

import * as Pages from "../pages";
export const AllRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Topnav></Topnav>}>
          <Route index element={<Pages.Front.Home></Pages.Front.Home>} />
          <Route path="result" element={<Pages.Front.Full />} />
          <Route path="login" element={<Pages.Auth.Login />} />
          <Route
            path="about"
            element={<Pages.Front.About></Pages.Front.About>}
          />
          <Route
            path="register/seeker"
            element={<Pages.Auth.Register></Pages.Auth.Register>}
          />
          <Route
            path="register/company"
            element={<Pages.Auth.Registercomp></Pages.Auth.Registercomp>}
          />
          <Route
            path="company/:id"
            element={
              <PrivateRoutes
                element={<Pages.Company.Show></Pages.Company.Show>}
              ></PrivateRoutes>
            }
          />
          <Route
            path="job/:id"
            element={
              <PrivateRoutes
                element={<Pages.Job.List></Pages.Job.List>}
              ></PrivateRoutes>
            }
          />
          <Route
            path="job"
            element={
              <PrivateRoutes
                element={
                  <Companyroutes element={<Outlet></Outlet>}></Companyroutes>
                }
              ></PrivateRoutes>
            }
          >
            <Route
              path="create"
              element={<Pages.Job.Create></Pages.Job.Create>}
            />
            <Route
              path="edit/:id"
              element={<Pages.Job.Edit></Pages.Job.Edit>}
            />
            <Route
              path="manage"
              element={<Pages.Job.Manage></Pages.Job.Manage>}
            />
          </Route>
          <Route
            path="application"
            element={
              <PrivateRoutes
                element={
                  <Seekeroutes element={<Outlet></Outlet>}></Seekeroutes>
                }
              ></PrivateRoutes>
            }
          >
            <Route
              path="create"
              element={<Pages.Application.Create></Pages.Application.Create>}
            ></Route>
            <Route
              path="applied/:id"
              element={<Pages.Application.Applied></Pages.Application.Applied>}
            ></Route>
          </Route>
          <Route
            path="application/list/:id"
            element={
              <PrivateRoutes
                element={
                  <Companyroutes
                    element={<Pages.Application.List />}
                  ></Companyroutes>
                }
              ></PrivateRoutes>
            }
          ></Route>
          <Route
            path="profile"
            element={
              <PrivateRoutes element={<Outlet></Outlet>}></PrivateRoutes>
            }
          >
            <Route path=":id" element={<Pages.Profile.Detail />}></Route>
            <Route
              path=":id/edit"
              element={<Pages.Profile.EditProfile />}
            ></Route>
            <Route path="password" element={<Pages.Profile.Password />}></Route>
          </Route>
          <Route
            path="company/create"
            element={
              <PrivateRoutes
                element={<Pages.Company.Create></Pages.Company.Create>}
              ></PrivateRoutes>
            }
          ></Route>{" "}
          <Route
            path="company/edit/:id"
            element={
              <PrivateRoutes
                element={
                  <Companyroutes
                    element={<Pages.Company.Edit />}
                  ></Companyroutes>
                }
              ></PrivateRoutes>
            }
          ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
