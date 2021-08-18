package edu.ap.spring.student.controller;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Collections;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import edu.ap.spring.student.jpa.AddStudentEntry;
import edu.ap.spring.student.jpa.AddStudentEntryRepository;


@Controller
public class StudentController {

    @Autowired
    AddStudentEntryRepository addStudentEntryRepository; 
    
    @GetMapping("/")
    public String index(){
        return  "redirect:/student";
    }


    @GetMapping("/student")
    public String StudentPage(){
        return "addStudent";
    }

    @PostMapping("/addStudent")
    public String addStudent(@RequestParam("firstName") String firstName,
    @RequestParam("lastName") String lastName,
    @RequestParam("birthDate") String birthDate,
    @RequestParam("studyProgram") String studyProgram, 
    RedirectAttributes redirectAttributes){

        //Enter in DB
        AddStudentEntry entry = new AddStudentEntry(); 
        entry.setFristName(firstName);
        entry.setLasttName(lastName);
        entry.setBirthDate(formatToLocalDate(birthDate));
        entry.setStudyProgram(studyProgram);

        String student = lastName + " " + firstName + " " + birthDate + " " + studyProgram;

        //check if student exists before entering in database 
        if(StudentExists(student)){
            return "redirect:/listStudent"; 
        }
        else {
            addStudentEntryRepository.save(entry);
            return "redirect:/listStudent"; 
        }
    }


    @GetMapping("/listStudent")
    public String listStudents(Model model){   
        //return list
        model.addAttribute("students", getSortedStudentList()); 
        return "listStudent"; 
    }


    private LocalDate formatToLocalDate(String date){
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy-MM-dd");
        try{
            return LocalDate.parse(date, formatter);
        }catch(Exception e){
            return null;
        }
    }

    // return sorted list of students
    private ArrayList<String> getSortedStudentList(){
        //create studentlist
        ArrayList <String> studentList = new ArrayList<>();

        // add each student
        Long i = Long.parseLong(1 + "");
        for(; i <= addStudentEntryRepository.count(); i++){
            String student =  addStudentEntryRepository.findById(i).get().getLasttName() + " "
                            + addStudentEntryRepository.findById(i).get().getFristName() + " "
                            + addStudentEntryRepository.findById(i).get().getBirthDate().toString() + " "
                            + addStudentEntryRepository.findById(i).get().getStudyProgram(); 
            studentList.add(student); 
        }
        //sort list
        Collections.sort(studentList); 
        return studentList; 
    }

    //check if student exists 
    private boolean StudentExists(String studentCheck){
        for (String stud : getSortedStudentList()) {
            if(studentCheck.equalsIgnoreCase(stud)){
                return true; 
            }
        }
        return false; 
    }

}
