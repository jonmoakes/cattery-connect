import useResetState from "./hooks/use-reset-state";

import { Button } from "../../styles/button/button.styles";

const ResetStateButton = () => {
  const { resetState } = useResetState();

  return (
    <Button type="button" className="teal" onClick={resetState}>
      reset state
    </Button>
  );
};

export default ResetStateButton;
