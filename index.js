const SHEET_ID = "1FpbB1ykFwbI-T7A3PrtsFVN5VwtEVDoidEn386m7qtM";

(async () => {

  const data = await fetch(`https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json`)
    .then(res => res.text())
    .then(text => {

      const json = JSON.parse(text.substring(47).slice(0, -2));
      const rows = json.table.rows.map(r => r.c.map(c => c?.v));
      console.log(rows);
      rows
    });

  const headers = data.shift();

  const formatted = data.map(row => {
    const obj = {};
    row.forEach((cell, i) => {
      obj[headers[i]] = cell;
    });
    return obj;
  });

  console.log("formatted", formatted);
})();