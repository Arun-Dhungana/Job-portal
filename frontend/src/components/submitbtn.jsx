import { Button } from "react-bootstrap";
export const SubmitBtn = ({ icon }) => {
  return (
    <Button
      type="submit"
      className={`my-3 ${icon} bg-dark d-flex flex-row justify-content-start`}
    >
      Save
    </Button>
  );
};
