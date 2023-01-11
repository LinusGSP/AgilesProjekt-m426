package wiss.agile426.sprint01.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import wiss.agile426.sprint01.Sprint01Application;
import wiss.agile426.sprint01.model.Project;
import wiss.agile426.sprint01.repository.ProjectRepository;
import wiss.agile426.sprint01.repository.UserRepository;

import javax.validation.Valid;

import static wiss.agile426.sprint01.model.Project.Status.*;

@CrossOrigin
@RestController
@RequestMapping(path = "/api/project/")
public class ProjectController {
    Sprint01Application application;

    @Autowired
    private ProjectRepository projectRepository;
    private UserRepository userRepository;

    @PostMapping(path = "")
    public @ResponseBody ResponseEntity<String> addProject(@Valid @RequestBody Project project){
        projectRepository.save(project);
        return ResponseEntity.status(200).body("Project was successfully added");
    }
    @GetMapping(path = "")
    public @ResponseBody Iterable<Project> getAllProjects(){
        return projectRepository.findAll();
    }

    @GetMapping(path = "/active/")
    public @ResponseBody Iterable<Project> getAllActiveProjects(){
        return projectRepository.findByStatus(ACTIVE);
    }

    @PutMapping(path = "")
    public @ResponseBody ResponseEntity<String> updateProject(@RequestBody Project newProject){
        Project project = projectRepository.findById(newProject.id).get(0);
        
        project.setCoach(newProject.coach);

        return ResponseEntity.status(200).body("Successfully addet a Coach to Project: " + newProject.id + "---"+ newProject.name+". New Coach:" + projectRepository.findById(newProject.coach.id).get(0).getId());
    }

}