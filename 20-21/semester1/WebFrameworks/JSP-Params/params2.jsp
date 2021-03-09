<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<html>
<head>
  <title>Parameters test</title>
</head>
<body>
  <h3>Kies lector(en) :</h3>
  <form method="POST">
    <input type="checkbox" name="lector" value="Possemiers Philippe">Possemiers Philippe<br/>
    <input type="checkbox" name="lector" value="Coutrin Olga">Coutrin Olga<br/>
    <input type="checkbox" name="lector" value="Casal Kelly">Casal Kelly<br/>
    <br/><br/>
    <input type="submit" value="Kies">
  </form>

<%
  String[] lectors = request.getParameterValues("lector");
  
    if (lectors != null) {
 %>
   <h3>Volgende lectoren werden geselecteerd :</h3>
   <ul>
<% for(String lector : lectors) { %>
    
    <li><%= lector %></li>

<%} } %>
</ul>

<br/><br/>

<a href="<%= request.getRequestURI() %>">Opnieuw</a>
	  
</body>
</html>