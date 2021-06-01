using System;
using System.Configuration;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace Oefening1
{
    public partial class Form1 : Form
    {
        #region Private members

        private DataSet ds;

        #endregion

        #region Constructors

        public Form1()
        {
            InitializeComponent();
        }

        #endregion

        #region Events

        private void BtnDataset_Click(object sender, EventArgs e)
        {
            CreateDataSet();
            ShowDataSetStructure();
        }

        #endregion

        #region Private methods

        private void CreateDataSet()
        {
            // Create DataSet
            ds = new DataSet("test");
            // Create table "tblInvoices"
            DataTable table = new DataTable("tblInvoices");
            ds.Tables.Add(table);
            // Add columns to table "tblInvoices"
            DataColumn column = new DataColumn("InvoiceID", typeof(UInt32));
            column.AllowDBNull = false;
            table.Columns.Add(column);

            column = new DataColumn("InvoiceDate", typeof(DateTime));
            column.AllowDBNull = false;
            column.DefaultValue = DateTime.Now;
            table.Columns.Add(column);

            column = new DataColumn("CustomerName", typeof(string));
            column.AllowDBNull = false;
            column.MaxLength = 30;
            table.Columns.Add(column);

            // Create table "tblInvoiceDetails"
            table = new DataTable("tblInvoiceDetails");
            ds.Tables.Add(table);
            // Add columns to table "tblInvoices"
            column = new DataColumn("InvoiceDetailID", typeof(UInt32));
            column.AllowDBNull = false;
            table.Columns.Add(column);

            column = new DataColumn("InvoiceID", typeof(UInt32));
            column.AllowDBNull = false;
            table.Columns.Add(column);

            column = new DataColumn("ProductName", typeof(string));
            column.AllowDBNull = false;
            column.MaxLength = 30;
            table.Columns.Add(column);

            column = new DataColumn("Discount", typeof(Boolean));
            column.DefaultValue = false;
            table.Columns.Add(column);

            column = new DataColumn("DiscountAmount", typeof(Decimal));
            column.DefaultValue = 0;
            table.Columns.Add(column);

            column = new DataColumn("Quantity", typeof(UInt16));
            column.AllowDBNull = false;
            column.DefaultValue = 1;
            table.Columns.Add(column);

            column = new DataColumn("Amount", typeof(Decimal));
            column.AllowDBNull = false;
            table.Columns.Add(column);
        }

        private void ShowDataSetStructure()
        {
            treeViewStructure.Nodes.Clear();

            foreach (DataTable dt in ds.Tables)
            {
                TreeNode node = new TreeNode($"{dt.TableName}\n");
                node.Name = dt.TableName;
                treeViewStructure.Nodes.Add(node);

                foreach (DataColumn dc in dt.Columns)
                {
                    node.Nodes.Add($"\t{dc.ColumnName}({dc.DataType.Name},{dc.AllowDBNull})\n");
                }
            }
        }


        #endregion
    }
}
