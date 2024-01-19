import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Topnav } from "../components/Layout";

import * as Pages from "../pages";
export const AllRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Topnav></Topnav>}>
          <Route index element={<Pages.Front.Home></Pages.Front.Home>} />
          <Route path="login" element={<Pages.Auth.Login></Pages.Auth.Login>} />
          <Route
            path="register/seeker"
            element={<Pages.Auth.Register></Pages.Auth.Register>}
          />
          <Route
            path="company/:id"
            element={<Pages.Company.Show></Pages.Company.Show>}
          />
          <Route path="job/:id" element={<Pages.Job.List></Pages.Job.List>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
