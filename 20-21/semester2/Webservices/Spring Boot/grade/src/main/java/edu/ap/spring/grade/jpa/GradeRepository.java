package edu.ap.spring.grade.jpa;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GradeRepository extends CrudRepository<Grade, Long> {

    public Grade findByFirstNameAndLastName(String firstName, String lastName);
}
