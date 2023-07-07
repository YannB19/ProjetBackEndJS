drop databae if exists singer_db;
create database if not exists singer_db;
use singer_db;

drop table if exists singer;

create table if not exists singer
(
    id int primary key auto_increment,
    nom varchar(50) unique not null,
    nationalite varchar(25) not null,
    genre varchar(25) not null,
    age int(3)  not null,
    sexe varchar(1) not null 
);