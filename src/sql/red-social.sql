create database critico;
use critico;

create table User(
id int primary key auto_increment,
name nvarchar(20) not null,
email nvarchar(20) not null,
photo nvarchar(300) default 'https://res.cloudinary.com/dbxg3ojl8/image/upload/v1577136832/no-image_xk7dvu.png',
password nvarchar(50) not null,
createdAt timestamp default current_timestamp
);

-- constraint email unique
alter table user add constraint unique_email unique(email);

-- sp list user
create procedure sp_user_list()
select * from User;



insert into  User(name,email,password) values('Jobs','jobs@gmail.com','geishas');

call sp_user_list();

