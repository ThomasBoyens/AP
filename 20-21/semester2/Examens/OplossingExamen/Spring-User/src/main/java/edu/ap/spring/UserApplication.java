package edu.ap.spring;

import java.util.HashMap;
import java.util.Map;

import org.springframework.context.ApplicationContext;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.redis.connection.RedisConnectionFactory;
import org.springframework.data.redis.listener.ChannelTopic;
import org.springframework.data.redis.listener.RedisMessageListenerContainer;
import org.springframework.data.redis.listener.adapter.MessageListenerAdapter;

import edu.ap.spring.controller.UserController;
import edu.ap.spring.redis.RedisService;

@SpringBootApplication
public class UserApplication {

	private String CHANNEL = "edu:ap:redis";
	@Autowired
	private RedisService service;

	// @Bean
	// RedisMessageListenerContainer container(RedisConnectionFactory connectionFactory,
	// 										MessageListenerAdapter listenerAdapter) {

	// 	RedisMessageListenerContainer container = new RedisMessageListenerContainer();
	// 	container.setConnectionFactory(connectionFactory);
	// 	container.addMessageListener(listenerAdapter, new ChannelTopic(CHANNEL));

	// 	return container;
	// }

	// @Bean
	// MessageListenerAdapter listenerAdapter(UserController controller) {
	// 	return new MessageListenerAdapter(controller, "onMessage");
	// }

	

	@Bean
	public CommandLineRunner commandLineRunner(ApplicationContext ctx){
		return (args) -> {
			this.service.flushDb();
		   this.service.setKey("userId", "0");
		};
	}
	public static void main(String[] args) {
		SpringApplication.run(UserApplication.class, args);
	}
}
