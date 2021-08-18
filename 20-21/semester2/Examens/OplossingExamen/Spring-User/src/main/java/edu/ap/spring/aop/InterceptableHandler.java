package edu.ap.spring.aop;

import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;

import javax.servlet.http.HttpServletRequest;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import edu.ap.spring.redis.RedisService;

import org.aopalliance.intercept.Joinpoint;
import org.aspectj.lang.*;
import org.aspectj.lang.annotation.*;
import org.springframework.stereotype.Component;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;


@Aspect
@Component
public class InterceptableHandler {

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

    @After("@annotation(edu.ap.spring.aop.Interceptable)")
    public void setBitAfterLogin(JoinPoint joinPoint) {
        Object[] args = joinPoint.getArgs();
        for(Object arg : args) {
            System.out.println(arg);
        }

        String mailPassHex = bytesToHex(args[0] +""+ args[1]);
		//System.out.println(redisService.keys("*"));
		String found = "";
        Integer userId;
		try {
			found = redisService.keys("*"+mailPassHex+"*").iterator().next();
			
		} catch (Exception e) {
			e.printStackTrace();
		};
        if (found != ""){
            userId = Integer.parseInt(found.substring(found.length()-1));
            System.out.println(userId);
            redisService.setBit("login", userId, true);
        }

    }

     /*@Before("@annotation(edu.ap.spring.aop.Interceptable)")
     public void beforeInterceptable(JoinPoint joinPoint) {
        System.out.println("Before " + joinPoint.getSignature());
    }

    @After("@annotation(edu.ap.spring.aop.Interceptable)")
    public void afterInterceptable(JoinPoint joinPoint) {
        System.out.println("After " + joinPoint.getSignature());
    }*/

    /*@Before("execution(* edu.ap.spring.jpa.PersonRepository.findAll(..))")
    public void beforeInterceptable2(JoinPoint joinPoint) {
        System.out.println("Before " + joinPoint.getSignature());
    }*/

    /*@Before("execution(* edu.ap.spring.jpa.PersonRepository.findByName(..))")
    public void beforeInterceptable3(JoinPoint joinPoint) {
        System.out.println("Before " + joinPoint.getSignature());
        Object[] args = joinPoint.getArgs();
        for(Object arg : args) {
            System.out.println(arg);
        }
    }*/

    @Around("@annotation(edu.ap.spring.aop.Interceptable) && execution(public * get*(..))")
    public ResponseEntity<String> aroundInterceptable(ProceedingJoinPoint joinPoint) throws Throwable {
        System.out.println("Around " + joinPoint.getSignature());
        HttpServletRequest request = ((ServletRequestAttributes) RequestContextHolder
                .currentRequestAttributes())
                .getRequest();
        System.out.println(request.getMethod());
        System.out.println(request.getRequestURI());
        System.out.println(request.getRemoteAddr());
        
        String result = joinPoint.proceed().toString();
        System.out.println("RESULT : " + result);
        
        return new ResponseEntity<String>("Hello Intercepted Person", HttpStatus.OK);
    }
}
