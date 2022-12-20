package wiss.agile426.sprint01.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import wiss.agile426.sprint01.model.Role;

import java.util.Optional;

public interface RoleRepository extends JpaRepository<Role, Integer> {
    Optional<Role> findByName(String name);
}
