package com.nocountry.backend.service;

import com.nocountry.backend.dto.token.TokenDto;
import com.nocountry.backend.dto.user.UserLoginDto;
import com.nocountry.backend.dto.user.UserRegisterDto;

public interface IAuthService {

    void register(UserRegisterDto userRegisterDto);

    TokenDto login(UserLoginDto userLoginDto);
}
