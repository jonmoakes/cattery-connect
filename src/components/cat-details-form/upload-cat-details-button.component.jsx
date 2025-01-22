import { useLocation } from "react-router-dom";

import { Button } from "../../styles/button/button.styles";
import { BlackHr } from "../../styles/hr/hr.styles";

import { addCatRoute } from "../../strings/routes";
import useGetCatDetailsManagementSelectors from "../../hooks/selectors/use-get-cat-details-management-selectors";

const UploadCatDetailsButton = () => {
  const { catsName } = useGetCatDetailsManagementSelectors();

  const location = useLocation();
  const path = location.pathname;

  return (
    <>
      <BlackHr />
      <Button type="submit" className="submit">
        {path === addCatRoute ? "add" : "update"} {catsName ? catsName : "cat"}
      </Button>
    </>
  );
};

export default UploadCatDetailsButton;
