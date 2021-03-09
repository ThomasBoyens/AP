<html>
<body>
<h2>Hello World!</h2>
<form method="POST">
    <input type="checkbox" name="lector" value="Test">Test</br>
    <input type="checkbox" name="lector" value="Thomas">Thomas</br>
    <button type="submit">Indienen</button>
</form>
<%
String[] lectoren = request.getParameterValues("lector");
if(lectoren != null){
    out.print("<ul>");
    for(String lector : lectoren){
        out.print("<li>");
        out.print(lector);
        out.print("</li>");
    }
    out.print("</ul></br>");
}

%>
</body>
</html>
