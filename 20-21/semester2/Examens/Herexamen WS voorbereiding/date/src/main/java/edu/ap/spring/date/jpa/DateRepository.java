package edu.ap.spring.date.jpa;

import org.springframework.data.repository.CrudRepository;

public interface DateRepository extends CrudRepository<Date, Long> {
    
}
