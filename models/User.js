import mysql from "mysql2";

const userConnection = mysql.createConnection({
  host: "localhost:33067",
  user: "root",
  password: "",
  database: "test_mysql",
});

const UserModel = userConnection.promise();

export default UserModel;
