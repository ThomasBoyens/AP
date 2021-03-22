package edu.ap.spring.jpa;

import java.util.List;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel="grades", path="grades")
public interface GradeRepository extends PagingAndSortingRepository<Grade, Long> {
	List<Grade> findByLastName(@Param("lastName") String lastName);
}
