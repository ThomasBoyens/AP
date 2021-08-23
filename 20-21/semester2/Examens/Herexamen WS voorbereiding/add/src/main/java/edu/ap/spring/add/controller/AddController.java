package edu.ap.spring.add.controller;

import java.io.File;
import java.nio.file.Files;
import java.util.List;

import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

@Controller
public class AddController {
    
    @GetMapping("/")
    public String index(){
        return "index";
    }
    
    @GetMapping("/{line1}/{line2}")
    public String getLines(@PathVariable("line1") int line1, @PathVariable("line2") int line2, Model model) throws Exception{
        File data = new ClassPathResource("static/numbers.txt").getFile();
        List<String> lines = Files.readAllLines(data.toPath());

        int getal1;
        int getal2;
        String result;

        try{
            getal1 = Integer.parseInt(lines.get(line1 - 1));
            getal2 = Integer.parseInt(lines.get(line2 - 1));

            result = Integer.toString(getal1 + getal2);
        }
        catch(Exception ex){
            result = "Numbers are not in range, please give new numbers!";
        }

        model.addAttribute("result", result);

        return "result";
    }
} 