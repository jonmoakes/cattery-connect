import { useCallback } from "react";

import useFireSwal from "../../../../hooks/use-fire-swal";
import useHamburgerHandlerNavigate from "../../../../hooks/use-hamburger-handler-navigate";

import { errorUpdatingCatsCatteryIdsMessage } from "../../../../strings/errors";
import { accountRoute } from "../../../../strings/routes";

const usePartialFailureInUpdateCatsCatteryIdsSwal = () => {
  const { fireSwal } = useFireSwal();
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  const partialFailureInUpdateCatsCatteryIdsSwal = useCallback(
    (updateCatsCatteryIdsError) => {
      //one or more failures updating a cat.
      const failedCatsIds = updateCatsCatteryIdsError
        .map((error) => `${error.error}`)
        .join("\n");

      fireSwal(
        "error",
        errorUpdatingCatsCatteryIdsMessage,
        failedCatsIds,
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

  return { partialFailureInUpdateCatsCatteryIdsSwal };
};

export default usePartialFailureInUpdateCatsCatteryIdsSwal;
