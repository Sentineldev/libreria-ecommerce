CREATE TABLE customer(
    id TEXT PRIMARY KEY,
    first_name varchar(64) NOT NULL,
    last_name varchar(64) NOT NULl,
    birth_date Date,
    gender varchar(64) default '',
    country varchar(64) default '',
    city varchar(64) default '',
    state varchar(64) default '',
    address varchar(256) default '',
    postal_code varchar(64) default ''
);

CREATE TABLE account(
    id TEXT PRIMARY KEY,
    email varchar(128) UNIQUE NOT NULL,
    password varchar(128) NOT NULL,
    customer_id TEXT,
    FOREIGN KEY(customer_id) REFERENCES "customer"(id)
);
