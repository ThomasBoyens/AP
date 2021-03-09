<%@ page language='java' contentType='text/html; charset=UTF-8' pageEncoding='UTF-8' %>
<!DOCTYPE html>
<%@ page import="edu.ap.jdbc.JDBConnection" %>
<%@ page import="java.util.ArrayList" %>

<%
JDBConnection connection = null;

try {
    // extract values from POST
    String firstName = request.getParameter("firstName");
    String lastName = request.getParameter("lastName");
    int grade = Integer.parseInt(request.getParameter("grade"));

    // open connection and insert values
    connection = JDBConnection.getJDBConnection();
    connection.openConnection("Students", "root", "root");
    String insertSQL = "INSERT INTO GRADES(firstName, lastName, grade)" + "VALUES('" + firstName + "','" + lastName + "'," + grade + ");";

    connection.executeInsert(insertSQL);

    response.sendRedirect("list.jsp");
}
catch(Exception e) {
    System.out.println(e);
}
finally {
    connection.closeConnection();
}
%>
