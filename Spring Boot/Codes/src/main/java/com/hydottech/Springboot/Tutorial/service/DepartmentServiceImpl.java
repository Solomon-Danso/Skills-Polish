package com.hydottech.Springboot.Tutorial.service;

import com.hydottech.Springboot.Tutorial.entity.Department;
import com.hydottech.Springboot.Tutorial.error.DepartmentNotFoundException;
import com.hydottech.Springboot.Tutorial.repository.DepartmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.lang.reflect.Field;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class DepartmentServiceImpl implements DepartmentService{

    @Autowired
    private DepartmentRepository departmentRepository;

    @Override
    public Department saveDepartment(Department department) {
        return departmentRepository.save(department);
    }

    @Override
    public List<Department> fetchDepartments() {
        return departmentRepository.findAll();
    }

    @Override
    public Department fetchOneDepartments(long id) throws DepartmentNotFoundException {

    Optional<Department> department = departmentRepository.findById(id);
    if(!department.isPresent()){
        throw new DepartmentNotFoundException("Department not available");
    }
    return department.get();

    }

    @Override
    public void deleteOneDepartments(long id) {
        departmentRepository.deleteById(id);
    }

    @Override
    public Department updateDepartment(long id, Department department) {
        Department db = departmentRepository.findById(id).orElseThrow(() -> new RuntimeException("Department not found"));

        // Get all the fields of the Department class
        Field[] fields = Department.class.getDeclaredFields();

        for (Field field : fields) {
            field.setAccessible(true);
            try {
                // Get the value of the current field from the input department
                Object value = field.get(department);

                // Check if the value is not null and not an empty string
                if (Objects.nonNull(value) && !"".equals(value.toString().trim())) {
                    // Set the value of the current field in the db department
                    field.set(db, value);
                }
            } catch (IllegalAccessException e) {
                e.printStackTrace(); // Handle exception as appropriate
            }
        }

        return departmentRepository.save(db);
    }

    @Override
    public Department fetchDepartmentByName(String name) {
        return departmentRepository.findByDepartmentNameIgnoreCaseKofi(name);
    }


}
