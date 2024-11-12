package com.hydottech.Springboot.Tutorial.repository;

import com.hydottech.Springboot.Tutorial.entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentRepositoryInterface extends JpaRepository<Student, Long> {


}
