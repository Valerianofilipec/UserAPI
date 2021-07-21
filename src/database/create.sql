create schema user;

create table user (
    _id serial primary key,
    _name  not null, 
    _email text not null, 
    _username text not null,
    _password text not null,
    _createdAt timestamp default now(),
    _updatedAt timestamp 
);