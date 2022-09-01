package com.mindgate.service;

import java.util.List;

import com.mindgate.pojo.Employee;
import com.mindgate.repository.EmployeeRepository;
import com.mindgate.repository.EmployeeRepositoryInterface;

public class EmployeeService implements EmployeeServiceInterface {
	private EmployeeRepositoryInterface employeeRepositoryInterface = new EmployeeRepository();

	@Override
	public boolean addNewEmployee(Employee employee) {

		System.out.println("in service");
		return employeeRepositoryInterface.addNewEmployee(employee);
	}

	@Override
	public List<Employee> getAllEmployees() {

		return employeeRepositoryInterface.getAllEmployees();
	}

	@Override
	public boolean deleteEmployeeById(int employeeId) {

		return employeeRepositoryInterface.deleteEmployeeById(employeeId);
	}

	@Override
	public boolean updateEmployee(String name, int employeeId) {
		
		return employeeRepositoryInterface.updateEmployee(name, employeeId);
	}

}
