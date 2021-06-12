using System;
using System.Data;
using System.Data.SqlClient;
using System.Data.SqlTypes;
using Microsoft.SqlServer.Server;

public partial class StoredProcedures
{
    [Microsoft.SqlServer.Server.SqlProcedure]
    public static void GetAddressTypes()
    {
        string query = @"
                        SELECT
                            * 
                         FROM
                            [Production].[Product]
                         ORDER BY
                            [AddressTypeID] DESC";

        using (SqlConnection connection = new SqlConnection("context connection=true"))
        {
            SqlCommand cmd = new SqlCommand(query, connection);
            connection.Open();
            SqlContext.Pipe.ExecuteAndSend(cmd);
            SqlContext.Pipe.Send(System.DateTime.Today.ToString());
        }
    }
}
