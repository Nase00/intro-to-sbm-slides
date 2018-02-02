import React from "react";
import CodeSlide from "spectacle-code-slide";
import { Deck, Heading, ListItem, List, Slide, Text } from "spectacle";
import createTheme from "spectacle/lib/themes/default";

import ledBlinkExample from "../assets/led-blink-example.gif";

require("normalize.css");
require("../assets/monokai.css");
require("./styles.css");

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
 */

export default class Presentation extends React.Component {
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
            Arduino, Raspberry Pi, and more
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <div>
            <Heading size={5} textColor="secondary" caps>
              What we're focusing on
            </Heading>
            <List>
              <ListItem>Arduino Platform & compatible clones</ListItem>
              <ListItem>Arduino IDE</ListItem>
              <ListItem>Pin Types</ListItem>
              <ListItem>Basic "Hello World" projects</ListItem>
              <ListItem>Using libraries to make life easy</ListItem>
            </List>
            <Heading size={5} textColor="secondary" caps>
              What we're <i>not</i> focusing on
            </Heading>
            <List>
              <ListItem>C++/The Arduino Language</ListItem>
              <ListItem>Linux (Rasbian)</ListItem>
              <ListItem>Soldering</ListItem>
            </List>
          </div>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={5} textColor="secondary" caps>
            Anatomy of an Arduino Board
          </Heading>
          {/* TODO <img src={} /> */}
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
              <a href="https://smile.amazon.com">Amazon</a>
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
