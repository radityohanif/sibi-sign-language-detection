const copyToClipboard = (id: string = "clipboard") => {
  // Get the text field
  const copyText: any = document.getElementById(id);

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);
};

export const useUtil = {
  copyToClipboard,
};
