import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import useHamburgerHandlerNavigate from "./use-hamburger-handler-navigate";

import "../styles/confirm.css";
import { rustRed, teal } from "../styles/colours";

const useConfirmSwal = () => {
  const swal = withReactContent(Swal);
  const { hamburgerHandlerNavigate } = useHamburgerHandlerNavigate();

  const confirmSwal = (
    title,
    textHtml,
    buttonText,
    cancelButtonText,
    confirmResult,
    cancelResult
  ) => {
    swal
      .fire({
        title,
        html: textHtml,
        background: "rgba(34,34,24, 1)",
        backdrop: `rgba(252, 209, 156, 0.5)`,
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: `${teal}`,
        cancelButtonColor: `${rustRed}`,
        confirmButtonText: buttonText,
        cancelButtonText: cancelButtonText ? cancelButtonText : "cancel",
        customClass: "confirm",
        allowOutsideClick: false,
        allowEscapeKey: false,
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          confirmResult();
        } else if (result.isDismissed && cancelResult) {
          cancelResult();
        }
      });
  };

  const confirmForwardToNewRoute = (
    title,
    text,
    buttonText,
    cancelButtonText,
    route
  ) => {
    swal
      .fire({
        title,
        text,
        background: "rgba(34,34,24, 1)",
        backdrop: `rgba(37,94,168, 0.8)`,
        icon: "question",
        showCancelButton: true,
        confirmButtonColor: `${teal}`,
        cancelButtonColor: `${rustRed}`,
        confirmButtonText: buttonText,
        cancelButtonText: cancelButtonText ? cancelButtonText : "cancel",
        customClass: "confirm",
        allowOutsideClick: false,
        allowEscapeKey: false,
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          hamburgerHandlerNavigate(route);
        } else {
          return;
        }
      });
  };

  return {
    confirmSwal,
    confirmForwardToNewRoute,
  };
};
export default useConfirmSwal;
