package com.nocountry.backend.dto.apilading;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import java.util.List;

@Getter
@Setter
@ToString
public class ResponseDto {
    private int state;
    private List<DataDto> data;
}
