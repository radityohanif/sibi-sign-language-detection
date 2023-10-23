import { toast } from "react-toastify";

const init = () => {
  const success = localStorage.getItem("success");
  const error = localStorage.getItem("error");

  if (success) {
    toast.success(success);
    localStorage.setItem("success", "");
  } else if (error) {
    toast.error(error);
    localStorage.setItem("error", "");
  }
};

const setSuccessMessage = (message: string, future: boolean = false) => {
  if (future) {
    localStorage.setItem("success", message);
  } else {
    toast.success(message);
  }
};

const setErrorMessage = (message: string, future: boolean = false) => {
  if (future) {
    localStorage.setItem("error", message);
  } else {
    toast.error(message);
  }
};

export const useAlert = {
  init,
  setSuccessMessage,
  setErrorMessage,
};
