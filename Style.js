import{StyleSheet} from 'react-native';

var Styles = StyleSheet.create({
    container: {
      flex: 1,
    },

    resultContainer: {
        flex: 2,
        backgroundColor: '#000000',
        justifyContent: 'center',
    },
    resultText: {
        color: '#FFFFFF',
        fontSize: 58,
        fontWeight: 'bold',
        textAlign: 'right',
        padding: 20,
    },

    buttonContainer: {
        flex: 8,
        backgroundColor: '#FFFFFF',
    },
    button: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0.5,
        borderColor: '#000000', 
    },
    buttonText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#000000',
    },

    inputRow: {

        flex: 1,
        flexDirection: 'row',
    },

    inputButtonHighlighted: {
        backgroundColor: '#FFFFFF'   
    }
  });


  export default Styles;