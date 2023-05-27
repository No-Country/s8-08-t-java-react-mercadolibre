
INSERT INTO provinces (PROVINCE_ID, PROVINCE_NAME) values
(06, "Buenos Aires"), (10, "Catamarca") , ( 22, "Chaco" ), (26, "Chubut"),
(02, "Ciudad Autonoma de Buenos Aires"), (14, "Cordoba"), (18, "Corrientes"),
 (30, "Entre Rios" ), (34, "Formosa"), (38, "Jujuy" ), (42, "La Pampa" ),
  (46, "La Rioja" ), (50, "Mendoza"), (54, "Misiones"), (58, "Neuquen"),
  (62, "Río Negro"), (66, "Salta"), (70, "San Juan"), (74, "San Luis"),
  (78, "Santa Cruz"), (82, "Santa Fe" ), (86, "Santiago del Estero"),
  (94, "Tierra del Fuego, Antartida e Islas del Atlantico Sur" ), (90, "Tucuman" );

  INSERT INTO users (EMAIL, FIRST_NAME, LAST_NAME, NUMBER_PHONE, USER_PASSWORD, ROLE) VALUES
  ('maria@meli.com','maria','test','23423', '$2a$10$6BOKBHct.1.6NvCb2UDBuOM.w1S7SC29ggEzhYO.LlffwfxD9kjta', 'ADMIN'),
  ('pedro@meli.com', 'pedro','test','23423','$2a$10$6BOKBHct.1.6NvCb2UDBuOM.w1S7SC29ggEzhYO.LlffwfxD9kjta', 'USER'),
   ('admin@meli.com', 'admin','test','23423','$2a$10$6BOKBHct.1.6NvCb2UDBuOM.w1S7SC29ggEzhYO.LlffwfxD9kjta', 'USER'),
    ('user@meli.com', 'user','test','23423','$2a$10$6BOKBHct.1.6NvCb2UDBuOM.w1S7SC29ggEzhYO.LlffwfxD9kjta', 'ADMIN');

INSERT INTO category (id, name) VALUES
(1, 'Accesorios para Vehículos'),
(2, 'Agro'),
(3, 'Alimentos y Bebidas'),
(4, 'Animales y Mascotas'),
(5, 'Antigüedades y Colecciones'),
(6, 'Arte, Librería y Mercería'),
(7, 'Autos, Motos y Otros'),
(8, 'Bebés'),
(9, 'Belleza y Cuidado Personal'),
(10, 'Cámaras y Accesorios'),
(11, 'Celulares y Teléfonos'),
(12, 'Computación'),
(13, 'Consolas y Videojuegos'),
(14, 'Construcción'),
(15, 'Deportes y Fitness'),
(16, 'Electrodomésticos y Aires Ac.'),
(17, 'Electrónica, Audio y Video'),
(18, 'Entradas para Eventos'),
(19, 'Herramientas'),
(20, 'Hogar, Muebles y Jardín'),
(21, 'Industrias y Oficinas'),
(22, 'Inmuebles'),
(23, 'Instrumentos Musicales'),
(24, 'Joyas y Relojes'),
(25, 'Juegos y Juguetes'),
(26, 'Libros, Revistas y Comics'),
(27, 'Música, Películas y Series'),
(28, 'Ropa y Accesorios'),
(29, 'Salud y Equipamiento Médico'),
(30, 'Servicios'),
(31, 'Souvenirs, Cotillón y Fiestas'),
(32, 'Otras categorías');

INSERT INTO product (description, name, price, stock, category_id, user_id) VALUES
('Dispositivo liberado para que elijas la compañía telefónica que prefieras.', 'Samsung Galaxy A04 128 GB negro 4 GB RAM', '69999', '10000', '11', '1'),
('Pantalla AMOLED de 6.67.  Tiene 4 cámaras traseras de 108Mpx/8Mpx/5Mpx/2Mpx.  Cámara delantera de 16Mpx.  Procesador Snapdragon 732G Octa-Core de 2.3GHz con 6GB de RAM.  Batería de 5020mAh.  Memoria interna de 128GB.  A prueba de agua.  Con reconocimiento facial y sensor de huella dactilar.  Resistente al polvo y a las caídas.', 'Xiaomi Redmi Note 10 Pro (108 Mpx) Dual SIM 128 GB gris ónix 6 GB RAM', '157.779', '10000', '11', '1');


 INSERT INTO image (url, product_id) VALUES
 ('https://http2.mlstatic.com/D_NQ_NP_615787-MLA53225354281_012023-O.webp', '1'),
('https://http2.mlstatic.com/D_NQ_NP_989252-MLA53225323332_012023-O.webp', '1'),
 ('https://http2.mlstatic.com/D_NQ_NP_689330-MLA50263507908_062022-O.webp', '2'),
 ('https://http2.mlstatic.com/D_NQ_NP_625466-MLA50263727206_062022-O.webp', '2');

INSERT INTO order_status (status) VALUES
('Pendiente'),
('Enviado'),
('Entregado');

INSERT INTO address (`comment`, `contact`, `floor_apartment`, `locality`, `num_street_end`, `num_street_init`, `phone`, `province_fk`, `street`, `street_number`, `user_fk`, `zip_code`) VALUES ('Domicilio', '348256445', '1', 'Bs As', 'Av Mayo  ', '123', '01112233333', '06', 'Av Mayo', '123', '2', '1000');

INSERT INTO `shipping_methods` (`name`, `price`) VALUES
('Correo Argentino', '1500'),
('Retira en Local', '0');

INSERT INTO `orders` (id,`date`, `order_total`, `order_status_id`, `shipping_address_id`, `shipping_method_id`, `user_id`) VALUES (4, '26-5-23', '10000', '1', '1', '1', '2');

INSERT INTO `order_items` (`quantity`, `order_id`, `product_id`) VALUES ('2', '4', '1');
INSERT INTO `order_items` (`quantity`, `order_id`, `product_id`) VALUES ('2', '4', '2');