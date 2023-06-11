package com.nocountry.backend.service.impl;

import com.nocountry.backend.config.jwt.JwtService;
import com.nocountry.backend.dto.user.UserDto;
import com.nocountry.backend.dto.user.UserLoginDto;
import com.nocountry.backend.dto.user.UserRegisterDto;
import com.nocountry.backend.dto.user.UserTokenDto;
import com.nocountry.backend.model.enums.RoleEnum;
import com.nocountry.backend.model.entity.User;
import com.nocountry.backend.mapper.IUserMapper;
import com.nocountry.backend.repository.IUserRepositoryJpa;
import com.nocountry.backend.service.IAuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AuthServiceImpl implements IAuthService {

    private final IUserRepositoryJpa userRepositoryJpa;
    private final IUserMapper userMapper;
    private final JwtService jwtService;
    private final PasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;


    @Override
    public void register(UserRegisterDto userRegisterDto) {
        User user = this.userMapper.toUser(userRegisterDto);
        user.setPassword(this.passwordEncoder.encode(user.getPassword()));
        user.setRole(RoleEnum.USER);
        this.userRepositoryJpa.save(user);
    }

    @Override
    public UserTokenDto login(UserLoginDto userLoginDto) {
        User user = this.userRepositoryJpa.findByEmail(userLoginDto.getEmail()).orElseThrow(() ->
                new RuntimeException("El email no se encuentra registrado"));
        try {
            this.authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
                    userLoginDto.getEmail(), userLoginDto.getPassword()
            ));
        } catch (BadCredentialsException e) {
            throw new BadCredentialsException("Contrasenna incorrecta");
        }

        String token = jwtService.generateToken(user);
        UserDto userDto = this.userMapper.toUserDto(user);
        return UserTokenDto.builder()
                .user(userDto)
                .token(token)
                .build();
    }
}
