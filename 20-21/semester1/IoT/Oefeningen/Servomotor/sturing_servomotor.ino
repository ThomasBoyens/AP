
/*	een servo controleren met een schuifpotentiemeter. 
*/

#include <Servo.h>
Servo mijnServo; // we gebruiken een servo
int potMeter = 0; // de potentiemeter is verbonden met analoge pin 0
int val; 

void setup()
{
	mijnServo.attach(9); // servo is verbonden met pin 9
	Serial.begin(9600); // start van de seriële monitor
}

void loop()
{
	val = analogRead(potMeter); // lees de spanningswaarde
	Serial.println(val); // print de spanningswaarde af op de seriële monitor
	
	val = map(val, 0, 1023, 0, 180); //schaal de waarde van een pin 0 om
									 // naar een waarde tussen 0 en 180
	Serial.println(val);			 // print de geschaalde waarde
	
	mijnServo.write(val);			 // servo gaat naar de positie van 'val'
	delay(15);						 // tijd voor de servo om te reageren
}
