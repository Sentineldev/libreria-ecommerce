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

CREATE TABLE book(
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    synopsis TEXT NOT NULL,
    genre TEXT NOT NULL,
    image_url TEXT NOT NULL,
    language TEXT NOT NULL,
    author TEXT NOT NULL,
    physical_version BOOLEAN NOT NULl,
    digital_version BOOLEAN NOT NULL,
    release_date Date NOT NULL,
    page_count int
);
CREATE TABLE book_product(
    id TEXT PRIMARY KEY,
    book_id TEXT NOT NULL,
    bolivares_price FLOAT NOT NULL,
    dollars_price FLOAT NOT NULL,
    is_public BOOLEAN NOT NULL,
    has_stock BOOLEAN NOT NULL,
    stock int NOT NULl,
    FOREIGN KEY(book_id) REFERENCES"book"(id)
);

CREATE TABLE purchase_order(
    id TEXT PRIMARY KEY,
    date Date NOT NULL,
    account_id TEXT NOT NULL,
    status text not null,
    total_bolivares FLOAT NOT NULL,
    total_dollars FLOAT NOT NULL,
    FOREIGN KEY(account_id) REFERENCES"account"(id)
);
CREATE TABLE order_book_product(
    order_id TEXT NOT NULL,
    product_id TEXT NOT NULL,
    quantity INT NOT NULL,
    total_dollars FLOAT NOT NULL,
    total_bolivares FLOAT NOT NULL,
    PRIMARY KEY(order_id, product_id),
    FOREIGN KEY(order_id) REFERENCES"purchase_order"(id),
    FOREIGN KEY(product_id) REFERENCES"book_product"(id)
);


CREATE TABLE order_comment(
    id TEXT NOT NULL,
    order_id TEXT NOT NULL,
    body TEXT,
    created_at TIMESTAMP,
    from_customer boolean,
    PRIMARY KEY(id, order_id),
    FOREIGN KEY(order_id) REFERENCES"purchase_order"(id) 
);