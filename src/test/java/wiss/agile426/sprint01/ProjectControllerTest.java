package wiss.agile426.sprint01;


import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.web.servlet.MockMvc;
import wiss.agile426.sprint01.controller.AuthController;
import wiss.agile426.sprint01.controller.ProjectController;
import wiss.agile426.sprint01.repository.ProjectRepository;
import wiss.agile426.sprint01.repository.RoleRepository;
import wiss.agile426.sprint01.repository.UserRepository;

import static org.assertj.core.api.Assertions.assertThat;

@ExtendWith(SpringExtension.class)
@WebMvcTest
@AutoConfigureMockMvc
@ContextConfiguration(classes = AuthController.class)
public class ProjectControllerTest {

    @Autowired private ProjectController projectController;

    @Autowired private ProjectRepository projectRepository;
    @MockBean
    private AuthenticationManager authenticationManager;
    @MockBean private UserRepository userRepository;
    @MockBean private RoleRepository roleRepository;
    @MockBean private PasswordEncoder passwordEncoder;

    @Autowired private MockMvc mockMvc;

    @Test
    public void CheckProjectControllerInject_NotNull() throws Exception {
        assertThat(projectController).isNotNull();
    }
}
