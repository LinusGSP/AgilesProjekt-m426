package wiss.agile426.sprint01.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import wiss.agile426.sprint01.Sprint01Application;
import wiss.agile426.sprint01.model.Project;
import wiss.agile426.sprint01.repository.ProjectRepository;

import javax.validation.Valid;

import static wiss.agile426.sprint01.model.Project.Status.*;

@CrossOrigin
@RestController
@RequestMapping(path = "/api/project/")
public class ProjectController {
    Sprint01Application application;

    @Autowired
    private ProjectRepository projectRepository;

    @PostMapping(path = "")
    public @ResponseBody ResponseEntity<String> addProject(@Valid @RequestBody Project project){
        projectRepository.save(project);
        return ResponseEntity.status(200).body("Project was succesfully addet");
    }
    @GetMapping(path = "")
    public @ResponseBody Iterable<Project> getAllProjects(){
        return projectRepository.findAll();
    }

    @GetMapping(path = "/active/")
    public @ResponseBody Iterable<Project> getAllActiveProjects(){
        return projectRepository.findByStatus(ACTIVE);
    }
}