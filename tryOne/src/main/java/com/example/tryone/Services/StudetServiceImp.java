package com.example.tryone.Services;

import com.example.tryone.Exception.UserException;
import com.example.tryone.Models.Student;
import com.example.tryone.Repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudetServiceImp implements StudentService{

   @Autowired
   private StudentRepository studentRepository;
    @Override
    public List<Student> getAllStudents() {
        return studentRepository.findAll();
    }

    @Override
    public List<Student> getStudentsByMentorId(Long id) {
        return studentRepository.findByMentorId(id);
    }

    @Override
    public Student loginStudent(String email, String password) throws UserException {
        Student student = studentRepository.findByEmail(email);
        if(student!=null && student.getPassword().equals(password)){
            return student;
        }
        else{
            throw new UserException("Invalid email or password");
        }
    }

    @Override
    public Student createStudent(Student student) {
        return studentRepository.save(student);
    }
}
