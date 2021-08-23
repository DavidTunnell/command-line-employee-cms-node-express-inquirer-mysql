

DELETE FROM department;
INSERT INTO department (id, name)
VALUES
    ( 1, "Information Technology"),
    ( 2, "Accounting"),
    ( 3, "Marketing"),
    ( 4, "Research and Development"),
    ( 5, "Operations / Delivery"),
    ( 6, "Human Resources"),
    ( 7, "Leadership");

DELETE FROM role;
INSERT INTO role (id, title, salary, department_id)
VALUES
    ( 1, "CEO", 1000000.01, 7),
    ( 2, "Software Developer", 200000.02, 1),
    ( 3, "Scrum Master", 150000.03, 1),
    ( 4, "Software Tester", 100000.04, 1),
    ( 5, "Accountant", 80000.05, 2),
    ( 6, "Marketer", 80000.06, 3),
    ( 7, "Scientist", 200000.07, 4),
    ( 8, "Consultant", 100000.08, 5),
    ( 9, "Onboarder", 1000000.09, 6);

DELETE FROM employee;
INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES
    (1, "David", "Tunnell", 1, NULL),
	(2, "Alice", "Jones", 3, 1),
    (3, "Bob", "Smith", 2, 3),
    (4, "Rick", "Ruben", 2, 3),
    (5, "Tom", "Fort", 4, 3),
    (6, "Alex", "Gonzolez", 5, 1),
    (7, "Janice", "McName", 6, 1),
    (8, "Billiam", "Gregston", 7, 1),
    (9, "Dan", "Algur", 8, 1),
    (10, "Blanch", "Bluma", 9, 1);