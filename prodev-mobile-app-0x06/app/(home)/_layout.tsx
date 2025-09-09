import { AntDesign, EvilIcons, Feather, FontAwesome, Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

const HomeRootLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#34967C",
        headerShown: true, // default for all tabs
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <AntDesign name="home" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          tabBarIcon: ({ color }) => <Feather name="search" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          title: "Saved",
          tabBarIcon: ({ color }) => <EvilIcons name="heart" size={27} color={color} />,
        }}
      />
      <Tabs.Screen
        name="inbox"
        options={{
          title: "Inbox",
          tabBarIcon: ({ color }) => <Ionicons name="chatbubbles-outline" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profile",
          headerShown: false, // 🔴 hide header only for Profile tab
          tabBarIcon: ({ color }) => <FontAwesome name="user-o" size={24} color={color} />,
        }}
      />
    </Tabs>
  );
};

export default HomeRootLayout;
