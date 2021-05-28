using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;

namespace Oefening2
{
    public class Person
    {
        #region Public methods

        public static int GetCount()
        {
            int retValue = -1;

            // Via inline SQL
            string commandText = "SELECT Count(*) FROM Person.Person";
            // Via stored procedure
            //string commandText = "dbo.spGetCount";

            SqlCommand selectCommand = new SqlCommand(commandText);
            // Via inline SQL
            selectCommand.CommandType = CommandType.Text;
            // Via stored procedure
            //selectCommand.CommandType = CommandType.StoredProcedure;

            using (SqlConnection conn = new SqlConnection(ConfigurationManager.ConnectionStrings["ConnectionPlain"].ConnectionString))
            {
                selectCommand.Connection = conn;
                conn.Open();
                retValue = Convert.ToInt32(selectCommand.ExecuteScalar());
            }

            return retValue;
        }

        #endregion
    }
}