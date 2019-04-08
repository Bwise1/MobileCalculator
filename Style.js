import{StyleSheet} from 'react-native';

var Styles = StyleSheet.create({
    container: {
      flex: 1,
    },

    resultContainer: {
        flex: 2,
        backgroundColor: 'red',
    },

    buttonContainer: {
        flex: 8,
        backgroundColor: 'white',
    },
    button: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0.5,
        borderColor: 'black', 
    },
    buttonText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'black',
    },

    inputRow: {
        flex: 1,
        flexDirection: 'row',
    },
  });


  export default Styles;