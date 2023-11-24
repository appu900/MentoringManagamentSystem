package com.example.tryone.Services;


import com.example.tryone.Exception.UserException;
import com.example.tryone.Models.Mentor;

import java.util.List;

public interface MentorService {

    Mentor createMentor(Mentor mentor);
    List<Mentor> getAllMentors();
    Mentor getMentorById(Long id);
    void assignStudentToMentor(Long mentorId,List<Long> studentIds);

    Mentor loginMentor(String email, String password) throws UserException;
}
