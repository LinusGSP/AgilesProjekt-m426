package wiss.agile426.sprint01.model;

import org.hibernate.annotations.CreationTimestamp;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Table(name = "project")
public class Project {

    public Project() {
    }

    public enum Status {
        PENDING,
        ACTIVE,
        INACTIVE;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Integer id;

    @Column(name = "date", nullable = false, updatable = false)
    @CreationTimestamp
    private Date date;


    // This user is the Coach
    @Column(name = "name")
    private String name;
    @Column(name = "description")
    private String description;

    @Column(columnDefinition = "ENUM('PENDING', 'ACTIVE', 'INACTIVE')")
    @Enumerated(EnumType.STRING)
    private Status status;

    @Column(name = "user_name")
    private String coach;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getCoach() {
        return coach;
    }

    public void setCoach(String coach) {
        this.coach = coach;
    }

    //Setter
    public void setId(Integer id) {
        this.id = id;
    }
    public void setDate(Date date) {
        this.date = date;
    }
    public void setDescription(String description) {
        this.description = description;
    }
    public void setStatus(Status status) {
        this.status = status;
    }

    //GETTER
    public Date getDate() {
        return date;
    }
    public String getDescription(){
        return description;
    }
    public Integer getId() {
        return id;
    }
    public String getStatus(){
        return status.toString();
    }

}