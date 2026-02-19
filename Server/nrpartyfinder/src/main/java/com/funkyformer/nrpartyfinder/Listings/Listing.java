package com.funkyformer.nrpartyfinder.Listings;

import java.time.ZonedDateTime;
import java.util.UUID;

import org.hibernate.annotations.CreationTimestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Entity
@Table(name="LISTINGS")
@Data
public class Listing {
    @Id
    @GeneratedValue
    private UUID listingID;

    @Column(length=20)
    @NotNull
    private String targets;
    
    @Column
    @NotNull
    private Boolean requireDLC;

    @Column
    @NotNull
    private int platform;

    @Column
    @NotNull
    private String username;

    @Column(length = 1024)
    private String description;

    @Column(length = 1024)
    private String instructions;

    @Column
    @NotNull
    private String char01;
    
    @Column
    private String char02;

    @Column
    private String char03;

    @Column
    @CreationTimestamp
    private ZonedDateTime creationTime;

}
