import React, { PureComponent } from "react";
import CodeSlide from "spectacle-code-slide";
import { Deck, Heading, ListItem, List, Slide, Text } from "spectacle";
import createTheme from "spectacle/lib/themes/default";

import Comparison from "./comparison";
import ledBlinkExample from "../assets/led-blink-example.gif";
import unoPinout from "../assets/uno-pinout.png";

import "normalize.css";
import "../assets/monokai.css";
import "./styles.css";

const theme = createTheme(
  {
    primary: "#1F2022",
    secondary: "white",
    tertiary: "#05a8fa",
    quarternary: "#CECECE"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);

/**
 * TODO
 * - Pin types (input, output, PWM, i2c)
 * - Arduino IDE
 * - Serial monitor
 * - Hardware vs software solutions (pull-up resistors)
 */

class Presentation extends PureComponent {
  render() {
    return (
      <Deck
        transition={["zoom", "slide"]}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Single-Board Microcontrollers
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Introduction to the Arduino Platform
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            Quick comparison
          </Heading>
          <Comparison leftHeading="Raspberry Pi" rightHeading="Arduino">
            <List>
              <ListItem>
                Linux, Android, or Windows 10 operating system
              </ListItem>
              <ListItem>Any language</ListItem>
              <ListItem>5v logic only</ListItem>
              <ListItem>Digital only</ListItem>
            </List>
            <List>
              <ListItem>Compiled C++ firmware</ListItem>
              <ListItem>5v and 3.3v variants</ListItem>
              <ListItem>Digital & Analog (for input only)</ListItem>
            </List>
          </Comparison>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary">
          <Heading size={5} textColor="primary" caps>
            Arduino UNO R3 Pinout
          </Heading>
          <img src={unoPinout} style={{ maxHeight: "600px" }} />
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={3} textColor="secondary" caps>
            Digital
          </Heading>
          <List>
            <ListItem textColor="tertiary">
              On state (pin voltage set to HIGH)
            </ListItem>
            <ListItem textColor="tertiary">
              Off state (pin voltage set to LOW)
            </ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={3} textColor="secondary" caps>
            Analog
          </Heading>
          <ListItem textColor="tertiary">
            Not limited to binary signals (HIGH or LOW) like Digital
          </ListItem>
          <ListItem textColor="tertiary">
            analogRead() converts analog inputs to digital readings (0 to 1023)
          </ListItem>
          <ListItem textColor="tertiary">
            analogWrite() outputs PWM signals!
          </ListItem>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={3} textColor="secondary" caps>
            PWM
          </Heading>
          <Heading size={6} textColor="secondary" caps>
            (Pulse-Width Modulation)
          </Heading>
          <Text textColor="tertiary">
            A digital signal that can simulate an analog signal
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary">
          <Heading size={5} textColor="primary" caps>
            LED Blink Wiring
          </Heading>
          <img src={ledBlinkExample} />
        </Slide>
        <CodeSlide
          transition={["fade"]}
          lang="c"
          code={require("raw-loader!../assets/arduino.example")}
          ranges={[
            {
              loc: [0, 12],
              title: <div className="code-title">Native Blink Sketch</div>
            },
            {
              loc: [0, 1],
              title: (
                <div className="code-note">
                  Instructs compiler to replace all instances of `LED_PIN` with
                  `13`. More memory efficient than a variable declaration.
                </div>
              )
            },
            {
              loc: [2, 5],
              title: (
                <div className="code-note">
                  The setup function runs once when you press reset or power the
                  board
                </div>
              )
            },
            {
              loc: [6, 12],
              title: (
                <div className="code-note">
                  The loop function runs over and over again forever
                </div>
              )
            }
          ]}
        />
        <CodeSlide
          transition={["fade"]}
          lang="javascript"
          code={require("raw-loader!../assets/johnny-five.example")}
          ranges={[
            {
              loc: [0, 9],
              title: <div className="code-title">Johnny-Five Blink Sketch</div>
            },
            {
              loc: [4, 9],
              title: (
                <div className="code-note">
                  Once board is ready, run callback (asyncronous)
                </div>
              )
            },
            {
              loc: [5, 6],
              title: (
                <div className="code-note">
                  Create a standard LED component instance
                </div>
              )
            },
            {
              loc: [7, 8],
              title: (
                <div className="code-note">
                  Blink LED in 500ms on-off phase periods
                </div>
              )
            }
          ]}
        />
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={5} textColor="secondary" caps>
            Where to Buy
          </Heading>
          <List>
            <ListItem>
              <a href="https://www.arrow.com/">Arrow</a>
            </ListItem>
            <ListItem>
              <a href="https://www.digikey.com/">Digi-Key</a>
            </ListItem>
            <ListItem>
              <a href="https://www.adafruit.com/">Adafruit</a>
            </ListItem>
            <ListItem>
              <a href="https://www.sparkfun.com/">Sparkfun</a>
            </ListItem>
            <ListItem>
              <a href="https://shop.pimoroni.com/">Pimoroni (UK)</a>
            </ListItem>
            <ListItem>
              <a href="https://thepihut.com/">The Pi Hut (UK)</a>
            </ListItem>
            <ListItem>
              <a href="https://thepihut.com/">Gearbest (Asia)</a>
            </ListItem>
            <ListItem>
              <a href="https://www.aliexpress.com/">AliExpress (Asia)</a>
            </ListItem>
            <ListItem>
              <a href="https://www.alibaba.com/">Alibaba (Asia)</a>
            </ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={5} textColor="secondary" caps>
            Resources
          </Heading>
          <List>
            <ListItem>
              <a href="https://www.arduino.cc/reference/en/">
                The Arduino Language documentation
              </a>
            </ListItem>
            <ListItem>
              <a href="http://fritzing.org/home/">Fritzing Software</a>
            </ListItem>
            <ListItem>
              <a href="https://learn.adafruit.com/">Adafruit Tutorials</a>
            </ListItem>
            <ListItem>
              <a href="https://learn.adafruit.com/adafruit-guide-excellent-soldering/tools">
                Adafruit Soldering Guide
              </a>
            </ListItem>
          </List>
        </Slide>
      </Deck>
    );
  }
}

export default Presentation;
