import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ThroughputTestScreen = () => {
  const [downloadSpeed, setDownloadSpeed] = useState(0);
  const [uploadSpeed, setUploadSpeed] = useState(0);
  const [ping, setPing] = useState(0);

  const handleStartTest = () => {// Code to start network throughput test
  };

  return <View style={styles.container}>
      <Text style={styles.title}>Network Throughput Test</Text>
      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Download Speed</Text>
          <Text style={styles.cardValue}>{downloadSpeed} mbps</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Upload Speed</Text>
          <Text style={styles.cardValue}>{uploadSpeed} mbps</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Ping</Text>
          <Text style={styles.cardValue}>{ping} ms</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={handleStartTest}>
        <Text style={styles.buttonText}>Start Test</Text>
      </TouchableOpacity>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 24
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16
  },
  card: {
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    padding: 16,
    width: '30%',
    alignItems: 'center'
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8
  },
  cardValue: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  button: {
    backgroundColor: '#007AFF',
    borderRadius: 8,
    paddingVertical: 16,
    alignItems: 'center'
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold'
  }
});
export default ThroughputTestScreen;