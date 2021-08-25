package ap.ti.examen.jpa;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import java.time.LocalDate;

@Entity
public class DateCheckEntry {
    @Id
    @GeneratedValue
    private long id;

    private LocalDate checkedDate;

    private Boolean valid;

    private Long days;

    public DateCheckEntry() {
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
