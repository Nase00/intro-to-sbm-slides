/*
  http://www.arduino.cc/en/Tutorial/Sweep
  https://learn.adafruit.com/dht
*/

#include <Servo.h>
#include <DHT.h>

#define BUTTON_BLUE 0
#define BUTTON_YELLOW 3
#define SWITCH 2
#define SERVO 9
#define DHTPIN 11
#define DHTTYPE DHT22
DHT dht(DHTPIN, DHTTYPE);
Servo myservo;

void setup() {
  pinMode(BUTTON_BLUE, INPUT);
  pinMode(BUTTON_YELLOW, INPUT);
  pinMode(SWITCH, INPUT);
  
  myservo.attach(SERVO);
  dht.begin();

  Serial.begin(9600);
}

void loop() {
  int switchState = digitalRead(SWITCH);
 
  if (switchState == LOW) {
    readButtonState();
  } else {
    printTemp();
  }
}

void printTemp() {
  float temp = dht.readTemperature(true);
  int pos = rescale(temp);

  Serial.print("Temperature (F): ");
  Serial.println(temp);

  myservo.write(pos);

  delay(25);
}

void readButtonState() {
  const int buttonStateBlue = digitalRead(BUTTON_BLUE);
  const int buttonStateYellow = digitalRead(BUTTON_YELLOW);
  Serial.print("Button press: ");

  if (buttonStateBlue == LOW) {
    Serial.println("BLUE");
    myservo.write(0);
  } else if (buttonStateYellow == LOW) {
    Serial.println("YELLOW");
    myservo.write(180);
  } else {
    Serial.println("NONE");
  }
}

int rescale(int value) {
  return (((static_cast<int>(value) - 60) * 180) / 90) + 90;
}

