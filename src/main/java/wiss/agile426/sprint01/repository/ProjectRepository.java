package wiss.agile426.sprint01.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import wiss.agile426.sprint01.model.Project;

import java.util.List;

public interface ProjectRepository extends JpaRepository<Project, Integer> {
    List<Project> findByStatus(Project.Status status);
}