package com.TDN.Employee.Services;

import java.util.List;

import com.TDN.Employee.Model.Employee;

public interface EmployeeService {
    Employee createEmployee (Employee employee);

    List<Employee> getAllEmployees();

    boolean deleteEmployee(Long id);

    public Employee getEmployeeById(Long id);

    public Employee updateEmployee(Long id, Employee employee);

}
