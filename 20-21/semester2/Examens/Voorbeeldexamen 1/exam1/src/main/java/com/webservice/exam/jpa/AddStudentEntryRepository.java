package com.webservice.exam.jpa;
import org.springframework.data.repository.CrudRepository;

public interface AddStudentEntryRepository extends CrudRepository<AddStudentEntry, Long > {
	Boolean existsBy(); 
}
