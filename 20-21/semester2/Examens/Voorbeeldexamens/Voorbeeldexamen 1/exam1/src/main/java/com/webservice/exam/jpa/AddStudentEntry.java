package com.webservice.exam.jpa;

import java.time.LocalDate;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class AddStudentEntry {
    
    @Id
    @GeneratedValue
    private long id; 

    private String firstName;
    private String lastName;
    private LocalDate birthDate;
    private String studyProgram;  


    public AddStudentEntry() {
    }
   

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getFristName(){
        return firstName; 
    }

    public void setFristName(String firstName){
        this.firstName = firstName; 
    }


    public String getLasttName(){
        return lastName; 
    }

    public void setLasttName(String lastName){
        this.lastName = lastName; 
    }

    public LocalDate getBirthDate() {
        return birthDate; 
    }

    public void setBirthDate(LocalDate birthDate) {
        this.birthDate = birthDate; 
    }

    public String getStudyProgram(){
        return studyProgram; 
    }   
    
    public void setStudyProgram(String program){
        this.studyProgram = program; 
    }   

}
