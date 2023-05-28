INSERT INTO provinces (PROVINCE_ID, PROVINCE_NAME) values
(06, "Buenos Aires"),
 (10, "Catamarca") , ( 22, "Chaco" ), (26, "Chubut"),
(02, "Ciudad Federal"), (14, "Cordoba"), (18, "Corrientes"),
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



  