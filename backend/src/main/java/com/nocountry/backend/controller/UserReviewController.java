
package com.nocountry.backend.controller;
import com.nocountry.backend.dto.userReview.UserReviewDto;
import com.nocountry.backend.exception.ResourceNotFoundException;
import com.nocountry.backend.model.entity.UserReview;
import com.nocountry.backend.service.IUserReviewService;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/userReviews")
@RequiredArgsConstructor
@Tag(name = "UserReview", description = "Review of a purchase item")

public class UserReviewController  {
/*
    @Autowired
    IUserReviewService userReviewService;

    @GetMapping()
    public ResponseEntity<List<UserReviewDto>> getAll() {
        try {
            List<UserReviewDto> response = userReviewService.getAll();
            return new ResponseEntity<>(response, HttpStatus.OK);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<UserReviewDto> getById(@PathVariable Long id) throws ResourceNotFoundException {
        UserReviewDto response = userReviewService.getById(id);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @PostMapping("/")
    public ResponseEntity<UserReviewDto> postUserReview(@RequestBody UserReview userReview) {
        UserReviewDto createdUserReview = userReviewService.post(userReview);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdUserReview);
    }

    @PatchMapping("/{id}")
    public ResponseEntity<UserReviewDto> patchUserReview(@PathVariable Long id, @RequestBody UserReview userReview) throws ResourceNotFoundException {
        UserReviewDto updatedUserReview = userReviewService.patch(id, userReview);
        return ResponseEntity.ok(updatedUserReview);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteUserReview(@PathVariable Long id) throws ResourceNotFoundException {
        userReviewService.delete(id);
        return ResponseEntity.status(HttpStatus.ACCEPTED)
                .body("UserReview deleted");
    }

*/
}

