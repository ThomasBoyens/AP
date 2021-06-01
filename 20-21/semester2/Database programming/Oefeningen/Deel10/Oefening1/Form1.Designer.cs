
namespace Oefening1
{
    partial class Form1
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            this.btnDataset = new System.Windows.Forms.Button();
            this.treeViewStructure = new System.Windows.Forms.TreeView();
            this.SuspendLayout();
            // 
            // btnDataset
            // 
            this.btnDataset.Location = new System.Drawing.Point(61, 47);
            this.btnDataset.Name = "btnDataset";
            this.btnDataset.Size = new System.Drawing.Size(131, 39);
            this.btnDataset.TabIndex = 0;
            this.btnDataset.Text = "Create dataset";
            this.btnDataset.UseVisualStyleBackColor = true;
            this.btnDataset.Click += new System.EventHandler(this.BtnDataset_Click);
            // 
            // treeViewStructure
            // 
            this.treeViewStructure.Location = new System.Drawing.Point(61, 103);
            this.treeViewStructure.Name = "treeViewStructure";
            this.treeViewStructure.Size = new System.Drawing.Size(560, 374);
            this.treeViewStructure.TabIndex = 1;
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(8F, 16F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(709, 554);
            this.Controls.Add(this.treeViewStructure);
            this.Controls.Add(this.btnDataset);
            this.Margin = new System.Windows.Forms.Padding(4, 4, 4, 4);
            this.Name = "Form1";
            this.Text = "Oefening1";
            this.ResumeLayout(false);

        }

        #endregion

        private System.Windows.Forms.Button btnDataset;
        private System.Windows.Forms.TreeView treeViewStructure;
    }
}

