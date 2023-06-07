package com.nocountry.backend.service.impl;

import com.nocountry.backend.dto.description.DescriptionDto;
import com.nocountry.backend.mapper.IDescriptionMapper;
import com.nocountry.backend.model.enums.DescriptionEnum;
import com.nocountry.backend.repository.IDescriptionRepository;
import com.nocountry.backend.service.IDescriptionService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class DescriptionServiceImpl implements IDescriptionService {
    private final IDescriptionRepository descriptionRepository;

    private final IDescriptionMapper descriptionMapper;

    @Override
    public List<DescriptionDto> findAllByPriorityAndProductId(DescriptionEnum priority, Integer productId) {
        return this.descriptionMapper.toDescriptionDtos(
                this.descriptionRepository.
                        findAllByPriorityAndProductId(priority, productId));
    }


}
