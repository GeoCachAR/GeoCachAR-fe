import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  homeContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 20,
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
    resizeMode: 'stretch',
  },
});

export default styles
