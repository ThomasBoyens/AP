package edu.ap.jdbc;

import java.sql.*;
import java.util.ArrayList;

public class JDBConnection {

    private static JDBConnection instance = null;
    private Connection conn = null;

    private JDBConnection() {
        System.out.println("Instantiated");
    }

    public static synchronized JDBConnection getJDBConnection() {

        if(instance == null) {
            instance = new JDBConnection();
        }
        return instance;
    }

    public void openConnection(String database, String user, String pwd) {
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            String url = "jdbc:mysql://127.0.0.1/" + database + "?serverTimezone=UTC";
            conn = DriverManager.getConnection(url, user, pwd);
            System.out.println("Connection opened");
        }
        catch (Exception e) {
            System.out.println(e);
        }
    }

    public void closeConnection() {
        try {
            conn.close();
            System.out.println("Connection closed");
        }
        catch (Exception e) {
            System.out.println(e);
        }
    }

    public void executeInsert(String sql) {
        try {
            Statement stmt = conn.createStatement();
            stmt.executeUpdate(sql);
            stmt.close();
        }
        catch(SQLException ex) {
            System.out.println("Error: " + ex);
        }
    }

    public ArrayList<Grade> executeSelect(String sql){
        ResultSet rs = null;
        ArrayList<Grade> result = new ArrayList<Grade>();
        try{
            Statement stmt = conn.createStatement();
            rs = stmt.executeQuery(sql);
            while(rs.next()){
                result.add(new Grade(rs.getString(1), rs.getString(2), rs.getInt(3)));
            }
            stmt.close();
        }
        catch(SQLException ex){
            System.out.println("Error: " + ex);
        }

        return result;
    }
}