package com.funkyformer.nrpartyfinder.Listings;

import org.springframework.data.jpa.domain.Specification;

public class ListingSpecification {
    
    public static Specification<Listing> isPlat(Integer platform) {
        return (root, query, criteriaBuilder) -> criteriaBuilder.equal(root.get("platform"), platform);
    }

    public static Specification<Listing> reqDLC(Boolean requiredlc) {
        return (root, query, criteriaBuilder) -> criteriaBuilder.equal(root.get("requiredlc"), requiredlc);
    }

    // public static Specification<Listing> isPlat(Integer platform) {
    //     return (root, query, criteriaBuilder) -> criteriaBuilder.equal(root.get("platform"), platform);
    // }

    // public static Specification<Listing> isPlat(Integer platform) {
    //     return (root, query, criteriaBuilder) -> criteriaBuilder.equal(root.get("platform"), platform);
    // }
    
}
