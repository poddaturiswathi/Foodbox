package com.example.Foodbox.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.Foodbox.model.Food;

@Repository
public interface Foodrepo extends JpaRepository<Food,Integer> {
	
	
	

}
