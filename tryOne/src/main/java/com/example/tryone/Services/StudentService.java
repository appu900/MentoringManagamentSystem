package com.example.tryone.Services;

import com.example.tryone.Exception.UserException;
import com.example.tryone.Models.Student;
import jdk.jshell.spi.ExecutionControl;

import java.util.List;

public interface StudentService {

    List<Student> getAllStudents();
    List<Student> getStudentsByMentorId(Long id);

    Student loginStudent(String email, String password) throws UserException;

    Student createStudent(Student student);
}
