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
    marginTop: 50,
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
    alignItems: 'center',
  },
  availableLocations: {
    textAlign: 'center',
    marginTop: 15,
    marginBottom: 15,
    fontSize: 30,
  },
  locationButtons: {
    padding: 10,
  },
  mapContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  map: {
    width: '100%',
    height: '35%',
  },
  mapScreenDetails: {
    paddingTop: 5,
    flexDirection: 'row',
    marginTop: 20,
  },
  mapScreenInput: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    paddingLeft: 45,
    width: 200,
  },
  mapScreenNumber: {
    paddingTop: 18,
    paddingLeft: 45,
    paddingRight: 20,
    fontSize: 20,
  },
  mapScreenBtn: {
    paddingTop: 14,
    fontSize: 20,
  },
  launchCamera: {
    marginTop: 20,
  },
  cuText: {
    padding: 10,
    fontSize: 20,
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  cuButton: {
    padding: 10,
  },
  passwordInputField: {
    paddingLeft: 20,
    paddingTop: 8,
    paddingBottom: 8,
    backgroundColor: 'white',
    fontSize: 20,
  },
  passwordTextField: {
    fontSize: 20,
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 10,
  },
  passwordError: {
    color: 'transparent',
    backgroundColor: 'transparent',
  },
  passwordIsError: {
    color: 'red',
  },
  testtest: {
    paddingBottom: 30,
  },
  userProfileDeleteBtnView: {
    marginTop: 50,
    alignItems: 'center',
  },
  submitAllCodesView: {
    marginTop: 30,
    alignItems: 'center',
  },
  passwordReset: {
    margin: 20,
    textAlign: 'center',
  }
});

export default styles;
