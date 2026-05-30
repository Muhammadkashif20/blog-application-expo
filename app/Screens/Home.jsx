import { ScrollView, View } from "react-native";
import Header from "../Home/Header";
import Hero from "../Home/Hero";

 function Home() {
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <Header />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingBottom: 16 }}
      >
        <Hero />

        {/* <AddBlog/> */}
        {/* <Deals /> */}	
        {/* <Category />/ */}
        <View style={{ height: 24 }} />
      </ScrollView>
    </View>
  );
}
export default Home;
