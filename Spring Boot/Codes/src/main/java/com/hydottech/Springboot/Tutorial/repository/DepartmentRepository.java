package com.hydottech.Springboot.Tutorial.repository;

import com.hydottech.Springboot.Tutorial.entity.Department;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface DepartmentRepository extends JpaRepository<Department,Long> {

    public Department findByDepartmentName(String departmentName);
    @Query(value = "SELECT * FROM DEPARTMENT WHERE DEPARTMENT_NAME ILIKE :departmentName", nativeQuery = true)
    public Department findByDepartmentNameIgnoreCaseKofi(@Param("departmentName") String departmentName);


}
