import { useCallback } from "react";

import useFireSwal from "../../../../hooks/use-fire-swal";
import useHamburgerHandlerNavigate from "../../../../hooks/use-hamburger-handler-navigate";

import { catsCatteryIdsUpdatedMessage } from "../../../../strings/info";
import { accountRoute } from "../../../../strings/routes";

const useUpdateCatsCatteryIdsSuccessSwal = () => {
  const { fireSwal } = useFireSwal();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  const updateCatsCatteryIdsSuccessSwal = useCallback(() => {
    fireSwal(
      "success",
      catsCatteryIdsUpdatedMessage,
      "",
      0,
      "",
      false,
      "",
      false
    ).then((isConfirmed) => {
      if (isConfirmed) {
        hamburgerHandlerNavigate(accountRoute);
      }
    });
  }, [fireSwal, hamburgerHandlerNavigate]);

  return { updateCatsCatteryIdsSuccessSwal };
};

export default useUpdateCatsCatteryIdsSuccessSwal;
