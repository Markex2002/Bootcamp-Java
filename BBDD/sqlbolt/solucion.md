==============================
Exercise 1 — Tasks
Find the title of each film
SELECT title FROM movies;

Find the director of each film
SELECT director FROM movies;

Find the title and director of each film
SELECT title, director FROM movies;

Find the title and year of each film
SELECT title, year FROM movies;

Find all the information about each film
SELECT * FROM movies;


==============================
Exercise 2 — Tasks
Find the movie with a row id of 6
SELECT * FROM movies where id = 6;

Find the movies released in the years between 2000 and 2010
SELECT * FROM movies where year BETWEEN 2000 AND 2010;

Find the movies not released in the years between 2000 and 2010
SELECT * FROM movies where year NOT BETWEEN 2000 AND 2010;

Find the first 5 Pixar movies and their release year
SELECT * FROM movies Limit 5;


==============================
Exercise 3 — Tasks
Find all the Toy Story movies
SELECT * FROM movies WHERE title LIKE "Toy Story%";

Find all the movies directed by John Lasseter
SELECT * FROM movies WHERE Director LIKE "John Lasseter"

Find all the movies (and director) not directed by John Lasseter
SELECT * FROM movies WHERE Director NOT LIKE "John Lasseter"

Find all the WALL-* movies
SELECT * FROM movies WHERE Title like "Wall%"


==============================
Exercise 4 — Tasks
List all directors of Pixar movies (alphabetically), without duplicates
SELECT DISTINCT Director FROM movies order by Director;

List the last four Pixar movies released (ordered from most recent to least)
SELECT * FROM movies order by Year Desc Limit 4;

List the first five Pixar movies sorted alphabetically
SELECT * FROM movies order by Title Limit 5;

List the next five Pixar movies sorted alphabetically
SELECT * FROM movies order by Title Limit 5 offset 5;


==============================
Review 1 — Tasks
List all the Canadian cities and their populations
SELECT * FROM north_american_cities WHERE country like "Canada";

Order all the cities in the United States by their latitude from north to south
SELECT * FROM north_american_cities WHERE country like "United States" Order by Latitude desc;

List all the cities west of Chicago, ordered from west to east
SELECT * FROM north_american_cities WHERE Longitude < -87.6298 Order by Longitude asc;

//Otra opcion
SELECT * FROM north_american_cities WHERE Longitude < (
    SELECT Longitude
    FROM north_american_cities 
    WHERE City = 'Chicago'
) Order by Longitude asc;


List the two largest cities in Mexico (by population)
SELECT * FROM north_american_cities 
    Where Country like "Mexico" order by Population desc LIMIT 2

List the third and fourth largest cities (by population) in the United States and their population
SELECT * FROM north_american_cities Where Country Like "United States" 
    order by Population desc limit 2 offset 2


==============================
Exercise 6 — Tasks
Find the domestic and international sales for each movie
SELECT * FROM movies inner JOIN BoxOffice ON id = movie_id;

Show the sales numbers for each movie that did better internationally rather than domestically
SELECT * FROM movies inner JOIN BoxOffice ON id = movie_id 
    WHERE international_sales > Domestic_sales;

List all the movies by their ratings in descending order
SELECT * FROM movies inner JOIN BoxOffice ON id = movie_id 
    order by rating desc;


==============================
Exercise 7 — Tasks
Find the list of all buildings that have employees
SELECT DISTINCT buildings.* FROM employees 
    Inner JOIN buildings ON Building = Building_name;

Find the list of all buildings and their capacity
SELECT * FROM Buildings;

List all buildings and the distinct employee roles in each building (including empty buildings)
SELECT Distinct building_name, role 
    FROM Buildings 
    LEFT JOIN Employees 
    ON Building = Building_name;


==============================
Exercise 8 — Tasks
Find the name and role of all employees who have not been assigned to a building
SELECT * FROM employees 
    LEFT JOIN buildings ON Building = BUilding_name 
    Where Building_name is NUll;

Find the names of the buildings that hold no employees
SELECT DISTINCT building_name 
    FROM buildings 
    left Join employees on Building = Building_name 
    where Role is null;


==============================
Exercise 9 — Tasks
List all movies and their combined sales in millions of dollars
SELECT Id, title, (Domestic_sales + International_sales) / 1000000 AS millions 
    FROM movies 
    Inner Join BoxOffice On id = movie_id order by Id;

List all movies and their ratings in percent
SELECT id, title, (rating) * 10 As "rating_percent%" 
    FROM movies Inner Join BoxOffice 
    On id = movie_id order by Id;

List all movies that were released on even number years
SELECT * FROM movies 
where year % 2 = 0;


==============================
Exercise 10 — Tasks
Find the longest time that an employee has been at the studio
SELECT MAX(Years_employed) as MaxEmpoyeedYears FROM employees;

For each role, find the average number of years employed by employees in that role
SELECT Role, AVG(Years_employed) as MaxEmpoyeedYears 
    FROM employees 
    GROUP BY role;

Find the total number of employee years worked in each building
SELECT Building, SUM(Years_employed) as MaxEmpoyeedYears 
    FROM employees 
    GROUP BY Building;


==============================
Exercise 11 — Tasks
Find the number of Artists in the studio (without a HAVING clause) 
SELECT COUNT(Name) AS Artists FROM employees where role like "Artist";

Find the number of Employees of each role in the studio
Find the total number of years employed by all Engineers



