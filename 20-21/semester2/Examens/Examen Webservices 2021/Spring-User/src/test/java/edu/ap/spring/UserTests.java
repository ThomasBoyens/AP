package edu.ap.spring;

import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;

import static org.junit.jupiter.api.Assertions.assertTrue;
import org.junit.jupiter.api.*;
import org.junit.jupiter.api.MethodOrderer.OrderAnnotation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.*;
import org.springframework.util.*;

import edu.ap.spring.redis.RedisService;

@SpringBootTest
@TestMethodOrder(OrderAnnotation.class) 
public class UserTests {

	@Autowired
	private RedisService service;
	private String URL = "http://localhost:8080/";

	@Test
	@Order(1)
  	public void testSignup() throws Exception {
		service.flushDb();
 		TestRestTemplate testRestTemplate = new TestRestTemplate();
		HttpHeaders headers = new HttpHeaders();
		headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);
		MultiValueMap<String, String> map = new LinkedMultiValueMap<String, String>();
		map.add("email", "email1@ap.be");
		map.add("password", "s3cr3t");

		HttpEntity<MultiValueMap<String, String>> request = new HttpEntity<MultiValueMap<String, String>>(map, headers);
		ResponseEntity<String> response = testRestTemplate.postForEntity(URL + "signup", request , String.class);

		String hashed = bytesToHex("email1@ap.bes3cr3t");

		assertTrue(response.getBody().contains("SIGNED UP"));
  		assertTrue(service.keys("*" + hashed + "*").size() > 0);
  	}

	@Test
	@Order(2)
  	public void testLogin1() throws Exception {
 		TestRestTemplate testRestTemplate = new TestRestTemplate();
		HttpHeaders headers = new HttpHeaders();
		headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);
		MultiValueMap<String, String> map = new LinkedMultiValueMap<String, String>();
		map.add("email", "email1@ap.be");
		map.add("password", "s3cr3t");

		HttpEntity<MultiValueMap<String, String>> request = new HttpEntity<MultiValueMap<String, String>>(map, headers);
		ResponseEntity<String> response = testRestTemplate.postForEntity(URL + "login", request , String.class);
 
  		assertTrue(response.getBody().contains("LOGGED IN"));
  	}

	@Test
	@Order(3)
  	public void testLogin2() throws Exception {
 		TestRestTemplate testRestTemplate = new TestRestTemplate();
		HttpHeaders headers = new HttpHeaders();
		headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);
		MultiValueMap<String, String> map = new LinkedMultiValueMap<String, String>();
		map.add("email", "email1@ap.be");
		map.add("password", "blah");

		HttpEntity<MultiValueMap<String, String>> request = new HttpEntity<MultiValueMap<String, String>>(map, headers);
		ResponseEntity<String> response = testRestTemplate.postForEntity(URL + "login", request , String.class);
 
  		assertTrue(response.getBody().contains("NOT LOGGED IN"));
  	}

	@Test
	@Order(4)
	public void testEmail() throws Exception {
		TestRestTemplate testRestTemplate = new TestRestTemplate();
	
		ResponseEntity<String> response = testRestTemplate.getForEntity(URL + "user/1", String.class);
   
		assertTrue(response.getBody().contains("email1@ap.be"));
	}

	@Test
	@Order(5)
  	public void testBitOps() throws Exception {
  		assertTrue(service.getBit("login", 1));
  	}

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
}

