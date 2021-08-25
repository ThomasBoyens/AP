package edu.ap.spring.student.controller;

import java.sql.Date;
import java.util.ArrayList;
import java.util.Collections;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import edu.ap.spring.student.jpa.*;

@Controller
public class StudentController {

    @Autowired
    private StudentRepository repo;

    @GetMapping("/")
    public String index() {
        return "index";
    }

    @GetMapping("/list")
    public String list(Model model) {
        model.addAttribute("students", repo.findAll());

        return "list";
    }

    @GetMapping("/student")
    public String student() {
        return "studentForm";
    }

    @PostMapping("/student")
    public String saveStudent(@RequestParam("firstName") String firstName, @RequestParam("lastName") String lastName,
            @RequestParam("birthdate") Date birthdate, @RequestParam("studyprogram") String studyprogram) {

        // Enter in DB
        Student entry = new Student();
        entry.setFirstName(firstName);
        entry.setLastName(lastName);
        entry.setBirthdate(birthdate);
        entry.setStudyprogram(studyprogram);

        String student = lastName + " " + firstName + " " + birthdate + " " + studyprogram;

        // check if student exists before entering in database
        if (StudentExists(student)) {
            return "redirect:/list";
        } else {
            repo.save(entry);
            return "redirect:/list";
        }
    }

    // return sorted list of students
    private ArrayList<String> getSortedStudentList() {
        // create studentlist
        ArrayList<String> studentList = new ArrayList<>();

        // add each student
        Long i = Long.parseLong(1 + "");
        for (; i <= repo.count(); i++) {
            String student = repo.findById(i).get().getLastName() + " " + repo.findById(i).get().getFirstName() + " "
                    + repo.findById(i).get().getBirthdate().toString() + " " + repo.findById(i).get().getStudyprogram();
            studentList.add(student);
        }
        // sort list
        Collections.sort(studentList);
        return studentList;
    }

    private boolean StudentExists(String studentCheck) {
        for (String stud : getSortedStudentList()) {
            if (studentCheck.equalsIgnoreCase(stud)) {
                return true;
            }
        }
        return false;
    }
}
