package com.example.tryone.Controller;
import com.example.tryone.Exception.UserException;
import com.example.tryone.Models.Student;
import com.example.tryone.Services.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/student")
@CrossOrigin(origins = {"http://localhost:3000","http://localhost:3001"})
public class StudentController {

    @Autowired
    private StudentService studentService;

    @GetMapping("")
    public List<Student> getAllStudenthandler(){
        return studentService.getAllStudents();
    }

    @GetMapping("/mentor/{mentorId")
    public List<Student> getStudentsByMentorIdHandler(@PathVariable Long mentorId){
        return studentService.getStudentsByMentorId(mentorId);
    }

    @PostMapping("/register")
    public ResponseEntity<Student> handleCreateStudent(@RequestBody Student student){
        return ResponseEntity.ok(studentService.createStudent(student));
    }

    @PostMapping("/login")
    public ResponseEntity<Student> handleLoginStudent(@RequestBody Student student) throws UserException {
        return ResponseEntity.ok(studentService.loginStudent(student.getEmail(),student.getPassword()));
    }

    @GetMapping("/all")
    public List<Student> hanldeAllStudent(){
        return studentService.getAllStudents();
    }
}
