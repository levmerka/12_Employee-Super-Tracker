class SuperCorp_db {
  constructor(connection) {
    this.connection = connection;
  }
  //include id, name
  viewDepartments() {
    return this.connection.promise().query("SELECT * FROM DEPARTMENT")
  }
}