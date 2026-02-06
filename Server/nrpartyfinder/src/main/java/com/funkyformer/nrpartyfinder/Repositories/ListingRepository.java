package com.funkyformer.nrpartyfinder.Repositories;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import com.funkyformer.nrpartyfinder.Entities.Listing;

public interface ListingRepository extends JpaRepository<Listing, UUID> {
    
}
