import CustomBalancedText from "../custom-balanced-text/custom-balanced-text.component";

const NoCustomersFoundInSearch = () => (
  <>
    <CustomBalancedText className="white">
      no customers found.
    </CustomBalancedText>
    <CustomBalancedText className="white">
      please refine your search.
    </CustomBalancedText>
  </>
);

export default NoCustomersFoundInSearch;
