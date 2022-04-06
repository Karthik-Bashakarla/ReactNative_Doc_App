import { View, Text, TextInput, Image } from 'react-native'
import React from 'react'
import { styles } from './styles'
import colors from '../../constants/colors'
import images from "../../constants/images"

const Search = () => {
  return (
    <View style={styles.container}>
        <Image 
        source={images.search}
        style={styles.search_logo}
        />
      <TextInput 
      editable
      placeholder='Search..'
      placeholderTextColor={colors.textColor}
      maxLength={40}
      onSubmitEditing={(e)=> {e.preventDefault()}}
      style={styles.search_box}
      />
    </View>
  )
}

export default Search