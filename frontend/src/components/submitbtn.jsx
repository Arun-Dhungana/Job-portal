import { Button } from "react-bootstrap";
export const SubmitBtn = ({ icon, title }) => {
  return (
    <Button type="submit" variant="dark" size="sm" className="">
      {title}
      <i className={` fa-solid ${icon}  px-3`}></i>
    </Button>
  );
};
