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

-- Queries-III

-- 1
SELECT name from programmer
WHERE
salary = MAX(salary)
AND prof1 = 'C' OR prof2 = 'C';
-- 2
SELECT name from programmer
WHERE
salary = MAX(salary)
AND sex = 'f'
AND prof1 = 'Cobal' OR prof2 = 'Cobol';
-- 3
SELECT name from programmer
WHERE
salary = MAX(salary) GROUP BY prof1;
-- 4

-- 11
SELECT course FROM studies
WHERE
ccost = MAX(ccost);

SELECT name, sex, dob, doj
FROM Programmer
WHERE DAY(LAST_DAY(dob)) = DAY(dob);

SELECT SUM(salary) AS total_salary_paid
FROM Programmer
WHERE sex = 'male' AND (prof1 != 'cobol' AND prof2 != 'cobol');

SELECT title, scost, dcost, (scost - dcost) AS cost_difference
FROM Software
ORDER BY cost_difference DESC;

SELECT name, dob, doj
FROM Programmer
WHERE MONTH(dob) = MONTH(doj);

SELECT dev_in AS language, COUNT(dev_in) AS number_of_packages
FROM Software
GROUP BY dev_in;

SELECT name, COUNT(name) AS number_of_packages
FROM Software
GROUP BY name;

SELECT dev_in AS language, 
    MAX(scost) AS costliest_package, 
    MAX(sold) AS highest_selling
FROM Software
GROUP BY dev_in;

SELECT dev_in AS language, 
    MAX(scost) AS costliest_package, 
    MAX(sold) AS highest_selling
FROM Software
GROUP BY dev_in;

SELECT YEAR(dob) AS birth_year, COUNT(*) AS number_of_people_born
FROM Programmer
GROUP BY YEAR(dob);

SELECT YEAR(doj) AS join_year, COUNT(*) AS number_of_people_joined
FROM Programmer
GROUP BY YEAR(doj);

SELECT MONTH(doj) AS join_month, COUNT(*) AS number_of_people_joined
FROM Programmer
GROUP BY MONTH(doj);

SELECT prof1 AS language, COUNT(*) AS count_prof1
FROM Programmer
GROUP BY prof1;

SELECT prof2 AS language, COUNT(*) AS count_prof2
FROM Programmer
GROUP BY prof2;

SELECT FLOOR(salary / 1000) AS salary_group, COUNT(*) AS number_of_people
FROM Programmer
GROUP BY salary_group;

SELECT splace AS institute, COUNT(*) AS number_of_people
FROM Studies
GROUP BY splace;

SELECT course, COUNT(*) AS number_of_people
FROM Studies
GROUP BY course;

SELECT dev_in AS language, SUM(dcost) AS total_development_cost
FROM Software
GROUP BY language;

SELECT dev_in AS language, SUM(scost) AS total_selling_cost
FROM Software
GROUP BY language;

SELECT name, SUM(dcost) AS total_development_cost
FROM Software
GROUP BY name;

SELECT name, SUM(scost * sold) AS total_sales_value
FROM Software
GROUP BY name;

SELECT name, COUNT(*) AS number_of_packages_developed
FROM Software
GROUP BY name;

SELECT name, dev_in AS language, SUM(scost * sold) AS total_sales_cost
FROM Software
GROUP BY name, language;

SELECT 
    name, 
    MAX(scost) AS costliest_package, 
    MIN(scost) AS cheapest_package
FROM Software
GROUP BY name;

SELECT 
    dev_in AS language, 
    AVG(dcost) AS average_development_cost,
    AVG(scost) AS average_cost,
    AVG(sold) AS average_selling_cost,
    AVG(scost / sold) AS average_price_per_copy
FROM Software
GROUP BY language;

SELECT 
    splace AS institute_name, 
    COUNT(DISTINCT course) AS number_of_courses,
    AVG(ccost) AS average_cost_per_course
FROM Studies
GROUP BY institute_name;

SELECT 
    splace AS institute_name, 
    COUNT(*) AS number_of_students
FROM Studies
GROUP BY institute_name;

