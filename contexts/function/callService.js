/* eslint-disable no-console */
import axios from "axios";

export default async function callService(
  method,
  url,
  data,
  headers,
  onUploadProgress = null
) {
  const response = await axios({
    method,
    headers,
    url,
    data,
    onUploadProgress,
  })
    .then((res) => res)
    .catch((error) => {
      console.log(error);
      if (error.response) {
        if (error.code === "ERR_NETWORK") {
          return error.code;
        } else if (
          error.response.data.error === undefined ||
          error.response.data.error === "" ||
          error.response.data.error === null
        ) {
          return "server error";
        }

        return error.response.data.error;
      }
      if (error.request) {
        return "request error";
      }

      return error;
    });

  return response;
}
