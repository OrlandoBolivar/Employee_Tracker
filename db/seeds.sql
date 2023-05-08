INSERT INTO department (name)
VALUES ("FOH"),
       ("BOH"),
       ("MARKETING"),
       ("RESERVATIONS"),
       ("EVENTS"),
       ("SALES"),
       ("ACCOUNTS");

INSERT INTO roles(title, salary, department_id)
VALUES ("Sales Lead", 100000, 6 ),
       ("Sales Manager", 120000, 6),
       ("Reservations coordinator", 65000, 4),
       ("F&B Manager", 90000, 1),
       ("Marketing coordinator", 65000, 3),
       ("Accountant", 85000, 7),
       ("Kitchen Hand", 55000, 2),
       ("Events coordinator", 65000, 5);

INSERT INTO employees(first_name, last_name, role_id, manager_id)
VALUES ("Orlando", "Fajardo", 1, NULL),
       ("Ligia", "Bolivar", 2, 1),
       ("Camilo", "Rodriguez", 3, NULL),
       ("Sidney", "Terbrueggen", 4, 3),
       ("Andrea", "Reyes", 5, NULL),
       ("Fernanda", "Mendez", 6, 5),
       ('Isabella', "Garces", 7, NULL),
       ("Maria", "Bolivar", 3, 7);