package edu.ap.spring.controller;

import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.util.Map;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.connection.RedisConnection;
import org.springframework.data.redis.support.collections.RedisList;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import edu.ap.spring.aop.Interceptable;
import edu.ap.spring.redis.RedisService;


@Controller
public class UserController {

	@Autowired
	private RedisService redisService;

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

	@GetMapping("/")
	public String index(){
		//Set<String> users = redisService.keys("users:*");
		System.out.println(redisService.getKey(bytesToHex("mail" + "password") + ":"+ 1));
		return "index";
	}

	@GetMapping("/signup")
	public String signup() {
		

		return "signup";
	 }

	@PostMapping("/signup")
	@ResponseBody
	public String signup(@RequestParam("email") String email, @RequestParam("password") String password) {
		redisService.incr("userId");
		String userId = redisService.getKey("userId");
		String redisKey = "users:"+bytesToHex(email + password) + ":"+ userId;
		redisService.setKey(redisKey, email);
		// System.out.println(redisService.keys("users:*"));
		// System.out.println(redisKey);
		return "SIGNED UP";
	}



	@GetMapping("/user/{userId}")
	@ResponseBody
	public String getMailById(@PathVariable String userId){
		System.out.println(userId);
		Set<String> keys = redisService.keys("*"+userId);
		String mykey = keys.iterator().next();
		String email = redisService.getKey(mykey);
		return email;
	}

	@GetMapping("/login")
	public String login(){
		return "login";
	}

	@PostMapping("/login")
	@Interceptable
	@ResponseBody
	public String login(@RequestParam("email") String email, @RequestParam("password") String password) {
		String mailPassHex = bytesToHex(email + password);
		//System.out.println(redisService.keys("*"));
		String found = "";
		try {
			found = redisService.keys("*"+mailPassHex+"*").iterator().next();
			
		} catch (Exception e) {
			e.printStackTrace();
		};

		if(found != ""){
			//System.out.println(found);
			return "LOGGED IN";
		} else{
			return "NOT LOGGED IN";
		}

		
		
			
		
	}

	
}