SELECT name, sex
FROM Programmer;

SELECT s.name AS programmer_name, p.name AS package_name
FROM Programmer s
JOIN Software p ON s.name = p.name;

SELECT dev_in AS language, COUNT(*) AS number_of_packages
FROM Software
GROUP BY language;

SELECT dev_in AS language, COUNT(*) AS number_of_packages
FROM Software
WHERE dcost < 1000
GROUP BY language;

SELECT dev_in AS language, AVG(scost - dcost) AS average_difference
FROM Software
GROUP BY language;

SELECT 
    name,
    SUM(scost) AS total_selling_cost,
    SUM(dcost) AS total_development_cost,
    SUM(scost) - SUM(dcost) AS amount_to_be_recovered
FROM Software
GROUP BY name
HAVING SUM(scost) > SUM(dcost);

SELECT 
    MAX(salary) AS highest_salary,
    MIN(salary) AS lowest_salary,
    AVG(salary) AS average_salary
FROM Programmer
WHERE salary > 2000;

SELECT name
FROM Programmer
WHERE prof1 = 'C'
ORDER BY salary DESC
LIMIT 1;

SELECT name
FROM Programmer
WHERE sex = 'female' AND prof1 = 'cobol'
ORDER BY salary DESC
LIMIT 1;

SELECT prof1 AS language, name
FROM Programmer
GROUP BY language
HAVING MAX(salary);

SELECT name
FROM Programmer
ORDER BY doj
LIMIT 1;

SELECT name
FROM Programmer
ORDER BY doj DESC
LIMIT 1;

SELECT prof1 AS language
FROM Programmer
GROUP BY language
HAVING COUNT(*) = 1;

SELECT name
FROM Programmer
WHERE prof1 = 'dbase'
ORDER BY dob
LIMIT 1;

SELECT splace AS institute_name, COUNT(*) AS number_of_students
FROM Studies
GROUP BY institute_name
ORDER BY number_of_students DESC
LIMIT 1;

SELECT name
FROM Programmer
WHERE prof1 = 'dbase'
ORDER BY dob
LIMIT 1;

SELECT name
FROM Programmer
WHERE sex = 'female' AND salary > 3000
AND prof1 NOT IN ('C', 'C++', 'Oracle', 'Dbase')
AND prof2 NOT IN ('C', 'C++', 'Oracle', 'Dbase');

SELECT course
FROM Studies
ORDER BY ccost DESC
LIMIT 1;

SELECT course
FROM Studies
GROUP BY course
ORDER BY COUNT(*) DESC
LIMIT 1;

SELECT splace AS institute_name, course
FROM Studies
GROUP BY institute_name, course
HAVING AVG(ccost) < (SELECT AVG(ccost) FROM Studies);

SELECT splace AS institute_name
FROM Studies
GROUP BY institute_name
HAVING MAX(ccost) = (SELECT MAX(ccost) FROM Studies);

SELECT course
FROM Studies
GROUP BY course
HAVING COUNT(*) < (SELECT AVG(COUNT(*)) FROM Studies GROUP BY course);

SELECT splace AS institute_name
FROM Studies
WHERE course IN (
    SELECT course
    FROM Studies
    GROUP BY course
    HAVING COUNT(*) < (SELECT AVG(COUNT(*)) FROM Studies GROUP BY course)
);

SELECT course
FROM Studies
GROUP BY course
HAVING ABS(AVG(ccost) - (SELECT AVG(ccost) FROM Studies)) <= 1000;

SELECT name
FROM Software
ORDER BY dcost DESC
LIMIT 1;

SELECT name
FROM Software
ORDER BY scost ASC
LIMIT 1;

SELECT name
FROM Software
ORDER BY sold ASC
LIMIT 1;

SELECT dev_in AS language
FROM Software
ORDER BY (scost * sold) DESC
LIMIT 1;

SELECT sold
FROM Software
ORDER BY (scost - dcost) ASC
LIMIT 1;

SELECT name
FROM Software
WHERE dev_in = 'PASCAL'
ORDER BY scost DESC
LIMIT 1;

