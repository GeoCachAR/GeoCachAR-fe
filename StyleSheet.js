import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  homeContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 20,
  },
  userProfileScroll: {
    flex: 1,
    marginBottom: 50,
  },
  button: {
    paddingTop: 30,
  },
  logo: {
    fontSize: 40,
    fontWeight: 600,
  },
  tagline: {
    margin: 16,
    fontSize: 30,
  },
  taglineHome: {
    margin: 16,
    fontSize: 20,
  },
  userProfileEntry: {
    margin: 16,
    marginLeft: 30,
    fontSize: 20,
  },
  userProfileHeader: {
    marginTop: 100,
    marginLeft: 30,
    fontSize: 25,
    fontWeight: 600,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 250,
  },
  formText: {
    marginLeft: 14,
  },
  homeImage: {
    width: 300,
    height: 250,
  },
  homeBtnView: {
    marginTop: 10,
    width: 300,
  },
  userProfileBtnView: {
    marginTop: 10,
    alignItems: "center",
  },
  availableLocations: {
    textAlign: "center",
    marginTop: 15,
    marginBottom: 15,
    fontSize: 30,
  },
});

export default styles;
