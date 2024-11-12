package com.hydottech.Springboot.Tutorial.controller;

import com.hydottech.Springboot.Tutorial.entity.Department;
import com.hydottech.Springboot.Tutorial.error.DepartmentNotFoundException;
import com.hydottech.Springboot.Tutorial.service.DepartmentService;
import jakarta.validation.Valid;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
public class DepartmentController {

    @Autowired
    private DepartmentService departmentService;

    private final Logger LOG = LoggerFactory.getLogger(DepartmentController.class);

    @PostMapping("/departments")
    public Department saveDepartment(@Valid @ModelAttribute Department department) {
        LOG.info("Save Department Initiated");
        return departmentService.saveDepartment(department);
    }

    @GetMapping("/departments")
    public List<Department> fetchDepartments(){
        return departmentService.fetchDepartments();
    }

    @GetMapping("/departments/{Id}")
    public Department fetchOneDepartment(@PathVariable("Id") long Id) throws DepartmentNotFoundException {
        return departmentService.fetchOneDepartments(Id);
    }

    @DeleteMapping("/departments/{Id}")
    public String deleteOneDepartment(@PathVariable("Id") long Id){
        departmentService.deleteOneDepartments(Id);
        return "Department deleted successfully";
    }

    @PutMapping("/departments/{Id}")
    public Department updateDepartment(@PathVariable("Id") long Id, @ModelAttribute Department department){
        return departmentService.updateDepartment(Id, department);
    }

    @GetMapping("/departmentsName/{Name}")
    public Department fetchDepartmentByName(@PathVariable("Name") String Name){
        return departmentService.fetchDepartmentByName(Name);
    }






}
