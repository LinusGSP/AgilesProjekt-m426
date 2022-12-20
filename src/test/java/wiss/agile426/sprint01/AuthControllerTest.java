package wiss.agile426.sprint01;


import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import wiss.agile426.sprint01.controller.AuthController;
import wiss.agile426.sprint01.repository.ProjectRepository;
import wiss.agile426.sprint01.repository.UserRepository;
import wiss.agile426.sprint01.repository.RoleRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import wiss.agile426.sprint01.security.LoginDto;
import wiss.agile426.sprint01.security.SignUpDto;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@ExtendWith(SpringExtension.class)
@WebMvcTest
@AutoConfigureMockMvc
@ContextConfiguration(classes = AuthController.class)
public class AuthControllerTest {
    @Autowired private AuthController authController;
    @Autowired private MockMvc mockMvc;

    @MockBean private AuthenticationManager authenticationManager;
    @MockBean private UserRepository userRepository;
    @MockBean private ProjectRepository projectRepository;
    @MockBean private RoleRepository roleRepository;
    @MockBean private PasswordEncoder passwordEncoder;

    @Test
    public void CheckLanguageControllerInject_NotNull() throws Exception {
        assertThat(authController).isNotNull();
    }

    @Test
    public void testUserRegistration_isOk() throws Exception {
        /*
        Doesn't work
         */
        SignUpDto signUpDto = new SignUpDto();
        signUpDto.setName("John Doe");
        signUpDto.setUsername("johndoe");
        signUpDto.setEmail("johndoe@example.com");
        signUpDto.setPassword("password");

        ObjectMapper objectMapper = new ObjectMapper();

        String signUpDtoJson = objectMapper.writeValueAsString(signUpDto);

        mockMvc.perform(post("/signup")
                        .contentType(MediaType.APPLICATION_JSON_VALUE)
                        .content(signUpDtoJson))
                .andExpect(status().isOk())
                .andExpect(content().string("User registered successfully"));
    }
}