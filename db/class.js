const connection = require('./connection')
class SuperCorp_db {
  constructor(connection) {
    this.connection = connection;
  }
  //include id, name
  viewDeptTable() {
    return this.connection.promise().query("SELECT * FROM DEPARTMENT")
  }
  viewRoleTable() {
    return this.connection.promise().query("SELECT * FROM ROLE")
}
viewEmployeeTable() {
  return this.connection.promise().query("SELECT * FROM EMPLOYEE")
}
}
module.exports = new SuperCorp_db(connection);