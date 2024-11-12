package com.hydottech.Springboot.Tutorial.service;

import com.hydottech.Springboot.Tutorial.entity.Department;
import com.hydottech.Springboot.Tutorial.repository.DepartmentRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class DepartmentServiceTest {

    @Autowired
    private DepartmentService departmentService;

    @MockBean
    private DepartmentRepository departmentRepository;

    @BeforeEach
    void setUp() {
        Department department = Department.builder().
                                departmentName("Kitchen1").
                                departmentAddress("Accra").
                                departmentCode("KT-123").
                                departmentId(1L).
                                build();
        Mockito.when(departmentRepository.findByDepartmentNameIgnoreCaseKofi("Kitchen1"))
                .thenReturn(department);
    }

    @Test
    @DisplayName("Get Data based on department")
    public void whenDepartnameExist_thenDepartmentIsFound(){
        String departmentName = "Kitchen1";
        Department found = departmentService.fetchDepartmentByName(departmentName);

        assertEquals(departmentName, found.getDepartmentName());
    }



}