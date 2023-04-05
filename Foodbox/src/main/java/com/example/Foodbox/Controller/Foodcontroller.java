package com.example.Foodbox.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.Foodbox.model.Food;
import com.example.Foodbox.repo.Foodrepo;

@RestController
@RequestMapping("/api")
@CrossOrigin("http://localhost:4200/")
public class Foodcontroller {

	@Autowired
	Foodrepo fr;

	@GetMapping("/fooditems")
	public List<Food> getfooditems() {

		return fr.findAll();

	}

	@PostMapping("/fooditems")
	public Food addfood(@RequestBody Food ad) {

		return fr.save(ad);
	}

	@DeleteMapping("/fooditems/{id}")
	public void deletefood(@PathVariable int id) {
		Optional<Food> fd = fr.findById(id);
		if (fd.isPresent()) {
			fr.deleteById(id);
		}

	}

	@PutMapping("/fooditems/{id}")
	public Food updatefood(@PathVariable int id, @RequestBody Food fud) {

		Optional<Food> op = fr.findById(id);
		if (op.isPresent()) {
			//op.get().setId(fud.getId());
			op.get().setName(fud.getName());
			op.get().setPrice(fud.getPrice());
			op.get().setStyle(fud.getStyle());

		}
		return fr.save(op.get());

	}
	
	
	

}


