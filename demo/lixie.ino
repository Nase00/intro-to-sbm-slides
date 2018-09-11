#include "Lixie.h"
#ifdef __AVR__
#include <avr/power.h>
#endif

#define PIN 2
#define TRIG_PIN 12
#define ECHO_PIN 13
#define DATA_PIN 11
#define NUM_LIXIES 2

Lixie lix(DATA_PIN, NUM_LIXIES);

void setup() {
  Serial.begin(9600);
  pinMode(TRIG_PIN, OUTPUT);
  pinMode(ECHO_PIN, INPUT);

#if defined(__AVR_ATtiny85__)
  if (F_CPU == 16000000)
    clock_prescale_set(clock_div_1);
#endif

  lix.begin(); // Initialize LEDs
  lix.brightness(255); // 0-255
  lix.white_balance(Tungsten100W);
}

void loop() {
  float duration, distance;
  digitalWrite(TRIG_PIN, LOW);
  delayMicroseconds(2);

  digitalWrite(TRIG_PIN, HIGH);
  delayMicroseconds(10);
  digitalWrite(TRIG_PIN, LOW);

  duration = pulseIn(ECHO_PIN, HIGH);
  distance = floor((duration / 2) * 0.0344);

  if (distance < 100) {
    Serial.println(distance);
    lix.write(distance);
  }
}

