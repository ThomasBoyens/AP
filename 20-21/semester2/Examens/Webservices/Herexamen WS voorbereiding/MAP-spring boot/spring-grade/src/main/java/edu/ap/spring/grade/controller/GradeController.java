package edu.ap.spring.grade.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import edu.ap.spring.grade.jpa.*;

@Controller
public class GradeController {

    @Autowired
    private GradeRepository repository;

    @GetMapping("/")
    public String index() {
        return "redirect:/list";
    }

    @GetMapping("/list")
    public String list(Model model) {
        model.addAttribute("grades", repository.findAll());

        return "list";
    }

    @GetMapping("/{firstName}/{lastName}")
    public String getDetail(@PathVariable("firstName") String firstName, @PathVariable("lastName") String lastName,
            Model model) {

        Grade grade = repository.findByFirstNameAndLastName(firstName, lastName);
        model.addAttribute("grade", grade);

        return "detail";
    }

    @GetMapping("/grade")
    public String grade() {
        return "gradeForm";
    }

    @PostMapping("/grade")
    public String saveGrade(@RequestParam("firstName") String firstName, @RequestParam("lastName") String lastName,
            @RequestParam("grade") int grade) {

        repository.save(new Grade(firstName, lastName, grade));

        return "redirect:/list";
    }

}