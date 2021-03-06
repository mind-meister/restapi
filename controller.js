const response = require("./res");
const connection = require("./koneksi");

exports.index = (req, res) => {
  response.ok("Aplikasi REST API berjalan!", res);
};

//menampilkan semua data mahasiswa
exports.tampilDataMahasiswa = (req, res) => {
  connection.query("SELECT * FROM mahasiswa", function (error, rows, fields) {
    if (error) {
      console.log(error);
    } else {
      response.ok(rows, res);
    }
  });
};

// menampilkan semua data mahasiswa berdasarkan id
exports.tampilDataMahasiswaBerdasarkanId = (req, res) => {
  const id = req.params.id;
  connection.query(
    "SELECT * FROM mahasiswa WHERE id_mahasiswa = ?",
    [id],
    function (error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        response.ok(rows, res);
      }
    }
  );
};

//menambahkan data mahasiswa
exports.tambahMahasiswa = (req, res) => {
  const nim = req.body.nim;
  const nama = req.body.nama;
  const jurusan = req.body.jurusan;

  connection.query(
    "INSERT INTO mahasiswa (nim, nama, jurusan) VALUES (?,?,?)",
    [nim, nama, jurusan],
    function (error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        response.ok("Berhasil menambahkan data", res);
      }
    }
  );
};

// mengubah data berdasarkan id
exports.ubahMahasiswa = (req, res) => {
  const id = req.body.id_mahasiswa;
  const nim = req.body.nim;
  const nama = req.body.nama;
  const jurusan = req.body.jurusan;

  connection.query(
    "UPDATE mahasiswa SET nim=?, nama=?, jurusan=? WHERE id_mahasiswa=?",
    [nim, nama, jurusan, id],
    function (error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        response.ok("Berhasil Mengubah Data", res);
      }
    }
  );
};

// menghapus data berdasarkan id
exports.hapusMahasiswa = (req, res) => {
  const id = req.body.id_mahasiswa;
  connection.query(
    "DELETE FROM mahasiswa WHERE id_mahasiswa=?",
    [id],
    function (error, rows, fields) {
      if (error) {
        console.log(error);
      } else {
        response.ok("Berhasil Menghapus Data", res);
      }
    }
  );
};
