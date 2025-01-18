import { useLocation } from "react-router-dom";

import { Button } from "../../styles/button/button.styles";
import { BlackHr } from "../../styles/hr/hr.styles";

import { addCatRoute } from "../../strings/routes";

const UploadCatDetailsButton = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <>
      <BlackHr />
      <Button type="submit" className="submit">
        {path === addCatRoute ? "add" : "update"} cat
      </Button>
    </>
  );
};

export default UploadCatDetailsButton;
