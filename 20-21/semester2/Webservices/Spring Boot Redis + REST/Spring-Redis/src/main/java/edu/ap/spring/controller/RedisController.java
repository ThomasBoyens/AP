package edu.ap.spring.controller;

import java.util.ArrayList;
import java.util.Map;
import java.util.Set;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import edu.ap.spring.redis.RedisService;

@Controller
public class RedisController {

    private String CHANNEL = "edu:ap:redis";
    private ArrayList<String> redisMessages = new ArrayList<String>();
    @Autowired
    private RedisService service;

    @GetMapping("/")
    public String index() {
        return "redirect:/messages";
    }

    @GetMapping("/messages")
    public String messages(Model model) {
        model.addAttribute("messages", redisMessages);

        return "messages";
    }

    // messaging
    public void onMessage(String message) {
        this.redisMessages.add(message);
    }

    @GetMapping("/message")
    public String message() {
        return "messageForm";
    }

    @PostMapping("/message")
    public String saveMessage(@RequestParam("message") String message) {

        service.sendMessage(CHANNEL, message );

        return "redirect:/messages";
    }

    @GetMapping("/movies")
    public String movies(Model model) {
        
        ArrayList<String> movieList = new ArrayList<String>();
        Set<String> movies = service.keys("movies:*");
        for(String m : movies) {
            String movie = "";
            // get hash with actors
            Map<Object, Object> actors = service.hgetAll(m);
            // get all parts of the key, eg : ["movies, "1998", "the Big Lebowski"]
            String[] parts = m.split(":");

            movie += parts[2] + " (" + parts[1] + ") ";
            movie += "Actors: ";
            // iterate over actors
            StringBuilder b = new StringBuilder();
            // k: key, v: value
            actors.forEach((k, v) -> b.append(v + ", "));
            movie += b.toString();
            // strip off last
            movie = movie.substring(0, movie.length() - 2);

            movieList.add(movie);
        }

        model.addAttribute("moviescount", service.getKey("moviescount"));
        model.addAttribute("movies", movieList);

        return "movies";

    }

}
