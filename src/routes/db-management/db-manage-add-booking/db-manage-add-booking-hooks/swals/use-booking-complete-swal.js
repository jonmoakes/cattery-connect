import useConfirmSwal from "../../../../../hooks/use-confirm-swal";
import useFireSwal from "../../../../../hooks/use-fire-swal";
import useHamburgerHandlerNavigate from "../../../../../hooks/use-hamburger-handler-navigate";

import { accountRoute } from "../../../../../strings/routes";

const useBookingCompleteSwal = () => {
  const { fireSwal } = useFireSwal();
  const { confirmSwal } = useConfirmSwal();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  const bookingCompleteSwal = (setSwalConfirmed) => {
    fireSwal("success", "booking completed!", "", 0, "", false, "", false).then(
      (isConfirmed) => {
        if (isConfirmed) {
          setSwalConfirmed(true);
          confirmSwal(
            "would you like to make another booking?",
            "",
            `yes`,
            "no",
            () => window.location.reload(),
            () => hamburgerHandlerNavigate(accountRoute)
          );
        }
      }
    );
  };

  return { bookingCompleteSwal };
};

export default useBookingCompleteSwal;
