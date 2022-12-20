package wiss.agile426.sprint01;


import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.context.annotation.Bean;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import wiss.agile426.sprint01.controller.UserController;
import org.springframework.test.web.servlet.MockMvc;
import wiss.agile426.sprint01.repository.UserRepository;

import static org.assertj.core.api.Assertions.assertThat;

@ExtendWith(SpringExtension.class)
@WebMvcTest
@AutoConfigureMockMvc
@ContextConfiguration(classes = UserController.class)
public class UserControllerTest {

    @Autowired private UserController userController;

    @Autowired private UserRepository userRepository;

    @Autowired private MockMvc mockMvc;

    @Test
    public void CheckLanguageControllerInject_NotNull() throws Exception {
        assertThat(userController).isNotNull();
    }
}
