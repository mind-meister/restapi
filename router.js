module.exports = function (app) {
  const jsonku = require("./controller");

  app.route("/").get(jsonku.index);
  app.route("/tampil").get(jsonku.tampilDataMahasiswa);
  app.route("/tampil/:id").get(jsonku.tampilDataMahasiswaBerdasarkanId);
};
