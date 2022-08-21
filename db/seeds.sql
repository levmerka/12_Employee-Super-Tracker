INSERT INTO department (id, dept_name)
VALUES (001, 'Administration'),
       (002, 'Data-Mining'),
       (003, 'Global Infrastructure'),
       (004, 'Peons');

INSERT INTO role (id, title, salary, department_id)
VALUES (001, 'Manager', 999999, 001),
       (002, 'Miner', 33, 002), 
       (003, 'Senior Mental Architect', 55555, 003), 
       (004, 'Grunt', 0.33, 004),
       (005, 'Overlord Prime', 6000000000, 001);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (001, 'Leslee', 'Fiveonetwo', 001, 001),
       (002, 'Ignacious', 'Bismuth', 002, NULL), 
       (003, 'Heironymus', 'Rothschild', 003, 002),
       (004, 'Johnny', 'Peppay', 004, NULL),
       (005, 'William', 'Gates III', 004, NULL),
       (006, 'Jeffrey', 'Besos', 004, NULL),
       (007, 'Charleston', 'Schwabby', 004, NULL);