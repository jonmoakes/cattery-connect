import useUploadDatesAndPensDataResultSwalUseEffect from "./upload-dates-hooks/use-upload-dates-and-pens-data-result-swal-use-effect";
import useHandleDatesAndPensChange from "./upload-dates-hooks/use-handle-data-and-pens-change";
import useSubmitUploadDatesAndPensData from "./upload-dates-hooks/use-submit-upload-dates-and-pens-data";

import UploadDatesAndPensDataLoaderAndTitle from "./upload-dates-and-pens-data-loader-and-title.component";
import UploadDatesAndPensDataDocumentId from "./upload-dates-and-pens-data-document-id.component";
import UploadDatesAndPensDataYear from "./upload-dates-and-pens-data-year.component";
import UploadDatesAndPensDataAmPens from "./upload-dates-and-pens-data-am-pens.component";
import UploadDatesAndPensDataPmPens from "./upload-dates-and-pens-data-pm-pens.component";

import { Container } from "../../../styles/container/container.styles";
import { ParentDiv } from "../../../styles/div/div.styles";
import { Button } from "../../../styles/button/button.styles";
import { Form } from "../../../styles/form/form.styles";

const UploadDatesAndPensData = () => {
  useUploadDatesAndPensDataResultSwalUseEffect();
  const { handleDatesAndPensChange } = useHandleDatesAndPensChange();
  const { submitUploadDatesAndPensData } = useSubmitUploadDatesAndPensData();

  return (
    <Container>
      <UploadDatesAndPensDataLoaderAndTitle />

      <ParentDiv>
        <Form onSubmit={submitUploadDatesAndPensData}>
          <UploadDatesAndPensDataDocumentId {...{ handleDatesAndPensChange }} />
          <UploadDatesAndPensDataYear {...{ handleDatesAndPensChange }} />
          <UploadDatesAndPensDataAmPens {...{ handleDatesAndPensChange }} />
          <UploadDatesAndPensDataPmPens {...{ handleDatesAndPensChange }} />

          <Button type="submit">confirm upload dates</Button>
        </Form>
      </ParentDiv>
    </Container>
  );
};

export default UploadDatesAndPensData;
