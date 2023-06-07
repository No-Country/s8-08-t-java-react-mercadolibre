package com.nocountry.backend.service;

import com.nocountry.backend.dto.token.TokenDto;
import com.nocountry.backend.dto.user.UserLoginDto;
import com.nocountry.backend.dto.user.UserRegisterDto;
import com.nocountry.backend.dto.user.UserTokenDto;

public interface IAuthService {

    void register(UserRegisterDto userRegisterDto);

    UserTokenDto login(UserLoginDto userLoginDto);
}
