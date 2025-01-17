import { forwardRef, useRef, useEffect } from "react";
import { StyledCheckbox } from "../../styles/form/form.styles";

const TableCheckBox = forwardRef(({ indeterminate, ...rest }, ref) => {
  const defaultRef = useRef();
  const resolvedRef = ref || defaultRef;

  useEffect(() => {
    resolvedRef.current.indeterminate = indeterminate;
  }, [resolvedRef, indeterminate]);

  return <StyledCheckbox type="checkbox" ref={resolvedRef} {...rest} />;
});

TableCheckBox.displayName = "TableCheckBox";

export default TableCheckBox;
