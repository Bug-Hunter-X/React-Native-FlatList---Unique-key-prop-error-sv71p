# React Native FlatList Unique Key Prop Error

This repository demonstrates a common error in React Native's FlatList component: the "unique key prop" error.  This error arises when the `keyExtractor` function doesn't provide unique keys for each item in the data array.

## Problem

The `FlatList` component requires a unique key for each item to efficiently update and render the list. If keys are duplicated, React Native throws an error, leading to incorrect rendering or crashes.

The `bug.js` file shows an example of this error. The `keyExtractor` function uses the `id` property, which is not unique in the provided data, resulting in the error.

## Solution

The solution involves ensuring that the `keyExtractor` function generates unique keys for each item.  This can be achieved by using a more robust key generation method such as the index or a combination of fields that guarantee uniqueness.

The `bugSolution.js` file demonstrates a corrected implementation using a unique key.