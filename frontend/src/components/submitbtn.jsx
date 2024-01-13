import { Button } from "react-bootstrap";
export const SubmitBtn = ({ icon }) => {
  return (
    <Button type="submit" className="bg-dark border border-dark">
      Login
      <i className={` fa-solid ${icon}  px-3`}></i>
    </Button>
  );
};
