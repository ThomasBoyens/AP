package edu.ap.spring;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;

import edu.ap.spring.jpa.Grade;
import edu.ap.spring.jpa.GradeRepository;

@SpringBootApplication
public class RestApplication {

	@Autowired
	private GradeRepository repository;
	
	public static void main(String[] args) {
		SpringApplication.run(RestApplication.class, args);
	}
	
	@Bean
  	public CommandLineRunner commandLineRunner(ApplicationContext ctx) {
		return (args) -> {
	 		Grade grade1 = new Grade("Philippe", "Possemiers", 19);
	 		repository.save(grade1);
	 		Grade grade2 = new Grade("Olga", "Coutrin", 11);
	 		repository.save(grade2);
	 		
	 		//curl -i -X POST -H "Content-Type:application/json" -d '{"firstName" : "Vincent",  "lastName" : "Van Camp", "grade" : "17" }' http://localhost:8080/grades
		};
  	}
}
