export const getToastLoad = (desc: string, status: string) => {
  switch (status) {
    case "success":
      return {
        title: "Success!",
        description: desc,
        status,
        position: "top-right",
        duration: 3000,
        isClosable: true,
      };
    default:
      return {
        title: "Error!",
        description: desc,
        status: "error",
        position: "top-right",
        duration: 3000,
        isClosable: true,
      };
  }
};
export const isValidUrl = (urlString: string) => {
  const inputElement = document.createElement("input");
  inputElement.type = "url";
  inputElement.value = urlString;

  if (!inputElement.checkValidity()) {
    return false;
  }
  return true;
};

export const constructImageUrl = (url: string) => {
  if (url?.includes("https")) {
    return url;
  }

  return `${import.meta.env.VITE_CDN_URL}/${url}`;
};
