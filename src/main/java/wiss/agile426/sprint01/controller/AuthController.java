package wiss.agile426.sprint01.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;
import wiss.agile426.sprint01.model.Role;
import wiss.agile426.sprint01.model.User;
import wiss.agile426.sprint01.repository.RoleRepository;
import wiss.agile426.sprint01.repository.UserRepository;
import wiss.agile426.sprint01.security.LoginDto;
import wiss.agile426.sprint01.security.SignUpDto;

import java.util.Collections;

/**
 * @Insomnia: POST http://127.0.0.1:8080/api/auth/signup
 *        {
 * 			"name": "Bob Bobison",
 * 			"username": "xXbob69Xx",
 * 		  "email": "b123ob@bob.ch",
 * 		  "password": "secretbob"
 *    }
 *
 *
 * @Insomnia: POST http://127.0.0.1:8080/api/auth/signin
 *        {
 * 			"usernameOrEmail": "xXbo1b69Xx",
 * 		  "password": "secretbob"
 *    }
 */

@RestController
@CrossOrigin
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping("/signin")
    public ResponseEntity<String> authenticateUser(@RequestBody LoginDto loginDto){

        try {
        Authentication authentication = authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(
                loginDto.getUsernameOrEmail(), loginDto.getPassword()));
            SecurityContextHolder.getContext().setAuthentication(authentication);
            return new ResponseEntity<>("Signed-in successfully!.", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("Sign-in failed!.", HttpStatus.BAD_REQUEST);

        }

    }

    @PostMapping("/signup")
    public ResponseEntity<?> registerUser(@RequestBody SignUpDto signUpDto){

        // add check for username exists in a DB
        if(userRepository.existsByUsername(signUpDto.getUsername())){
            return new ResponseEntity<>("Username is already taken!", HttpStatus.BAD_REQUEST);
        }

        // add check for email exists in DB
        if(userRepository.existsByEmail(signUpDto.getEmail())){
            return new ResponseEntity<>("Email is already taken!", HttpStatus.BAD_REQUEST);
        }

        // create user object
        User user = new User();
        user.setName(signUpDto.getName());
        user.setUsername(signUpDto.getUsername());
        user.setEmail(signUpDto.getEmail());
        user.setPassword(passwordEncoder.encode(signUpDto.getPassword()));

        try {
            // "ROLE_ADMIN" or "ROLE_USER"
            Role roles = roleRepository.findByName(signUpDto.getRole()).get();
            user.setRoles(Collections.singleton(roles));
        } catch (Exception e) {
            return new ResponseEntity<>("Role not found!", HttpStatus.BAD_REQUEST);
        }

        try {
            userRepository.save(user);
            return new ResponseEntity<>("User registered successfully!", HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>("User registration failed!", HttpStatus.BAD_REQUEST);
        }

    }
}