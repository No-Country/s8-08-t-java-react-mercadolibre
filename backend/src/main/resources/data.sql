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



  