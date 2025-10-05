const SHEET_ID = "1FpbB1ykFwbI-T7A3PrtsFVN5VwtEVDoidEn386m7qtM";

(async () => {

  const data = await fetch(`https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json`)
    .then(res => res.text())
    .then(text => {

      const json = JSON.parse(text.substring(47).slice(0, -2));
      const rows = json.table.rows.map(r => r.c.map(c => c?.v));
      console.log(rows);
      return rows;
    });

  const headers = data.shift(); // just ignore the headers for now

  // create list of links
  const ul = document.getElementById('links');
  data.forEach(row => {
    const li = document.createElement('li');
    const a = document.createElement('a');

    // [url, title]
    a.href = row[0];
    a.textContent = row[1];
    li.appendChild(a);
    ul.appendChild(li);
  });
})();