package com.example.tryone.Repository;


import com.example.tryone.Models.Mentor;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MentorRepository extends JpaRepository<Mentor,Long> {
    Mentor findByEmail(String email);
}
