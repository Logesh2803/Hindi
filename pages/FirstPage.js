
import { StyleSheet, Text, View , SafeAreaView , ScrollView,TouchableOpacity,ImageBackground } from 'react-native'
import React from 'react'


const FirstPage = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
  <ScrollView style={styles.scrollView}>
 <View style={styles.container}>
    <ImageBackground source={require('../img/hindi.jpg')} resizeMode="cover" style={styles.image}> 
          </ImageBackground> 
  
   </View>
    
     
   <View style={styles.column}>

 
        <TouchableOpacity style={styles.item}  onPress={() =>
            navigation.navigate('Second')}>

            <Text style={styles.itemName}> Hindi </Text>

            </TouchableOpacity>
        

        <View style={styles.item1} >
        
         <Text style={styles.itemName} onPress={() => Alert.alert('English')}> English </Text> 

        </View>
</View>
  
<View style={styles.column}>

 
<View style={styles.item2} >

    <Text style={styles.itemName} onPress={() => Alert.alert('Tamil')}> Tamil </Text>

</View>


<View style={styles.item3} >

<Text style={styles.itemName} onPress={() => Alert.alert('Maths')}> Maths </Text>

</View>
</View>

     </ScrollView>
        </SafeAreaView>
  );
  
}

export default FirstPage

const styles = StyleSheet.create({
  item:{
        justifyContent: 'center',
        borderRadius: 10,
        padding: 5,
        height: 150,
        width:180,
        alignItems:'center',
        backgroundColor:'#1abc9c',
       margin:8,
      },
      item1: {
        justifyContent: 'center',
        borderRadius: 10,
        padding: 5,
        height: 150,
        alignItems:'center',
        backgroundColor:'#2ecc71',
        width:180,
        margin:8,
      },
      item2: {
        justifyContent: 'center',
        borderRadius: 10,
        padding: 5,
        height: 150,
        alignItems:'center',
        backgroundColor:'#3498db',
        width:180,
        margin:8,
      },
      item3: {
        justifyContent: 'center',
        borderRadius: 10,
        padding: 5,
        height: 150,
        alignItems:'center',
        backgroundColor:'blue',
        width:180,
        margin:8,
      },
      itemName: {
        fontSize: 16,
        color: '#fff',
        fontWeight: '500',
        
      },
      
     
      image: {
        flex: 1,
        justifyContent: "center",
        height:300,
      },
     
      column: {
        flexDirection: 'row',
        flex:1, 
        margin: 10,
        padding: 2,
        height: 150,
        alignItems:'center',
        
      },
     
})