package com.nocountry.backend.service;


import com.nocountry.backend.dto.user.UserDto;
import com.nocountry.backend.model.entity.User;


public interface IUserService {

    UserDto findByEmail(String email);

    User findById(Integer id);

    boolean isRoleTienda(Integer userId);

    UserDto findById(Long userId);
}
