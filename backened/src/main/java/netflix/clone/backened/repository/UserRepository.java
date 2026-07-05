package netflix.clone.backened.repository;


import netflix.clone.backened.enitity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Integer>{


}
