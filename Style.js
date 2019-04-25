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
        backgroundColor: null
    },
    button: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
<<<<<<< HEAD
        borderWidth: 2,
        borderColor: '#000000', 
        borderRadius: 50,
        marginTop: 3,
=======
        borderWidth: 5,
        borderColor: '#000000', 
        borderRadius: 50,
        marginTop: 2,
        marginBottom: 1

>>>>>>> a9c966e7b92e4c36bb876141dc681d2d76ec94a5
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