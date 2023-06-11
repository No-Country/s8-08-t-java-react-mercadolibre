package com.nocountry.backend.service;

import com.nocountry.backend.dto.description.DescriptionDto;
import com.nocountry.backend.model.enums.DescriptionEnum;

import java.util.List;

public interface IDescriptionService {

    List<DescriptionDto> findAllByPriorityAndProductId(DescriptionEnum priority, Integer productId);
}
