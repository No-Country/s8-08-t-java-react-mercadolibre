package com.nocountry.backend.mapper;

import com.nocountry.backend.dto.user.UserDto;
import com.nocountry.backend.dto.user.UserRegisterDto;
import com.nocountry.backend.dto.user.UserTokenDto;
import com.nocountry.backend.model.entity.User;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-05-23T01:36:36-0500",
    comments = "version: 1.5.3.Final, compiler: javac, environment: Java 17.0.4.1 (Eclipse Adoptium)"
)
@Component
public class IUserMapperImpl implements IUserMapper {

    @Override
    public UserDto toUserDto(User user) {
        if ( user == null ) {
            return null;
        }

        UserDto userDto = new UserDto();

        userDto.setId( user.getId() );
        userDto.setEmail( user.getEmail() );
        userDto.setFirstName( user.getFirstName() );
        userDto.setLastName( user.getLastName() );
        userDto.setNumberPhone( user.getNumberPhone() );

        return userDto;
    }

    @Override
    public UserTokenDto toUserTokenDto(User user) {
        if ( user == null ) {
            return null;
        }

        UserTokenDto userTokenDto = new UserTokenDto();

        userTokenDto.setId( user.getId() );
        userTokenDto.setEmail( user.getEmail() );
        userTokenDto.setFirstName( user.getFirstName() );
        userTokenDto.setLastName( user.getLastName() );
        userTokenDto.setNumberPhone( user.getNumberPhone() );

        return userTokenDto;
    }

    @Override
    public User toUser(UserRegisterDto userRegisterDto) {
        if ( userRegisterDto == null ) {
            return null;
        }

        User.UserBuilder user = User.builder();

        user.email( userRegisterDto.getEmail() );
        user.firstName( userRegisterDto.getFirstName() );
        user.lastName( userRegisterDto.getLastName() );
        user.numberPhone( userRegisterDto.getNumberPhone() );
        user.password( userRegisterDto.getPassword() );

        return user.build();
    }
}
