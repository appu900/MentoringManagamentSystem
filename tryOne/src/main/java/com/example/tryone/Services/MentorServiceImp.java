package com.example.tryone.Services;

import com.example.tryone.Exception.UserException;
import com.example.tryone.Models.Mentor;
import com.example.tryone.Models.Student;
import com.example.tryone.Repository.MentorRepository;
import com.example.tryone.Repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MentorServiceImp implements MentorService{

    @Autowired private MentorRepository mentorRepository;
    @Autowired private StudentService studentService;
    @Autowired private StudentRepository studentRepository;

    @Override
    public Mentor createMentor(Mentor mentor) {
        return mentorRepository.save(mentor);
    }

    @Override
    public List<Mentor> getAllMentors() {
        return mentorRepository.findAll();
    }

    @Override
    public Mentor getMentorById(Long id) {
        return mentorRepository.findById(id).orElse(null);
    }

    @Override
    public void assignStudentToMentor(Long mentorId, List<Long> studentIds) {
        Mentor mentor = mentorRepository.findById(mentorId).orElseThrow(()->new RuntimeException("mentor not found"));
        List<Student> students = studentRepository.findAllById(studentIds);
        mentor.getStudents().addAll(students);
        mentorRepository.save(mentor);
        for(Student student:students){
            student.setMentor(mentor);
            studentRepository.save(student);
        }
    }

    @Override
    public Mentor loginMentor(String email, String password) throws UserException {
        Mentor mentor = mentorRepository.findByEmail(email);
        if(mentor!=null && mentor.getPassword().equals(password)){
            return mentor;
        }
        else{
            throw new UserException("Invalid email or password");
        }

    }
}
