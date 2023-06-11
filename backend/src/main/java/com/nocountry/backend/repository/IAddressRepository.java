package com.nocountry.backend.repository;


import com.nocountry.backend.model.entity.Address;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface IAddressRepository extends JpaRepository<Address, Long> {


    List<Address> findAllByUserFk(Long userFk);

    Optional<Address> findByUserFkAndStatusTrue(Long userFk);


}
