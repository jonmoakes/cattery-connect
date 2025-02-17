import { format } from "date-fns";

const FormattedDateCell = ({ value }) => {
  const formattedDate = format(value, "EEEE dd MMMM yyyy");

  return <span>{formattedDate}</span>;
};

export default FormattedDateCell;
