package com.nocountry.backend.service.impl;

import com.nocountry.backend.dto.user.UserDto;
import com.nocountry.backend.entity.Role;
import com.nocountry.backend.entity.User;
import com.nocountry.backend.mapper.IUserMapper;
import com.nocountry.backend.repository.IUserRepositoryJpa;
import com.nocountry.backend.service.IUserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Optional;

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

    @Override
    public User findById(Integer id) {
        return userRepositoryJpa.findById(id).orElse(null);
    }

    @Override
    public boolean isRoleTienda(Integer userId) {
        Optional<User> optionalUser = userRepositoryJpa.findById(userId);
        return optionalUser.map(user -> user.getRole() == Role.VENDOR).orElse(false);
    }
}
