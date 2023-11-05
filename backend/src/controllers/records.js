import { connect } from "../database";

export const getRecords = async (req, res) => {
  const connection = await connect();
  const [rows] = await connection.execute("SELECT * FROM registros");
  res.json(rows);
};

export const saveRecord = async (req, res) => {
  try {
    const connection = await connect();
    const [results] = await connection.execute(
      "INSERT INTO registros(usuario, sala, bloque_horario, fecha_registro) VALUES (?, ?, ?, ?)",
      [req.body.usuario, req.body.sala, req.body.bloque_horario, req.body.fecha_registro]
    );

    const newUser = {
      id: results.insertId,
      ...req.body,
    };
    res.json(newUser);
  } catch (error) {
    console.error(error);
  }
};

export const getRecord = async (req, res) => {
  const connection = await connect();
  const rows = await connection.execute("SELECT * FROM registros WHERE id = ?", [
    req.params.id,
  ]);
  res.json(rows[0][0]);
};

export const deleteRecord = async (req, res) => {
  const connection = await connect();
  const result = await connection.execute("DELETE FROM registros WHERE id = ?", [
    req.params.id,
  ]);
  console.log(result);

  res.sendStatus(204);
};

export const updateRecord = async (req, res) => {
  const connection = await connect();
  await connection.query("UPDATE registros SET ? WHERE id = ?", [
    req.body,
    req.params.id,
  ]);
  res.sendStatus(204);
};

export const getRecordCount = async (req, res) => {
  const connection = await connect();
  const [rows] = await connection.execute("SELECT COUNT(*) FROM registros");
  res.json(rows[0]["COUNT(*)"]);
};
