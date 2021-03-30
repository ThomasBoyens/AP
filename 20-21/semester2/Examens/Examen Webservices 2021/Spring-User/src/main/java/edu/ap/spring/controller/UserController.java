package edu.ap.spring.controller;

import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.util.HashMap;
import java.util.Map;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import edu.ap.spring.redis.RedisService;

@Controller
public class UserController {

	private RedisService service;

	private String bytesToHex(String str) {
		String retString = "";
		try {
			MessageDigest digest = MessageDigest.getInstance("SHA-256");
			byte[] encodedhash = digest.digest((str).getBytes(StandardCharsets.UTF_8));
			StringBuffer hexString = new StringBuffer();
			for (int i = 0; i < encodedhash.length; i++) {
				String hex = Integer.toHexString(0xff & encodedhash[i]);
				if (hex.length() == 1)
					hexString.append('0');
				hexString.append(hex);
			}
			retString = hexString.toString();
		} catch (Exception ex) {
			System.out.println(ex.getMessage());
		}

		return retString;
	}

	/*@Before() 
	public void init() {
		service.setKey("usercount", "0");
	}*/

	//sign up user
	@GetMapping("/signup")
	public String getSignUpForm() {
		return "signup";
	}

	@PostMapping("/signup")
	public String signup(@RequestParam("email") String email, 
	@RequestParam("paswoord") String paswoord,  
	RedirectAttributes redirectAttributes) {
		
		service.setKey("usercount", "0");
		service.incr("usercount");
		service.keys("users:" + bytesToHex(email + paswoord) + ":" + "1");

		return "SIGNED UP";
	}

	// log in user
	@GetMapping("/login")
	public String getLogInForm() {
		return "login";
	}

	@PostMapping("/login")
	public String login(@RequestParam("email") String email, @RequestParam("paswoord") String paswoord) {

		String result;
		if(service.exists(service.getKey(bytesToHex(email + paswoord)))) {
			result = "LOGGED IN";
		} else {
			result = "NOT LOGGED IN";
		}

		return result;
	}

	// get user detail
	@GetMapping("/{email}/{userid}")
    public String getDetail(@PathVariable("email") String email,
	Model model) {

        return email;
    }

}
