import useGetUpdatePriceSelectors from "../../hooks/selectors/use-get-update-price-selectors";
import { Form, Label, StyledInput } from "../../styles/form/form.styles";
import useHandleNewPriceChange from "./hooks/use-handle-new-price-change";

const UpdatePriceForm = () => {
  const { newPrice } = useGetUpdatePriceSelectors();
  const { handleNewPriceChange } = useHandleNewPriceChange();

  return (
    <Form className="small-margin-bottom">
      <Label>new price ( pence ):</Label>
      <StyledInput
        type="number"
        onWheel={(e) => e.target.blur()}
        name="newPrice"
        value={newPrice || ""}
        onChange={handleNewPriceChange}
        placeholder="ie 1000 for £10"
      />
    </Form>
  );
};

export default UpdatePriceForm;
