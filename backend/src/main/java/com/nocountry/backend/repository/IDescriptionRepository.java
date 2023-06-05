package com.nocountry.backend.repository;


import com.nocountry.backend.model.entity.Description;
import com.nocountry.backend.model.enums.DescriptionEnum;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface IDescriptionRepository extends JpaRepository<Description, Integer> {

    List<Description> findAllByPriorityAndProductId(DescriptionEnum priority, Integer productId);

}
