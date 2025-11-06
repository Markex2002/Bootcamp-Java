1. Show first name, last name, and gender of patients whose gender is 'M'
SELECT first_name, last_name, gender
  FROM patients
  WHERE gender is 'M'

2. Show first name and last name of patients who does not have allergies. (null)
SELECT first_name, last_name 
  FROM patients 
  WHERE allergies IS null

3. Show first name of patients that start with the letter 'C'
SELECT first_name 
  FROM patients 
  WHERE first_name LIKE "c%"

4. Show first name and last name of patients that weight within the range of 100 to 120 (inclusive)
SELECT first_name, last_name 
  FROM patients 
  WHERE weight between 100 AND 120

5. Update the patients table for the allergies column. If the patient's allergies is null then replace it with 'NKA'
UPDATE patients
  SET allergies = 'NKA'
  WHERE allergies IS NULL;

6. Show first name and last name concatinated into one column to show their full name.
select first_name || " " || last_name AS full_Name 
  FROM patients

7. Show first name, last name, and the full province name of each patient. Example: 'Ontario' instead of 'ON'
SELECT first_name, last_name, province_name 
  FROM patients as p
  Inner join province_names as pn
  ON p.province_id = pn.province_id