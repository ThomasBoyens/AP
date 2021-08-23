package edu.ap.spring.date.jpa;

import java.time.LocalDate;
import javax.persistence.*;

@Entity
public class Date {
    @Id
    @GeneratedValue
    private long id;

    private LocalDate checkedDate;

    private Boolean valid;

    private Long days;

    public Date() {
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public LocalDate getCheckedDate() {
        return checkedDate;
    }

    public void setCheckedDate(LocalDate checkedDate) {
        this.checkedDate = checkedDate;
    }

    public Boolean getValid() {
        return valid;
    }

    public void setValid(Boolean valid) {
        this.valid = valid;
    }

    public Long getDays() {
        return days;
    }

    public void setDays(Long days) {
        this.days = days;
    }
}