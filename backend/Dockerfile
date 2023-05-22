FROM gradle:7-jdk17-alpine AS build
COPY --chown=gradle:gradle . /home/gradle/src
WORKDIR /home/gradle/src
RUN gradle build -x test

FROM eclipse-temurin:17-jdk-alpine

ARG SPRING_PROFILES_ACTIVE=dev
ARG DB_URL=mysql://localhost:3306/nocountry
ARG DB_USER=root
ARG DB_PASSAWORD=1234
ARG DB_DDL_CONFIG=create-drop


COPY --from=build /home/gradle/src/build/libs/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","/app.jar"]