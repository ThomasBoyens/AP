// Include I2C library
#include<DFRobot_LiquidCrystal_I2C.h>
LiquidCrystal_I2C lcd(0x20, 16, 2); //I2C adres 0x20, 16 kolommen en 2 rijen

// Pins worden gedefined
#define Button1 03
#define Button2 04
#define Button3 05
#define Button4 06

#define MOTOR_ONE_PWM 10
#define MOTOR_ONE_DIR 12
#define MOTOR_TWO_PWM 11
#define MOTOR_TWO_DIR 13

void setup()
{

	// Initialiseer lcd
	lcd.init();
	lcd.backlight();

	// Buttons zijn INPUT
	pinMode(Button1, INPUT);
	pinMode(Button2, INPUT);
	pinMode(Button3, INPUT);
	pinMode(Button4, INPUT);

	// Motor pins zijn OUTPUT
	pinMode(MOTOR_ONE_PWM, OUTPUT);
	pinMode(MOTOR_ONE_DIR, OUTPUT);
	pinMode(MOTOR_TWO_PWM, OUTPUT);
	pinMode(MOTOR_TWO_DIR, OUTPUT);

	// Robot gaat bij de start vooruit, dit ook doorgeven aan LCD scherm
	digitalWrite(MOTOR_ONE_DIR, HIGH);
	digitalWrite(MOTOR_TWO_DIR, HIGH);
	// LCD display instellen
	lcd.setCursor(0, 0);
	lcd.print("Vooruit rijden");
}

void loop()
{
	int speed = 127; // SPEED variable voor snelheid van het robotje (0-255).

	// Zet snelheid motoren naar SPEED
	analogWrite(MOTOR_ONE_PWM, speed);
	analogWrite(MOTOR_TWO_PWM, speed);

/*
		Button1 = vooruit -> CCW - CWW
		Button2 = achteruit -> CW - CW
		
		Button3 = links -> CW - CCW
		Button4 = rechts -> CCW - CW
	*/	
	if(digitalRead(Button1) == HIGH) // TRUE als Button1 ingedrukt wordt
	{
		// Motor1 & Motor2 CCW
		digitalWrite(MOTOR_ONE_DIR, HIGH);
		digitalWrite(MOTOR_TWO_DIR, HIGH);

		//LCD display instellen
		lcd.clear(); // LCD display clearen
		lcd.setCursor(0, 0);
		lcd.print("Vooruit rijden");
	}
	else if(digitalRead(Button2) == HIGH) // TRUE als Button2 ingedrukt wordt
	{
		// Motor1 & Motor2 CW
		digitalWrite(MOTOR_ONE_DIR, LOW);
		digitalWrite(MOTOR_TWO_DIR, LOW);

		//LCD display instellen
		lcd.clear(); // LCD display clearen
		lcd.setCursor(0, 0);
		lcd.print("Achteruit rijden");
	}
	else if(digitalRead(Button3) == HIGH) // TRUE als Button3 ingedrukt wordt
	{
		// Motor1 CW, Motor2 CCW
		digitalWrite(MOTOR_ONE_DIR, LOW);
		digitalWrite(MOTOR_TWO_DIR, HIGH);

		//LCD display instellen
		lcd.clear(); // LCD display clearen
		lcd.setCursor(0, 0);
		lcd.print("Links draaien");
	}
	else if(digitalRead(Button4) == HIGH) // TRUE als Button4 ingedrukt wordt
	{
		// Motor1 CCW & Motor2 CW
		digitalWrite(MOTOR_ONE_DIR, HIGH);
		digitalWrite(MOTOR_TWO_DIR, LOW);

		//LCD display instellen
		lcd.clear(); // LCD display clearen
		lcd.setCursor(0, 0);
		lcd.print("Rechts draaien");
	}
}