SELECT dev_in AS language
FROM Software
GROUP BY language
ORDER BY COUNT(*) DESC
LIMIT 1;

SELECT name
FROM Software
GROUP BY name
ORDER BY COUNT(*) DESC
LIMIT 1;

SELECT name
FROM Software
ORDER BY scost DESC
LIMIT 1;

SELECT name
FROM Software
GROUP BY name
HAVING SUM(sold) < (SELECT AVG(sold) FROM Software);

SELECT p.name
FROM Programmer p
JOIN (
    SELECT MAX(salary) AS max_salary_male
    FROM Programmer
    WHERE sex = 'male'
) AS max_salary_male
ON p.sex = 'female' AND p.salary > max_salary_male;

SELECT prof1 AS language
FROM Programmer
GROUP BY language
ORDER BY COUNT(*) DESC
LIMIT 1;

SELECT name
FROM Software
GROUP BY name
HAVING SUM(scost) > (2 * SUM(dcost));

SELECT p.name AS programmer_name, s.language, MIN(s.scost) AS cheapest_package_cost
FROM Programmer p
JOIN Software s ON p.name = s.name
GROUP BY p.name, s.language;

SELECT name
FROM Programmer
WHERE sex = 'male' AND dob = (SELECT MIN(dob) FROM Programmer WHERE sex = 'male' AND YEAR(dob) = 1965);

SELECT name, MAX(dev_in) AS highest_selling_language, MIN(dev_in) AS lowest_selling_language
FROM Software
GROUP BY name;

SELECT name
FROM Programmer
WHERE sex = 'female' AND YEAR(doj) = 1992
ORDER BY dob ASC
LIMIT 1;


SELECT YEAR(dob) AS birth_year
FROM Programmer
GROUP BY birth_year
ORDER BY COUNT(*) DESC
LIMIT 1;

SELECT MONTH(doj) AS join_month
FROM Programmer
GROUP BY join_month
ORDER BY COUNT(*) DESC
LIMIT 1;

SELECT prof1 AS language
FROM Programmer
GROUP BY language
ORDER BY COUNT(*) DESC
LIMIT 1;

SELECT name
FROM Programmer
WHERE sex = 'male'
AND salary < (SELECT AVG(salary) FROM Programmer WHERE sex = 'female');

SELECT *
FROM Programmer
WHERE salary IN (
    SELECT salary
    FROM Programmer
    GROUP BY salary
    HAVING COUNT(*) > 1
);

SELECT *
FROM Software
WHERE name IN (
    SELECT name
    FROM Programmer
    WHERE sex = 'male' AND salary > 3000
);

SELECT *
FROM Software
WHERE dev_in = 'PASCAL' AND name IN (
    SELECT name
    FROM Programmer
    WHERE sex = 'female'
);

SELECT *
FROM Programmer
WHERE YEAR(doj) < 1990;

SELECT *
FROM Software
WHERE dev_in = 'C' AND name IN (
    SELECT name
    FROM Programmer
    WHERE sex = 'female' AND splace = 'PRAGATHI'
);

SELECT p.name AS programmer_name, s.splace AS institute, COUNT(*) AS number_of_packages, SUM(s.sold) AS total_copies_sold, SUM(s.sold * s.scost) AS total_sales_value
FROM Programmer p
JOIN Software s ON p.name = s.name
GROUP BY p.name, s.splace;

SELECT *
FROM Software
WHERE dev_in = 'DBASE' AND name IN (
    SELECT name
    FROM Programmer
    WHERE sex = 'male' AND splace = (
        SELECT splace
        FROM Studies
        GROUP BY splace
        ORDER BY COUNT(*) DESC
        LIMIT 1
    )
);

SELECT *
FROM Software
WHERE name IN (
    SELECT name
    FROM Programmer
    WHERE (sex = 'male' AND YEAR(dob) < 1965) OR (sex = 'female' AND YEAR(dob) > 1975)
);

SELECT *
FROM Software
WHERE dev_in NOT IN (
    SELECT prof1
    FROM Programmer
    UNION
    SELECT prof2
    FROM Programmer
);

