const base_url = "https://al-quran-8d642.firebaseio.com/";

// const api_token = 'b3dad9833b3a4b78af52563c2d2b6895';

let fetchApi = url => {
  return fetch(url, {});
}

// Blok kode yang akan di panggil jika fetch berhasil
function status(response) {
  if (response.status !== 200) {
    console.log("Error : " + response.status);
    // Method reject() akan membuat blok catch terpanggil
    return Promise.reject(new Error(response.statusText));
  } else {
    // Mengubah suatu objek menjadi Promise agar bisa "di-then-kan"
    return Promise.resolve(response);
  }
}
// Blok kode untuk memparsing json menjadi array JavaScript
function json(response) {
  return response.json();
}
// Blok kode untuk meng-handle kesalahan di blok catch
function error(error) {
  // Parameter error berasal dari Promise.reject()
  console.log("Error : " + error);
}
// Blok kode untuk melakukan request data json
function getSurah() {
  if ('caches' in window) {
    caches.match(base_url + "data.json?print=pretty").then(function (response) {
      if (response) {
        response.json().then(function (data) {
          // console.log(data);
          getSurahHTML(data);
        });
      }
    });
  }
  fetchApi(base_url + "data.json?print=pretty")
    .then(status)
    .then(json)
    .then(function (data) {
      // console.log(data);
      getSurahHTML(data);
    })
    .catch(error);
}

function getAyat() {
  return new Promise(function (resolve, reject) {
    // Ambil nilai query parameter (?id=)
    let urlParams = new URLSearchParams(window.location.search);
    let idParam = urlParams.get("id");

    if ('caches' in window) {
      caches.match(base_url + "surat/" + idParam + ".json?print=pretty").then(function (response) {
        if (response) {
          response.json().then(function (data) {
            getStandingsHTML(data, resolve);
          });
        }
      });
    }
    fetchApi(base_url + "surat/" + idParam + ".json?print=pretty")
      .then(status)
      .then(json)
      .then(function (data) {
        getStandingsHTML(data, resolve);
      });
  });
}

function getSavedTeam() {
  getAllFavTeam().then(function (teams) {
    // console.log(teams);
    getSavedTeamHTML(teams);
  });
}