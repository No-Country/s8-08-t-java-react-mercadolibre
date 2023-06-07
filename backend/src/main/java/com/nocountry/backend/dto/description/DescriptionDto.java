package com.nocountry.backend.dto.description;

import com.nocountry.backend.model.enums.DescriptionEnum;
import jakarta.persistence.Column;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class DescriptionDto {


    private String content;
    
}
