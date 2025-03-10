import CustomBalancedText from "../../../components/custom-balanced-text/custom-balanced-text.component";

import { ParentDiv } from "../../../styles/div/div.styles";

const DataRetention = () => (
  <ParentDiv>
    <CustomBalancedText type="h2">Data Retention:</CustomBalancedText>

    <CustomBalancedText>
      We retain personal information only for as long as necessary to fulfill
      the purposes for which it was collected or as required by law.
    </CustomBalancedText>

    <CustomBalancedText>
      Personal data will be deleted upon user request or when it is no longer
      needed for its intended purpose.
    </CustomBalancedText>
  </ParentDiv>
);

export default DataRetention;
