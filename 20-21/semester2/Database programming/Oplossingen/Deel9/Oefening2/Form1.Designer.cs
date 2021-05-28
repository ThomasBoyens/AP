namespace Oefening2
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
            this.label1 = new System.Windows.Forms.Label();
            this.textBoxAantalPersonen = new System.Windows.Forms.TextBox();
            this.buttonGetPersons = new System.Windows.Forms.Button();
            this.SuspendLayout();
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Location = new System.Drawing.Point(12, 9);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(84, 13);
            this.label1.TabIndex = 0;
            this.label1.Text = "Aantal personen";
            // 
            // textBoxAantalPersonen
            // 
            this.textBoxAantalPersonen.Location = new System.Drawing.Point(102, 9);
            this.textBoxAantalPersonen.Name = "textBoxAantalPersonen";
            this.textBoxAantalPersonen.Size = new System.Drawing.Size(100, 20);
            this.textBoxAantalPersonen.TabIndex = 1;
            // 
            // buttonGetPersons
            // 
            this.buttonGetPersons.Location = new System.Drawing.Point(127, 35);
            this.buttonGetPersons.Name = "buttonGetPersons";
            this.buttonGetPersons.Size = new System.Drawing.Size(75, 23);
            this.buttonGetPersons.TabIndex = 2;
            this.buttonGetPersons.Text = "Search";
            this.buttonGetPersons.UseVisualStyleBackColor = true;
            this.buttonGetPersons.Click += new System.EventHandler(this.buttonGetPersons_Click);
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(240, 102);
            this.Controls.Add(this.buttonGetPersons);
            this.Controls.Add(this.textBoxAantalPersonen);
            this.Controls.Add(this.label1);
            this.Name = "Form1";
            this.Text = "Oefening 2";
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.TextBox textBoxAantalPersonen;
        private System.Windows.Forms.Button buttonGetPersons;
    }
}

