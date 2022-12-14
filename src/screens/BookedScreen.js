import React, { useEffect } from "react";
import { Platform } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { useSelector } from "react-redux";
import AppHeaderIcon from "../components/AppHeaderIcon";
import PostList from "../components/PostList";
import { THEME } from "../theme";

export const BookedScreen = ({ navigation }) => {
  const bookedPosts = useSelector((state) => state.postReducer.bookedPosts);
  const openPostHandler = (post) => {
    navigation.navigate("Post", {
      postId: post.id,
      date: post.date,
      booked: post.booked,
    });
  };

  useEffect(() => {
    navigation.setOptions({
      title: "Booked",
      headerStyle: {
        backgroundColor: Platform.OS === "android" ? THEME.MAIN_COLOR : "#fff",
      },
      headerTintColor: Platform.OS === "ios" ? THEME.MAIN_COLOR : "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
          <Item
            title='Toggle Drawer'
            iconName='ios-menu'
            onPress={() => navigation.toggleDrawer()}
          />
        </HeaderButtons>
      ),
      headerRight: () => {},
    });
  }, []);

  return <PostList data={bookedPosts} onOpen={openPostHandler} />;
};
