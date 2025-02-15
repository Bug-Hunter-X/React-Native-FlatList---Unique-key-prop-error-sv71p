```javascript
import React from 'react';
import { Text, FlatList, View } from 'react-native';

const data = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' },
];

const App = () => {
  return (
    <View>
      <FlatList
        data={data}
        renderItem={({ item }) => <Text>{item.name}</Text>}
        keyExtractor={(item) => item.id.toString()} // Corrected keyExtractor
      />
    </View>
  );
};

export default App;
```