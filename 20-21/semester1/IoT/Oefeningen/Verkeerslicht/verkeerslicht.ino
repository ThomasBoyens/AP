
/*	Verkeerslicht opdracht
*/

int LEDR= 4;
int LEDY= 5;
int LEDG= 6;

void setup()
{
pinMode(LEDR, OUTPUT);
pinMode(LEDY, OUTPUT);
pinMode(LEDG, OUTPUT);
}

void loop()
{
digitalWrite(LEDR,HIGH);
delay(10000);
digitalWrite(LEDR,LOW);
digitalWrite(LEDG,HIGH);
delay(8000);
digitalWrite(LEDG,LOW);
digitalWrite(LEDY,HIGH);
delay(2000);
digitalWrite(LEDY,LOW);
}
