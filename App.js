import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

export default function Calculator() {
  const [firstNumber, setFirstNumber] = useState('');
  const [secondNumber, setSecondNumber] = useState('');
  const [result, setResult] = useState(null);
  const [history, setHistory] = useState([]);

  const handlePlus = () => {
    const sum = parseFloat(firstNumber) + parseFloat(secondNumber);
    setResult(sum);
    addToHistory(`${firstNumber} + ${secondNumber} = ${sum}`);
  };

  const handleMinus = () => {
    const difference = parseFloat(firstNumber) - parseFloat(secondNumber);
    setResult(difference);
    addToHistory(`${firstNumber} - ${secondNumber} = ${difference}`);
  };

  const addToHistory = (calculation) => {
    setHistory([{ key: Math.random().toString(), calculation }, ...history]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.calculatorContainer}>
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={firstNumber}
          onChangeText={setFirstNumber}

        />
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={secondNumber}
          onChangeText={setSecondNumber}

        />
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handlePlus}>
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleMinus}>
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
        </View>
        {result !== null && (
          <View style={styles.resultContainer}>
            <Text style={styles.resultText}>Result: {result}</Text>
          </View>
        )}
      </View>
      <FlatList
        data={history}
        renderItem={({ item }) => (
          <Text style={styles.historyItem}>{item.calculation}</Text>
        )}
        style={styles.historyList}
        contentContainerStyle={styles.historyContent}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center', // Center content vertically
  },
  calculatorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    fontSize: 18,
    borderRadius: 5,
    width: '100%',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    width: '100%',
  },
  button: {
    backgroundColor: '#ff66b2',
    padding: 15,
    borderRadius: 5,
    width: '45%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 20,
  },
  resultContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  resultText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  historyContainer: {
    flex: 1,
    alignItems: 'center', // Center horizontally
  },
  historyTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  historyList: {
    width: '100%',
  },
  historyContent: {
    alignItems: 'center', // flatlistin keskelle
  },
  historyItem: {
    fontSize: 18,
    paddingVertical: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    textAlign: 'center',
    width: '80%',
  },
});
