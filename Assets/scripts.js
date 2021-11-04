function update() {
  $("#time").text("it is currently: " + moment().format("LTS"));
}
setInterval(update, 1000);
