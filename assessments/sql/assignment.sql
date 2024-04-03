-- Tables creation
CREATE TABLE Programmer (
    name VARCHAR(8) NOT NULL,
    dob DATE NOT NULL,
    doj DATE NOT NULL,
    sex VARCHAR(1) NOT NULL,
    prof1 VARCHAR(8),
    prof2 VARCHAR(8),
    salary INT NOT NULL
);

CREATE TABLE Software (
    name VARCHAR(8) NOT NULL,
    title VARCHAR(20) NOT NULL,
    dev_in VARCHAR(8) NOT NULL,
    scost int,
    dcost INT,
    sold INT
);

CREATE TABLE Studies
(
    name VARCHAR(8) NOT NULL,
    splace VARCHAR(9) NOT NULL,
    course VARCHAR(5) NOT NULL,
    ccost VARCHAR(5) NOT NULL,
);

-- Sample data insertion

INSERT INTO Programmer VALUES 
('somdutt', '1966-04-21', '1992-04-21', 'm', 'pascal', 'basic', 3200),
('devdutt', '1965-03-21', '1991-03-21', 'm', 'pascal', 'basic', 4000);


INSERT INTO Software VALUES 
('somdutt', 'parachutes', 'basic', 399.95, 6000, 43);

INSERT INTO Studies VALUES 
('somdutt', 'sabhari', 'pgdca', '4500'),
('devdutt', 'bdps', 'dcs', '5000');

-- Queries-I

-- 1
SELECT AVG(scost) AS average_selling_cost
FROM Software
WHERE dev_in = 'pascal';
-- 2
SELECT name,
FLOOR(DATEDIFF('2024-04-03', dob) / 365.25) AS age
FROM Programmer;
-- 3
SELECT programmer.name, FLOOR(DATEDIFF('2024-04-03', dob) / 365.25) AS age
from programmer , studies 
WHERE
programmer.name = studies.name AND studies.course = 'dcs';
-- 4
SELECT MAX(sold) FROM software;
-- 5
SELECT name, dob FROM programmer 
WHERE
MONTH(dob) = 1;
-- 6
SELECT MIN(ccost) FROM studies;
-- 7
SELECT COUNT(*)
from programmer , studies 
WHERE
programmer.name = studies.name AND studies.course = 'pgdca';
-- 8
SELECT SUM(scost*sold) FROM software
WHERE
dev_in = 'C';
-- 9
SELECT * FROM software 
WHERE
name = 'ramesh';
-- 10
SELECT COUNT(*)
FROM Studies
WHERE splace = 'sabhari';
-- 11
SELECT * FROM software
WHERE
sold > 20000;
-- 12
SELECT title, CEIL(dcost / scost)
FROM Software;
-- 13
SELECT MAX(scost) FROM software
WHERE
dev_in = 'BASIC';
-- 14
SELECT *
FROM Software
WHERE sold * scost >= dcost;
-- 15
SELECT COUNT(*) FROM software
WHERE
dev_in = 'dbase';
-- 16
SELECT COUNT(*)
from programmer , studies 
WHERE
programmer.name = studies.name AND studies.splace = 'paragathi';
-- 17
SELECT COUNT(*)
from programmer , studies 
WHERE
programmer.name = studies.name 
AND studies.ccost > 5000
AND studies.ccost < 10000;
-- 18
SELECT AVG(ccost) from studies;
-- 19
SELECT * FROM programmer
LEFT JOIN software
programmer.name = software.name
AND software.dev_in = 'C';
-- 20
SELECT COUNT(*) FROM software
WHERE dev_in IN ('Cobolt', 'Pascal');
-- 21
SELECT COUNT(*) FROM software
WHERE dev_in NOT IN ('Pascal', 'C');
-- 22
SELECT MAX(EXTRACT(YEAR FROM SYSDATE) - EXTRACT(YEAR FROM dob))
FROM Programmer
WHERE sex = 'm';
-- 23
SELECT AVG(YEAR(CURRENT_DATE) - YEAR(dob))
FROM Programmer
WHERE sex = 'female';
-- 24
SELECT name, 
TIMESTAMPDIFF(YEAR, doj, CURDATE()) AS experience
FROM Programmer
ORDER BY experience DESC;
-- 25
SELECT name, dob FROM Programmer
WHERE MONTH(dob) = MONTH(CURDATE());
-- 26
SELECT COUNT(*) FROM Programmer
WHERE sex = 'female';
-- 27
SELECT DISTINCT prof1 AS language FROM Programmer
WHERE sex = 'male'
UNION
SELECT DISTINCT prof2 FROM Programmer
WHERE sex = 'male';
-- 28
SELECT AVG(salary) FROM Programmer;
-- 29
SELECT COUNT(*) FROM Programmer
WHERE salary BETWEEN 2000 AND 4000;
-- 30
SELECT * FROM Programmer
WHERE prof1 AND prof2 NOT IN ('clipper', 'cobol', 'pascal');
-- 31
SELECT COUNT(*) FROM Programmer
WHERE sex = 'female'
AND (prof1 = 'c' OR prof2 = 'c')
AND TIMESTAMPDIFF(YEAR, dob, CURDATE()) > 24;
-- 32
SELECT * FROM Programmer
WHERE TIMESTAMPDIFF(YEAR, doj, CURDATE()) < 1;
-- 34
SELECT * FROM Programmer
WHERE TIMESTAMPDIFF(YEAR, doj, CURDATE()) = 2;
-- 35
SELECT name, (dcost - (scost * sold)) FROM Software
WHERE dcost > (scost * sold);
-- 36
SELECT * FROM Software
WHERE sold = 0;
-- 37
SELECT scost FROM Software
WHERE name = 'mary';
-- 38
SELECT DISTINCT splace FROM Studies;
-- 39
SELECT COUNT(DISTINCT course) AS number_of_courses
FROM Studies;
-- 40
SELECT name FROM Programmer
WHERE LENGTH(name) - LENGTH(REPLACE(name, 'a', '')) = 2;
-- 41
SELECT name FROM Programmer
WHERE LENGTH(name) <= 5;
-- 42
SELECT COUNT(*) FROM Programmer
WHERE sex = 'female'
AND (prof1 = 'cobol' OR prof2 = 'cobol')
AND TIMESTAMPDIFF(YEAR, doj, CURDATE()) > 2;
-- 43
SELECT MIN(LENGTH(name)) AS shortest_name_length FROM Programmer;
-- 44
SELECT AVG(dcost) AS average_development_cost FROM Software
WHERE dev_in = 'cobol';
-- 45
SELECT name, sex, dob, doj FROM Programmer
WHERE DAY(LAST_DAY(dob)) = DAY(dob);
-- 46
SELECT SUM(salary) AS total_salary_paid
FROM Programmer
WHERE sex = 'male' AND (prof1 != 'cobol' AND prof2 != 'cobol');
-- 47
SELECT title, scost, dcost, (scost - dcost) AS cost_difference
FROM Software
ORDER BY cost_difference DESC;
-- 49
SELECT name, dob, doj FROM Programmer
WHERE MONTH(dob) = MONTH(doj);
-- 50
SELECT title from software
WHERE
LENGTH(title) - LENGTH(REPLACE(title, ' ', '')) >= 1;

-- Queries-II

-- 1
SELECT COUNT(dev_in), dev_in FROM software
GROUP BY(dev_in);
-- 2
SELECT COUNT(name), name FROM software
GROUP BY(name);
-- 3
SELECT COUNT(CASE WHEN sex = 'm' THEN 1 END) as male,
COUNT(CASE WHEN sex = 'f' THEN 1 END) as female from programmer;
-- 4
