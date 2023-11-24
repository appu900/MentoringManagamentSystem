package com.example.tryone.Repository;

import com.example.tryone.Models.Student;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface StudentRepository extends JpaRepository<Student,Long> {
    List<Student> findByMentorId(Long id);
    Student findByEmail(String email);
}
