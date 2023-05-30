
package com.nocountry.backend.service;


import com.nocountry.backend.dto.userReview.UserReviewDto;
import com.nocountry.backend.exception.ResourceNotFoundException;
import com.nocountry.backend.model.entity.UserReview;

import java.util.List;

public interface IUserReviewService {
    List<UserReviewDto> getAll();
    UserReviewDto getById(Long id) throws ResourceNotFoundException;

    UserReviewDto post(UserReview userReview);

    UserReviewDto patch(Long id,UserReview userReview) throws ResourceNotFoundException;

    UserReviewDto delete(Long id) throws ResourceNotFoundException;


}
