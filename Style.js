import{StyleSheet} from 'react-native';

var Styles = StyleSheet.create({
    container: {
      flex: 1,
    },

    resultContainer: {
        flex: 3,
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
        flex: 7,
        backgroundColor: '#FFFFFF',
    },
    button: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0.5,
        borderColor: '#000000', 
        borderRadius: 5,
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
    delete: {
        color: 'red',
        fontSize: 23,
        paddingVertical: 5,
        paddingHorizontal: 10
    },

    inputButtonHighlighted: {
        backgroundColor: '#FFFFFF'   
    }
  });


  export default Styles;