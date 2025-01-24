import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import "../styles/fire.css";

import { rustRed, teal } from "../styles/colours";

const useFireSwal = () => {
  const swal = withReactContent(Swal);

  const fireSwal = async (
    icon,
    title,
    textHtml,
    timer,
    confirmButtonText,
    showCancelButton,
    cancelButtonText,
    allowOutsideClick
  ) => {
    return await swal
      .fire({
        icon,
        title,
        html: textHtml,
        timer,
        showConfirmButton: !timer ? true : false,
        confirmButtonText: confirmButtonText ? confirmButtonText : "ok",
        showCancelButton,
        cancelButtonText: cancelButtonText ? cancelButtonText : "cancel",
        allowOutsideClick,
        confirmButtonColor: `${teal}`,
        cancelButtonColor: `${rustRed}`,
        background: "rgba(34,34,24, 1)",
        backdrop: `rgba(252, 209, 156, 0.5)`,
        customClass: "fire",
        reverseButtons: true,
      })
      .then((result) => {
        return result.isConfirmed;
      });
  };

  return { fireSwal };
};
export default useFireSwal;
