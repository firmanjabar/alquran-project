function getStandingsHTML(data, resolve) {
  console.log(data);
  let leagueHTML = "";

  data.forEach(function (ayat) {
    leagueHTML += `
    <li class="collection-item">
    <div class="row">
      <div class="col s1">${ayat.nomor}</div>
      <div class="col s11 right-align">${ayat.ar}</div>
    </div>
    <div class="row">
      <div class="col s12"><span style="color: red; font-size:12px;">${ayat.tr}</span></div>
      <div class="col s12"><span style="font-size:13px;">${ayat.id}</span></div>
    </div>
    </li>
  `;
  })

  // Sisipkan komponen card ke dalam elemen dengan id #content
  document.getElementById("ayat").innerHTML = leagueHTML;

  resolve(data);
}