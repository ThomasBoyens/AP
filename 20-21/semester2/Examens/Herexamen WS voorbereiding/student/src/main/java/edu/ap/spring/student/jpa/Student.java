package edu.ap.spring.student.jpa;

import javax.persistence.Entity;

import java.sql.Date;

import javax.persistence.*;

@Entity
public class Student {
    
    @Id
    @GeneratedValue
    private Long id;

    @Column
    private String firstName;

    @Column
    private String lastName;

    @Column
    private Date birthdate;

    @Column
    private String studyprogram;

    public Student() {
    }

    public Student(String firstName, String lastName, Date birthdate, String studyprogram) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthdate = birthdate;
        this.studyprogram = studyprogram;
    }

    public String getFirstName() {
        return this.firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return this.lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public Date getBirthdate() {
        return this.birthdate;
    }

    public void setBirthdate(Date birthdate) {
        this.birthdate = birthdate;
    }

    public String getStudyprogram() {
        return this.studyprogram;
    }

    public void setStudyprogram(String studyprogram) {
        this.studyprogram = studyprogram;
    }


}
