package com.nocountry.backend.service.impl;

import com.nocountry.backend.dto.user.UserDto;
import com.nocountry.backend.mapper.IUserMapper;
import com.nocountry.backend.repository.IUserRepositoryJpa;
import com.nocountry.backend.service.IUserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements IUserService {
    private final IUserRepositoryJpa userRepositoryJpa;

    private final IUserMapper userMapper;

    @Override
    public UserDto findByEmail(String email) {
        return this.userRepositoryJpa.findByEmail(email)
                .map(userMapper::toUserDto)
                .orElseThrow(() -> new RuntimeException("El usuario no existe."));
    }

    @Override
    public UserDto findById(Long userId) {
        return this.userRepositoryJpa.findById(userId)
                .map(this.userMapper::toUserDto)
                .orElseThrow(()-> new RuntimeException("Id del usuario no existe."));
    }
}
