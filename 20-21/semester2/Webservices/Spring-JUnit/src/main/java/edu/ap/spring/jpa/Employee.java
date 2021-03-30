package edu.ap.spring.jpa;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "person")
public class Employee {
 
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
 
    @Column
    private String name;
    
    @Column
    private String status;
 
    public Employee() {}
    
    public Employee(String name, String status) {
    		this.name = name;
    		this.status = status;
    }

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	/*@Override
    public boolean equals(Object o) {
		Employee other = (Employee) o;
    	return this.name.equals(other.name) &&
      			this.status.equals(other.status);
	}*/
}
