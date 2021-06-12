using System;
using System.Data;
using System.Data.SqlClient;
using System.Data.SqlTypes;
using System.Text.RegularExpressions;
using Microsoft.SqlServer.Server;

public partial class UserDefinedFunctions
{
    [Microsoft.SqlServer.Server.SqlFunction]
    public static SqlBoolean ContainsRegExp(SqlString text, SqlString pattern)
    {
        if (string.IsNullOrEmpty(text.ToString()) || string.IsNullOrEmpty(pattern.ToString()))
        {
            return new SqlBoolean(false);
        }
        else
        {
            return new SqlBoolean(Regex.IsMatch(text.Value, pattern.Value));
        }
        
    }
}
