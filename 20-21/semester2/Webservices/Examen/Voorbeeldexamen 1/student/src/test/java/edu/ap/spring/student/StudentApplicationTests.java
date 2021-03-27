package edu.ap.spring.student;


import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import edu.ap.spring.student.jpa.AddStudentEntry;
import edu.ap.spring.student.jpa.AddStudentEntryRepository;

@SpringBootTest
class StudentApplicationTests {

	//private static StudentController sController = Mockito.mock(StudentController.class);
    private static AddStudentEntry thomas;
	@Autowired
	private AddStudentEntryRepository repo;

	@BeforeAll
	// must be static
	public static void init() {
		thomas = new AddStudentEntry("Boyens", "Thomas", new LocalDate(2001, 02, 26), "IT");
	}

	@Test
	public void test1() {

	}

}
