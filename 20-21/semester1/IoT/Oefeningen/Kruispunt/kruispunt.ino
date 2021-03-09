#define ledR1 5
#define ledY1 6
#define ledG1 7

#define ledR2 9
#define ledY2 10
#define ledG2 11

#define pushButton 2

void setup()
{
	// Start de serial connectie
	Serial.begin(9600);

	//leds van de hoofdweg zijn output
	pinMode(ledR1, OUTPUT);
	pinMode(ledY1, OUTPUT);
	pinMode(ledG1, OUTPUT);

	//leds van de zijstraat zijn output
	pinMode(ledR2, OUTPUT);
	pinMode(ledY2, OUTPUT);
	pinMode(ledG2, OUTPUT);

	//button is input
	pinMode(pushButton, INPUT);
}

//loop laat de leds branden, zijn op elkaar afgesteld zodat het steeds veilig is 
void loop()
{
//hoofdweg rood brandt voor 10sec
//zijstraat groen brandt voor 8 sec 
//zijstraat gaat van groen op geel, geel brandt voor 2sec
	digitalWrite(ledR1, HIGH);
	digitalWrite(ledG2, HIGH);
	myDelay(8000);
	digitalWrite(ledG2, LOW);
	digitalWrite(ledY2, HIGH);
	myDelay(2000);

//hoofdweg gaat van rood naar groen, groen brandt voor 8sec
//zijstraat gaat van geel op rood
	digitalWrite(ledR1, LOW);
	digitalWrite(ledG1, HIGH);
	digitalWrite(ledY2, LOW);
	digitalWrite(ledR2, HIGH);
	myDelay(8000);

//zijstraat rood brandt voor 10 sec
//hoofdweg gaat van groen op geel, geel brandt voor 2sec
	digitalWrite(ledG1, LOW);
	digitalWrite(ledY1, HIGH);
	myDelay(2000);
	digitalWrite(ledY1, LOW);
	digitalWrite(ledR2, LOW);

}

//zelfgemaakte delay om de lichten te veranderen wanneer de button wordt ingedrukt
//door zelf een delay te maken gaat het programma tijdens heel de delay checken of er op de knop wordt gedrukt
void myDelay(unsigned long duration)
{
	unsigned long start = millis();

	while(millis() - start <= duration){
		int buttonState = digitalRead(pushButton);

		//gaat checken of de button is ingedrukt en of ook het rood licht op de hoofdweg brandt,
		//zo ja zullen de lichten verspringen, anders niet
		if(buttonState == HIGH){
			Serial.println("The button was pushed");
			if(digitalRead(ledR1) == HIGH){
				digitalWrite(ledG2, LOW);
				digitalWrite(ledY2, HIGH);
				delay(2000);
				digitalWrite(ledG1, HIGH);
				digitalWrite(ledR1, LOW);
				digitalWrite(ledY2, LOW);
				digitalWrite(ledR2, HIGH);
				delay(8000);
				digitalWrite(ledG1, LOW);
				digitalWrite(ledY1, HIGH);
				delay(2000);
				digitalWrite(ledY1, LOW);
				digitalWrite(ledG1, LOW);
				digitalWrite(ledR2, LOW);
				digitalWrite(ledY2, LOW);
				digitalWrite(ledG2, HIGH);
			}
		}
	}
}
