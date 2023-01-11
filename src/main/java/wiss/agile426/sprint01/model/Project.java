package wiss.agile426.sprint01.model;

import javax.persistence.*;
import java.sql.Date;

@Entity
@Table(name = "project")
public class Project {

    public enum Status {
        PENDING,
        ACTIVE,
        INACTIVE;
    }

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    public long id;
    @Column(name = "name")
    public String name;
    @Column(name = "description")
    private String description;

    @Column(name = "date", nullable = false, updatable = false)
    private Date date;

    @Column(columnDefinition = "ENUM('PENDING', 'ACTIVE', 'INACTIVE')")
    @Enumerated(EnumType.STRING)
    private Status status;

  // coach object from user
    @Column(name = "coach")
    private String coach;

    //Setter
    public void setId(long id) {
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
    public void setCoach(String coach) {
        // set user name from user object
        this.coach = coach;
    }
    public void setName(String name) {
        this.name = name;
    }

    //GETTER
    public Date getDate() {
        return date;
    }
    public String getDescription(){
        return description;
    }
    public long getId() {
        return id;
    }
    public String getStatus(){
        return status.toString();
    }
    public String getCoach() {
        return coach;
    }
    public String getName() {
        return name;
    }

}