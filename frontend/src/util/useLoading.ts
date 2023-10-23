import { toast } from "react-toastify";

const show = () => {
  const loader = document.getElementById("loading-screen");
  loader?.setAttribute("style", "display:flex");
};

const hide = () => {
  const loader = document.getElementById("loading-screen");
  loader?.setAttribute("style", "display:none");
};

export const useLoading = {
  show,
  hide,
};
