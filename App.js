import { useState, useEffect } from 'react';
import {
  Text,
  SafeAreaView,
  StyleSheet,
  View,
  FlatList,
} from 'react-native';


const request = async (callback) => {
    const response = await fetch('https://api.breakingbadquotes.xyz/v1/quotes');
    const parsed = await response.json();
    console.log(parsed);  
    callback(parsed); 
};

export default function App() {
  const [registros, setRegistros] = useState([]);  
  useEffect(() => {
    request(setRegistros);  
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>Breaking Bad Quotes</Text>
      <FlatList
        data={registros}  
        renderItem={({ item }) => (
          <View style={styles.containerText}>
            <Text style={styles.quoteTexto}>Quote: "{item.quote}"</Text>  
            <Text style={styles.autorTexto}>Author: {item.author}</Text>  
          </View>
        )}
        keyExtractor={(item) => item.toString()}  
      />
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#90EE90',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  quoteTexto: {
    fontSize: 18,
    fontStyle: 'italic',
    marginBottom: 5,
    color: 'white',
    textAlign: 'center'
  },
  autorTexto: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'right',
    color: 'yellow'
  },
  containerText:{
    backgroundColor: '#228B22',
    borderRadius: 8
  }
});
