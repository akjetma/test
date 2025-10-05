const data = fetch('https://docs.google.com/spreadsheets/d/1FpbB1ykFwbI-T7A3PrtsFVN5VwtEVDoidEn386m7qtM/gviz/tq?tqx=out:json')
  .then(res => res.text())
  .then(text => {
    // clean up Google’s weird response
    const json = JSON.parse(text.substr(47).slice(0, -2)); 
    const rows = json.table.rows.map(r => r.c.map(c => c?.v));
		console.log(rows);
    rows
  });

