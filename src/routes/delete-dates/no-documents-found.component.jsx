import useGetDeleteDatesVariables from "./hooks/use-get-delete-dates-variables";

import CustomBalancedText from "../../components/custom-balanced-text/custom-balanced-text.component";
import ResetStateButton from "./reset-state-button.component";

import { noDateDocumentsFoundString } from "../../constants/error-constants";

const NoDocumentsFound = () => {
  const { noDocumentsFound } = useGetDeleteDatesVariables();

  return (
    <>
      {noDocumentsFound ? (
        <>
          <CustomBalancedText>{noDateDocumentsFoundString}</CustomBalancedText>
          <ResetStateButton />
        </>
      ) : null}
    </>
  );
};

export default NoDocumentsFound;
