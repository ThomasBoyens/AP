<%@ page language='java' contentType='text/html; charset=UTF-8'
    pageEncoding='UTF-8'%>
<!DOCTYPE html>
<html>
<head>
    <meta htpp-equiv='Content-Type' content='text/html; charset=UTF-8'>
    <title>Grade a student</title>
</head>
<body>

<form method='POST' action='result.jsp'>
    First name : <input type='text' name='firstName' size=20><br/>
    Last name : <input type='text' name='lastName' size=20><br/>
    Grade : <input type='text' name='grade' size=4><br/>
<br/><br/>
<input type='submit' value='Save'>
</form>
<br/><br/>
<a href='list.jsp'>List</a>
</body>
</html>