SELECT *
FROM Software
WHERE dev_in NOT IN (
    SELECT prof1
    FROM Programmer
    UNION
    SELECT prof2
    FROM Programmer
);

SELECT *
FROM Software
WHERE name IN (
    SELECT name
    FROM Programmer
    WHERE sex = 'male' AND splace = 'SABHARI'
);

SELECT name
FROM Programmer
WHERE name NOT IN (
    SELECT DISTINCT name
    FROM Software
);

SELECT SUM(dcost) AS total_cost
FROM Software
WHERE name IN (
    SELECT name
    FROM Programmer
    WHERE splace = 'APPLE'
);

SELECT name
FROM Programmer
GROUP BY doj
HAVING COUNT(*) > 1;

SELECT name
FROM Programmer
GROUP BY prof2
HAVING COUNT(*) > 1;

SELECT splace AS institute, SUM(sold * scost) AS total_sales_value
FROM Software
GROUP BY institute;

SELECT splace AS institute
FROM Studies
WHERE name IN (
    SELECT name
    FROM Software
    ORDER BY scost DESC
    LIMIT 1
);

SELECT language
FROM (
    SELECT prof1 AS language FROM Programmer
    UNION
    SELECT prof2 FROM Programmer
) AS languages
WHERE language NOT IN (
    SELECT dev_in
    FROM Software
);

SELECT p.name AS programmer_name, p.salary, s.course
FROM Programmer p
JOIN Software s ON p.name = s.name
WHERE s.sold = (
    SELECT MAX(sold)
    FROM Software
);

SELECT p.name AS programmer_name, s.ccost / p.salary AS months_to_recover_cost
FROM Programmer p
JOIN Studies s ON p.name = s.name;

SELECT *
FROM Software
WHERE name IN (
    SELECT name
    FROM Programmer
    WHERE YEAR(CURDATE()) - YEAR(doj) < 3
);

SELECT AVG(p.salary) AS average_salary
FROM Programmer p
JOIN Software s ON p.name = s.name
GROUP BY p.name
HAVING SUM(s.sold * s.scost) > 50000;

SELECT COUNT(*)
FROM Software
WHERE name IN (
    SELECT name
    FROM Studies
    WHERE ccost = (
        SELECT MIN(ccost)
        FROM Studies
    )
);

SELECT COUNT(*)
FROM Software
WHERE name = (
    SELECT name
    FROM Software
    ORDER BY scost ASC
    LIMIT 1
);

SELECT s.splace AS institute
FROM Studies s
JOIN Software sw ON s.name = sw.name
WHERE sw.name = (
    SELECT name
    FROM Software
    ORDER BY scost ASC
    LIMIT 1
);

SELECT COUNT(*)
FROM Software
WHERE name IN (
    SELECT name
    FROM Programmer
    WHERE sex = 'female' AND salary > (
        SELECT MAX(salary)
        FROM Programmer
        WHERE sex = 'male'
    )
);

SELECT COUNT(*)
FROM Software
WHERE name IN (
    SELECT name
    FROM Programmer
    WHERE splace = 'BDPS'
    ORDER BY TIMESTAMPDIFF(YEAR, doj, CURDATE()) DESC
    LIMIT 1
);

SELECT s.name AS programmer_name, st.splace AS institute
FROM Studies st
LEFT JOIN Software s ON st.name = s.name
UNION
SELECT p.name AS programmer_name, st.splace AS institute
FROM Programmer p
LEFT JOIN Studies st ON p.name = st.name
WHERE p.name NOT IN (
    SELECT name
    FROM Software
);

SELECT prof1 AS proficiency, COUNT(*) AS number_of_programmers, (
    SELECT COUNT(*)
    FROM Software
    WHERE dev_in = prof1
) AS number_of_packages_developed
FROM Programmer
GROUP BY prof1;

SELECT name, COUNT(*) AS number_of_packages_developed
FROM Software
GROUP BY name;

SELECT p.*
FROM Programmer p
JOIN Studies s ON p.name = s.name
WHERE s.splace = 'S.S.I.L';
