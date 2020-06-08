create table people
(
    id    int auto_increment
        primary key,
    name  varchar(20) not null,
    phone varchar(20) not null
);

INSERT INTO foodcount.people (id, name, phone) VALUES (1, 'Василий', '+79120288140');