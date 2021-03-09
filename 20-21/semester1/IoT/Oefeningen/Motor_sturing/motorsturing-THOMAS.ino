
/*	Dit is een programma om een motor aan te sturen 
	Wanneer je de knoppen indrukt zullen de motors in
	verschillende richtingen draaien
*/

// pin 10 en 12 toegewezen aan motor 1
int MOTOR_ONE_PWN_PIN = 10;
int MOTOR_ONE_DIR_PIN = 12;

// pin 11 en 13 toegewezen aan motor 2
int MOTOR_TWO_PWN_PIN = 11;
int MOTOR_TWO_DIR_PIN = 13;

// pin A0 toegewezen aan de schuifregelaar
int SPEED_PIN = A0;

// pin 3, 4, 5, 6 toegewezen aan buttons
int BUTTON_ONE = 03;
int BUTTON_TWO = 04;
int BUTTON_THREE = 05;
int BUTTON_FOUR = 06;

void setup()
{
	// start van de serial monitor
	Serial.begin(9600);
	
	// motor 1 is output
	pinMode(MOTOR_ONE_PWN_PIN,OUTPUT);
	pinMode(MOTOR_ONE_DIR_PIN,OUTPUT);

	// motor 1 is output
	pinMode(MOTOR_TWO_PWN_PIN,OUTPUT);
	pinMode(MOTOR_TWO_DIR_PIN,OUTPUT);

	// schuifregelaar is input
	pinMode(SPEED_PIN,INPUT);

	// buttons zijn input
	pinMode(BUTTON_ONE,INPUT);
	pinMode(BUTTON_TWO,INPUT);
	pinMode(BUTTON_THREE,INPUT);
	pinMode(BUTTON_FOUR,INPUT);

}

void loop()
{
	// de digitalread kijkt na of de button is ingedrukt of niet 
	int buttonOneState = digitalRead(BUTTON_ONE);
	int buttonTwoState = digitalRead(BUTTON_TWO);
	int buttonThreeState = digitalRead(BUTTON_THREE);
	int buttonFourState = digitalRead(BUTTON_FOUR);

	/*
	knop 1 ingedrukt => motor neemt de snelheid van de schuifregelaar 
	aan en de motors draaien counter-clockwise
	*/
	if(buttonOneState == HIGH){
		int speed = analogRead(SPEED_PIN);

		Serial.println("Analog Read Value: ");
		Serial.println(speed);
		speed = map(speed, 0, 1024, 0, 255);
		Serial.println("speed Value: ");
		Serial.println(speed);

		analogWrite(MOTOR_ONE_PWN_PIN,speed);
		digitalWrite(MOTOR_ONE_DIR_PIN,HIGH);
		analogWrite(MOTOR_TWO_PWN_PIN,speed);
		digitalWrite(MOTOR_TWO_DIR_PIN,HIGH);
	}

	/*
	knop 2 ingedrukt => motor neemt de snelheid van de schuifregelaar 
	aan en de motors draaien clockwise
	*/
	if(buttonTwoState == HIGH){
		int speed = analogRead(SPEED_PIN);

		Serial.println("Analog Read Value: ");
		Serial.println(speed);
		speed = map(speed, 0, 1024, 0, 255);
		Serial.println("speed Value: ");
		Serial.println(speed);

		analogWrite(MOTOR_ONE_PWN_PIN,speed);
		digitalWrite(MOTOR_ONE_DIR_PIN,LOW);
		analogWrite(MOTOR_TWO_PWN_PIN,speed);
		digitalWrite(MOTOR_TWO_DIR_PIN,LOW);
	}

	/*
	knop 3 ingedrukt => motor neemt de snelheid van de schuifregelaar 
	aan, motor 1 draait CCW en motor 2 CW
	*/
	if(buttonThreeState == HIGH){
		int speed = analogRead(SPEED_PIN);

		Serial.println("Analog Read Value: ");
		Serial.println(speed);
		speed = map(speed, 0, 1024, 0, 255);
		Serial.println("speed Value: ");
		Serial.println(speed);

		analogWrite(MOTOR_ONE_PWN_PIN,speed);
		digitalWrite(MOTOR_ONE_DIR_PIN,HIGH);
		analogWrite(MOTOR_TWO_PWN_PIN,speed);
		digitalWrite(MOTOR_TWO_DIR_PIN,LOW);
	}

	/*
	knop 4 ingedrukt => motor neemt de snelheid van de schuifregelaar 
	aan, motor 1 draait CW en motor 2 CCW
	*/
	if(buttonFourState == HIGH){
		int speed = analogRead(SPEED_PIN);

		Serial.println("Analog Read Value: ");
		Serial.println(speed);
		speed = map(speed, 0, 1024, 0, 255);
		Serial.println("speed Value: ");
		Serial.println(speed);

		analogWrite(MOTOR_ONE_PWN_PIN,speed);
		digitalWrite(MOTOR_ONE_DIR_PIN,LOW);
		analogWrite(MOTOR_TWO_PWN_PIN,speed);
		digitalWrite(MOTOR_TWO_DIR_PIN,HIGH);
	}
}

