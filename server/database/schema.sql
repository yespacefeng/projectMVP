DROP DATABASE IF EXISTS bank;
CREATE DATABASE bank;

\c bank;

CREATE TABLE members {
  member_number SERIAL PRIMARY KEY,
  lastName VARCHAR(255),
  firstName VARCHAR(255),
  address VARCHAR(255),
  city VARCHAR(255),
  state VARCHAR(2),
  zip_code INTEGER
}

CREATE TABLE savings_account {
  account_number SERIAL PRIMARY KEY,
  member_number INTEGER,
  total_balance INTEGER,
  avilable_balance INTEGER
  CONSTRAINT fk_members
    FOREIGN KEY (member_number)
      REFERENCES members(member_number)
}

CREATE TABLE checking_account {
  account_number SERIAL PRIMARY KEY,
  member_number INTEGER,
  avilable_balance INTEGER
  CONSTRAINT fk_members
    FOREIGN KEY (member_number)
      REFERENCES members(member_number)
}

COPY members(member_number,lastname,firstname,address,city,state,zip_code)
FROM '/Users/yespacefeng/Desktop/HackReactor/projectMVP/server/database/CSV_files/members.csv'
DELIMITER ','
CSV HEADER;

COPY savings_account(account_number,member_number,total_balance,avilable_balance)
FROM '/Users/yespacefeng/Desktop/HackReactor/projectMVP/server/database/CSV_files/savings_account.csv'
DELIMITER ','
CSV HEADER;

COPY checking_account(account_number,member_number,avilable_balance)
FROM '/Users/yespacefeng/Desktop/HackReactor/projectMVP/server/database/CSV_files/savings_account.csv'
DELIMITER ','
CSV HEADER;