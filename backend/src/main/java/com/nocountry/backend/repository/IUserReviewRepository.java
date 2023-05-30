package com.nocountry.backend.repository;

import com.nocountry.backend.model.entity.UserReview;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface IUserReviewRepository extends JpaRepository<UserReview, Long> {
}
