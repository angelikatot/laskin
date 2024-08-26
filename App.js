import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function Calculator() {
  const [firstNumber, setFirstNumber] = useState('');
  const [secondNumber, setSecondNumber] = useState('');
  const [result, setResult] = useState(null);

  const handlePlus = () => {
    const sum = parseFloat(firstNumber) + parseFloat(secondNumber);
    setResult(sum);
  };

  const handleMinus = () => {
    const difference = parseFloat(firstNumber) - parseFloat(secondNumber);
    setResult(difference);
  };

  return (
    <View style={styles.container}>
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
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    fontSize: 18,
    borderRadius: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  button: {
    backgroundColor: '#ff66b2',
    padding: 15,
    borderRadius: 5,
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
});