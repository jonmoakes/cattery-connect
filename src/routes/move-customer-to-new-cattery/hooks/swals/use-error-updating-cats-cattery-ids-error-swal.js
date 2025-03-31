import { useCallback } from "react";

import useFireSwal from "../../../../hooks/use-fire-swal";
import useHamburgerHandlerNavigate from "../../../../hooks/use-hamburger-handler-navigate";

import { errorUpdatingCatsCatteryIdsMessage } from "../../../../strings/errors";
import { accountRoute } from "../../../../strings/routes";

const useErrorUpdatingCatsCatteryIdsErrorSwal = () => {
  const { fireSwal } = useFireSwal();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  const errorUpdatingCatsCatteryIdsErrorSwal = useCallback(
    (updateCatsCatteryIdsError) => {
      fireSwal(
        "error",
        errorUpdatingCatsCatteryIdsMessage,
        updateCatsCatteryIdsError,
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
    },
    [fireSwal, hamburgerHandlerNavigate]
  );

  return { errorUpdatingCatsCatteryIdsErrorSwal };
};

export default useErrorUpdatingCatsCatteryIdsErrorSwal;
