package com.example.demo.controller;


import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Creaacc;
import com.example.demo.repository.CreaaccRepository;



@CrossOrigin(origins="http://localhost:4200")

@RestController
@RequestMapping("/api")
public class CreaaacContoller {

	@Autowired
	CreaaccRepository repository;
	@GetMapping("/Getcreaaac")
	public List<Creaacc> getAllcreaaac()
	{
		return repository.findAll();
	}


	@PostMapping("/creaacc")
	public void savecreaacc(@RequestBody Creaacc cc)
	{
		repository.save(cc);
		
	}
	@PostMapping("/delete/{id}")
	public void deletecreaacc(@PathVariable Integer id)
	{
	repository.deleteById(id);
	}

	@PostMapping("/updateuser/{id}")
	public void updatecreaacc(@PathVariable Integer id, @RequestBody Creaacc c) {
	repository.getById(id);
	repository.save(c);
	}



	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
//	@DeleteMapping("/dusers/{id}")
//	public Map<int, Boolean> deleteUser(@PathVariable(value = "id") int id)
//	throws ResourceNotFoundException {
//	Creaacc user = repository.findById(id)
//	.orElseThrow(() -> new ResourceNotFoundException("user not found for this id :: " + id));
//
//	repository.delete(user);
//	Map<int, Boolean> response = new HashMap<>();
//	response.put("deleted", Boolean.TRUE);
//	return response;

	
	

	
	
	
	
//	@DeleteMapping("/deletestudent/{id}")
//
//	public void deleteStudent(@PathVariable String id)
//	{
//			service.deleteCreaacc(id);
//	}
	
	
//	public boolean deleteCreaacc(Creaacc c) {  
//        return studentdao.deleteCreaacc(c);  
//    }  

	
	
	
	
//	
//	@DeleteMapping("/creaaac/{id}")
//	public ResponseEntity<Map<String, Boolean>> deleteUser(@PathVariable Long id){
//	Creaaac creaaac = repository.findById(id);
//
//	repository.delete(creaaac);
//	Map<String, Boolean> response = new HashMap<>();
//	response.put("deleted", Boolean.TRUE);
//	return ResponseEntity.ok(response);
//	}
	

//	
//	@RequestMapping(value = "/users/{id}", method = RequestMethod.DELETE)public void deleteUser(@PathVariable String id) {
//	      userService.deleteUser(id);}
	
	
	
	
	// delete employee rest api
//	@DeleteMapping("/employees/{id}")
//	public ResponseEntity<Map<String, Boolean>> deleteEmployee(@PathVariable Long id){
//	Creaacc Creaacc = CreaaccRepository.findById(id);
//
//		CreaaccRepository.delete(Creaacc);
//	Map<String, Boolean> response = new HashMap<>();
//	response.put("deleted", Boolean.TRUE);
//	return ResponseEntity.ok(response);
//	}
	
//	
//	@PostMapping("/updatestudent/{id}")
//	public void updateStudents(@PathVariable String id, @RequestBody Creaacc c) {
//	service.updateStudent(c, id);
//	}
	
//	@PostMapping("/deposite")
//	public void savedeposite(@RequestBody Creaacc dd)
//	{
//		repository.save(dd);
//		
//	}
	

