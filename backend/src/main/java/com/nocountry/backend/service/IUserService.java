package com.nocountry.backend.service;


import com.nocountry.backend.dto.user.UserDto;

public interface IUserService {

    UserDto findByEmail(String email);

}
