import{StyleSheet} from 'react-native';

var Styles = StyleSheet.create({
    container: {
      flex: 1,
    },

    resultContainer: {
        flex: 2,
        backgroundColor: 'red',
        justifyContent: 'center',
    },
    resultText: {
        color: 'white',
        fontSize: 58,
        fontWeight: 'bold',
        textAlign: 'right',
        padding: 20,
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

    inputButtonHighlighted: {
        backgroundColor: 'black'
    }
  });


  export default Styles;