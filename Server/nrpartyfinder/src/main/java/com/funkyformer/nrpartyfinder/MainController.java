package com.funkyformer.nrpartyfinder;

import com.funkyformer.nrpartyfinder.Listings.*;

import org.springframework.data.jpa.domain.Specification;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import jakarta.validation.Valid;


import java.util.List;


@RestController
@CrossOrigin(origins = {"${settings.cors_origin}","${settings.cors_origin_2}"})
@RequestMapping("/nrpartyfinder")
public class MainController {
    private final ListingRepository repository;

    public MainController(ListingRepository repository) {
        this.repository = repository;
    }
    
    @PostMapping("/add")
    public Listing createListing(@Valid @RequestBody Listing listing) {
        // System.out.println(listing.toString());
        Listing ret = repository.save(listing);
        System.out.print(ret.toString());
        return ret;
    }
    
    @GetMapping("/listings")
    public List<Listing> getAllEmployees(
        @RequestParam(required=false) Integer platform,
        @RequestParam(required=false) Boolean requiredlc) {

        Specification<Listing> spec = Specification.unrestricted();

        if (platform != null) {
            spec = spec.and(ListingSpecification.isPlat(platform));
        }

        if (requiredlc != null) {
            spec = spec.and(ListingSpecification.reqDLC(requiredlc));
        }

        return repository.findAll(spec);
    }  
}
