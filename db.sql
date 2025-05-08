CREATE TABLE feedback (
    anrede varchar(10) DEFAULT '' NOT NULL,
    vorname varchar(254) DEFAULT '' NOT NULL,
    nachname varchar(254) DEFAULT '' NOT NULL,
    email varchar(254) DEFAULT '' NOT NULL,
    nachricht varchar(254) DEFAULT '' NOT NULL,
);