let html = $(`
<h4> It is currently: ${moment().format("LT")}</h4>
`);
$("#time").append(html);
