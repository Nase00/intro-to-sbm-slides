import React from "react";
import CodeSlide from "spectacle-code-slide";
import { Deck, Heading, ListItem, List, Slide, Text } from "spectacle";
import createTheme from "spectacle/lib/themes/default";

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
          <Heading size={5} textColor="secondary" caps>
            Some Common Communication Protocols
          </Heading>
          <List>
            <ListItem>WiFi</ListItem>
            <ListItem>Bluetooth</ListItem>
            <ListItem>WebSocket</ListItem>
            <ListItem>ZigBee</ListItem>
            <ListItem>HTTP (Hyper Text Transfer Protocol)</ListItem>
            <ListItem>MQTT (Message Queuing Telemetry Transport)</ListItem>
            <ListItem>AMQP (Advanced Message Queueing Protocol</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={5} textColor="secondary" caps>
            Example
          </Heading>
          {/* <img src={} />*/}
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={5} textColor="secondary" caps>
            List
          </Heading>
          <List>
            <ListItem>1</ListItem>
          </List>
        </Slide>
        <CodeSlide
          transition={["fade"]}
          lang="json"
          code={require("raw-loader!../assets/config.example")}
          showLineNumbers={false}
          ranges={[
            { loc: [0, 0], title: "Blink Sketch" },
            { loc: [2, 10], note: "" }
          ]}
        />
      </Deck>
    );
  }
}
