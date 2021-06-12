using System;
using System.Data;
using System.Data.SqlClient;
using System.Data.SqlTypes;
using Microsoft.SqlServer.Server;

public partial class StoredProcedures
{
    [Microsoft.SqlServer.Server.SqlProcedure]
    public static void PriceSum(out SqlDecimal totalvalue)
    {
        using (SqlConnection connection = new SqlConnection("context connection=true"))
        {
            string query = @"SELECT
                                    SUM([ListPrice])
                                FROM
                                    [Production].[Product]";
            totalvalue = 0;
            connection.Open();
            SqlCommand cmd = new SqlCommand(query, connection);
            totalvalue = new SqlDecimal(Convert.ToDecimal(cmd.ExecuteScalar()));
        }
    }
}
