package com.example.tryone.Controller;
import com.example.tryone.Exception.UserException;
import com.example.tryone.Models.Mentor;
import com.example.tryone.Models.Student;
import com.example.tryone.Services.MentorService;
import com.example.tryone.Services.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/mentor")
@CrossOrigin(origins = {"http://localhost:3000","http://localhost:3001"})
public class MentorController {

    @Autowired
    private MentorService mentorService;

    @Autowired private StudentService studentService;

    @GetMapping("/all")
    public List<Mentor> getAlMentorHandler(){
        return mentorService.getAllMentors();
    }

    @PostMapping("/{mentorId}")
    public ResponseEntity<String> assignStudentToMentorHandler(@PathVariable("mentorId") Long mentorId,@RequestBody List<Long> studentIds){
        mentorService.assignStudentToMentor(mentorId,studentIds);
        return ResponseEntity.ok("student assigned to mentor");
    }


    @PostMapping("/register")
    public ResponseEntity<Mentor> handleCreateMentor(@RequestBody Mentor mentor){
        return ResponseEntity.ok(mentorService.createMentor(mentor));
    }


    @GetMapping("/student/{mentorId}")
    public List<Student> getStudentsByMentorIdHandler(@PathVariable("mentorId") Long mentorId){
        return studentService.getStudentsByMentorId(mentorId);
    }

    @PostMapping("/login")
    public ResponseEntity<Mentor> handleLoginMentor(@RequestBody Mentor mentor) throws UserException {
        return ResponseEntity.ok(mentorService.loginMentor(mentor.getEmail(),mentor.getPassword()));
    }
}
