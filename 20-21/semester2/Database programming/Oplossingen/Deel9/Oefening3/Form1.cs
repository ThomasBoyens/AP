using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Windows.Forms;

namespace Oefening3
{
    public partial class Form1 : Form
    {
        #region Constructors

        public Form1()
        {
            InitializeComponent();
        }

        #endregion

        #region Events

        private void buttonSearch_Click(object sender, EventArgs e)
        {
            ShowPersons();
        }

        #endregion

        #region Private methods

        private void ShowPersons()
        {
            int counter = 0;
            SqlDataReader rdr;

            // Via inline SQL
            string commandText = "SELECT TOP 100 * FROM Person.Person";
            // Via stored procedure
            // string commandText = "spGetTop";

            SqlCommand selectCommand = new SqlCommand(commandText);
            // Via inline SQL
            selectCommand.CommandType = CommandType.Text;
            // Via stored procedure
            // selectCommand.CommandType = CommandType.StoredProcedure;

            using (SqlConnection conn = new SqlConnection(ConfigurationManager.ConnectionStrings["ConnectionPlain"].ConnectionString))
            {
                selectCommand.Connection = conn;
                conn.Open();
                rdr = selectCommand.ExecuteReader();

                while (rdr.Read())
                {
                    counter += 1;
                    this.textBox1.AppendText($"{counter.ToString()}.\t{rdr["FirstName"].ToString()} {rdr["LastName"].ToString()}\n");
                }
            }
        }

        #endregion
    }
}