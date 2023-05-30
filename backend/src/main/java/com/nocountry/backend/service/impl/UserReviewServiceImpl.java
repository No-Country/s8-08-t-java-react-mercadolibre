
package com.nocountry.backend.service.impl;

import com.nocountry.backend.dto.userReview.UserReviewDto;
import com.nocountry.backend.exception.ResourceNotFoundException;
import com.nocountry.backend.mapper.IUserReviewMapper;
import com.nocountry.backend.model.entity.UserReview;
import com.nocountry.backend.repository.IUserReviewRepository;
import com.nocountry.backend.service.IUserReviewService;
import com.nocountry.backend.service.IUserReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class UserReviewServiceImpl implements IUserReviewService {
    @Autowired
    private IUserReviewRepository userReviewRepository;

    @Autowired
    private IUserReviewMapper userReviewMapper;


    @Override
    public List<UserReviewDto> getAll() {
        return userReviewMapper.toUserReviewsDTO(userReviewRepository.findAll());
    }


    @Override
    public UserReviewDto getById(Long id) throws ResourceNotFoundException {
        UserReview userReview = userReviewRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("UserReview with id " + id + " not found"));
        return userReviewMapper.toUserReviewDto(userReview);
    }


    @Override
    public UserReviewDto post(UserReview userReview) {
        UserReview savedUserReview = userReviewRepository.save(userReview);
        return userReviewMapper.toUserReviewDto(savedUserReview);
    }




    @Override
    public UserReviewDto patch(Long id, UserReview userReview) throws ResourceNotFoundException {
        UserReview existingUserReview = userReviewRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("UserReview with id " + id + " not found"));
        if (userReview.getComments() != null) {
            existingUserReview.setComments(userReview.getComments());
        }
        existingUserReview.setRatingValue(userReview.getRatingValue());
        existingUserReview.setItem(userReview.getItem());
        UserReview updatedUserReview = userReviewRepository.save(existingUserReview);
        return userReviewMapper.toUserReviewDto(updatedUserReview);
    }

    @Override
    public UserReviewDto delete(Long id) throws ResourceNotFoundException {
        UserReview userReviewToDelete = userReviewRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("UserReview with id " + id + " not found"));
        userReviewRepository.delete(userReviewToDelete);
        return userReviewMapper.toUserReviewDto(userReviewToDelete);
    }


}
