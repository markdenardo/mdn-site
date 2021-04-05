import axios from "axios";

const api = () => {
axios
  .get(
    "https://api.nasa.gov/planetary/apod?api_key=x093fwocm05tLMOCe53njaCSzzbwMk9VG85yW18J&count=1"
  )
  .then(function (response) {
    // handle success
    console.log(response.url);
    let url = response.url;
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });

}

export default api;