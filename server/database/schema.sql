DROP DATABASE IF EXISTS hackersbank;
CREATE DATABASE hackersbank;

\c hackersbank;

CREATE TABLE members (
  id SERIAL PRIMARY KEY,
  firstname VARCHAR(255),
  lastname VARCHAR(255),
  address VARCHAR(255),
  city VARCHAR(255),
  state VARCHAR(2),
  zip_code INTEGER
);

CREATE TABLE savings (
  account_number SERIAL PRIMARY KEY,
  member_id INTEGER,
  balance DECIMAL,
  CONSTRAINT fk_members
    FOREIGN KEY (member_id)
      REFERENCES members(id)
);

CREATE TABLE checking (
  account_number SERIAL PRIMARY KEY,
  member_id INTEGER,
  balance DECIMAL,
  CONSTRAINT fk_members
    FOREIGN KEY (member_id)
      REFERENCES members(id)
);

CREATE TABLE transactions (
  id SERIAL PRIMARY KEY,
  member_id INTEGER,
  account_type VARCHAR(255),
  description VARCHAR(255),
  withdraw BOOLEAN,
  amount DECIMAL,
  CONSTRAINT fk_members
    FOREIGN KEY (member_id)
      REFERENCES members(id)
);

COPY members(id,lastname,firstname,address,city,state,zip_code)
FROM '/Users/yespacefeng/Desktop/HackReactor/projectMVP/server/database/CSV_files/Hackers Banks - members.csv'
DELIMITER ','
CSV HEADER;

COPY savings(account_number,member_id,balance)
FROM '/Users/yespacefeng/Desktop/HackReactor/projectMVP/server/database/CSV_files/Hackers Banks - savings_account.csv'
DELIMITER ','
CSV HEADER;

COPY checking(account_number,member_id,balance)
FROM '/Users/yespacefeng/Desktop/HackReactor/projectMVP/server/database/CSV_files/Hackers Banks - checking_account.csv'
DELIMITER ','
CSV HEADER;

COPY transactions(id,member_id,account_type,description,withdraw,amount)
FROM '/Users/yespacefeng/Desktop/HackReactor/projectMVP/server/database/CSV_files/Hackers Banks - transactions.csv'
DELIMITER ','
CSV HEADER;

SELECT setval('members_id_seq', (SELECT MAX(id) FROM members));
SELECT setval('savings_account_number_seq', (SELECT MAX(account_number) FROM savings));
SELECT setval('checking_account_number_seq', (SELECT MAX(account_number) FROM checking));
SELECT setval('transactions_id_seq', (SELECT MAX(id) FROM transactions));