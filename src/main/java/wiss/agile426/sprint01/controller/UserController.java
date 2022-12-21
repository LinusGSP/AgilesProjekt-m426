package wiss.agile426.sprint01.controller;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;
import wiss.agile426.sprint01.repository.UserRepository;


@CrossOrigin
@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping(path = "/getByEmail", produces = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody String getUserByEmail(@RequestParam String email){
        return userRepository.findByEmailgetData(email);
    }

}