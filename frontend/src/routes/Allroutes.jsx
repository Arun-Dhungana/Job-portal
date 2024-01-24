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
          <Route path="login" element={<Pages.Auth.Login></Pages.Auth.Login>} />
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
            element={<Pages.Company.Show></Pages.Company.Show>}
          />
          <Route path="job/:id" element={<Pages.Job.List></Pages.Job.List>} />
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
          </Route>
          <Route
            path="application/create"
            element={
              <PrivateRoutes
                element={
                  <Seekeroutes
                    element={
                      <Pages.Application.Create></Pages.Application.Create>
                    }
                  ></Seekeroutes>
                }
              ></PrivateRoutes>
            }
          ></Route>
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
            <Route path="edit" element={<Pages.Profile.EditProfile />}></Route>
            <Route path="password" element={<Pages.Profile.Password />}></Route>
          </Route>
          <Route
            path="company/edit"
            element={
              <PrivateRoutes
                element={
                  <Companyroutes element={<Outlet></Outlet>}></Companyroutes>
                }
              ></PrivateRoutes>
            }
          ></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
