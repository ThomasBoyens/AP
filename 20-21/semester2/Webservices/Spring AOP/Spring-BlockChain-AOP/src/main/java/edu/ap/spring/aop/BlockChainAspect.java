package edu.ap.spring.aop;

import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.*;
import org.springframework.stereotype.*;

import edu.ap.spring.service.Wallet;
import edu.ap.spring.transaction.Transaction;

@Component
@Aspect
public class BlockChainAspect {

    @Around("execution(public * sendFunds(..))")
    public Transaction checkBalance(ProceedingJoinPoint joinPoint) throws Throwable {

        Wallet wallet = (Wallet) joinPoint.getTarget();
        Object[] args = joinPoint.getArgs();
        float value = (float) args[1];
        float balance = wallet.getBalance();

        if (balance < value) {
            System.out.println("# Not Enough funds to send transaction. Transaction Discarded.");
            throw new Exception();
        }

        Transaction result = (Transaction) joinPoint.proceed();

        return result;
    }

    /*@Before("@annotation(edu.ap.spring.controller.annotation.GetMapping) && execution(public * getBalance(..))")
    public String checkWallet(JoinPoint joinPoint) throws Throwable {
        System.out.println(joinPoint.getTarget());
        String result = (String) joinPoint.getTarget();
        return result;
    }*/

    /*@Before("@annotation(edu.ap.spring.controller.annotation.PostMapping) && execution(public * transaction(..))")
    public String checkTransaction(JoinPoint joinPoint) throws Throwable {
        System.out.println(joinPoint.getTarget());
        String result = (String) joinPoint.getTarget();
        return result;
    }*/

}
