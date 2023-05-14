package com.nocountry.backend.mapper;

import com.nocountry.backend.dto.user.UserDto;
import com.nocountry.backend.dto.user.UserRegisterDto;
import com.nocountry.backend.entity.User;
import org.mapstruct.InheritInverseConfiguration;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface IUserMapper {


    UserDto toUserDto(User user);

    @InheritInverseConfiguration
    @Mapping(target = "id", ignore = true)
    @Mapping(target = "role", ignore = true)
    User toUser(UserRegisterDto userRegisterDto);
}
