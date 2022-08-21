DROP DATABASE IF EXISTS SuperCorp_db;
CREATE DATABASE SuperCorp_db;
USE SuperCorp_db;

CREATE TABLE DEPARTMENT (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(33)
);
CREATE TABLE ROLE (
  id INT AUTO_INCREMENT PRIMARY KEY, 
  title VARCHAR(33),
  salary DECIMAL,
  department_id INT,
  INDEX dep_ind (department_id),
  CONSTRAINT fk_department FOREIGN KEY (department_id) REFERENCES department(id)
  ON DELETE CASCADE
);
CREATE TABLE EMPLOYEE (
  id INT AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(33) NOT NULL,
  last_name VARCHAR(33) NOT NULL,
  role_id INT,
  manager_id INT NULL,
  INDEX role_ind (role_id),
  INDEX manager_ind (manager_id),
  CONSTRAINT fk_role FOREIGN KEY(role_id) REFERENCES role(id),
  FOREIGN KEY(manager_id) REFERENCES employee(id)
  ON DELETE CASCADE
);
