function getSurahHTML(data) {
  console.log(data);
  let leagueHTML = "";
  data.forEach(function (surah) {
    leagueHTML += `
      <li>
          <div class="collapsible-header">
            ${surah.nomor}. ${surah.asma} - ${surah.nama} (${surah.arti})
          </div>
          <div class="collapsible-body">
            <a href="./surah.html?id=${surah.nomor}">Buka surah ${surah.nama}</a>
            <br><br>
            <audio class="" controls>
              <source src="${surah.audio}" type="audio/mpeg">
              Your browser does not support the audio element.
            </audio>
            <p>Surah: ${surah.type}</p>
            <p>Ayat: ${surah.ayat}</p>
            <span>${surah.keterangan}</span>
          </div>
      </li>
    `;
  });
  // Sisipkan komponen card ke dalam elemen dengan id #content
  document.getElementById("surah").innerHTML = leagueHTML;
}