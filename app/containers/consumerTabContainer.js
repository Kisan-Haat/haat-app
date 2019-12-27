import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  Container,
  Header,
  Content,
  Tab,
  Tabs,
  title,
  TabHeading,
  Icon,
  Row
} from "native-base";
import Feeds from "./customer/customerFeed";
import Cart from "./customer/customerCart";
import Orders from "./customer/customerOrder";
import HeaderComponent from "../components/header.component";

const styles = StyleSheet.create({
  tabIcon: {
    color: "#757575"
  },
  tabUnderline: {
    backgroundColor: "#6202EE"
  },
  tab: {
    backgroundColor: "#ffffff",
    flex: 1,
    flexDirection: "row",
    justifyContent: "center"
    //activeTabStyle={style: color}
  },
  container: {
    margin: 15
  }
});
export default class ConsumerTabs extends Component {
  render() {
    return (
      <Container>
        <HeaderComponent
          style={{ shadowColor: "transparent", elevation: 6 }}
          title="Buy"
        />
        <Tabs
          activeTabStyle={{ color: "#6202EE", flex: 1 }}
          tabContainerStyle={{ height: 72, elevation: 0 }}
          tabBgColor="white"
          tabBarUnderlineStyle={styles.tabUnderline}
        >
          <Tab
            heading={
              <TabHeading style={styles.tab}>
                <Icon
                  style={styles.tabIcon}
                  type="MaterialCommunityIcons"
                  name="shopping"
                />
                <Text
                  style={{
                    textAlignVertical: "center",
                    textAlign: "center",
                    marginLeft: 5
                  }}
                >
                  Feed
                </Text>
              </TabHeading>
            }
          >
            <Feeds />
          </Tab>
          <Tab
            heading={
              <TabHeading style={styles.tab}>
                <Icon
                  style={styles.tabIcon}
                  type="MaterialCommunityIcons"
                  name="cart"
                />
                <Text
                  style={{
                    textAlignVertical: "center",
                    textAlign: "center",
                    marginLeft: 5
                  }}
                >
                  Cart
                </Text>
              </TabHeading>
            }
          >
            <Cart />
          </Tab>
          <Tab
            heading={
              <TabHeading style={styles.tab}>
                <Icon
                  style={styles.tabIcon}
                  type="MaterialIcons"
                  name="local-shipping"
                />
                <Text
                  style={{
                    textAlignVertical: "center",
                    textAlign: "center",
                    marginLeft: 5
                  }}
                >
                  Orders
                </Text>
              </TabHeading>
            }
          >
            <View style={styles.container}>
              <Orders />
            </View>
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
