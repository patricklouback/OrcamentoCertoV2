import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';

import styles from './styles';

import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

export default function Home() {

  const { control, handleSubmit, formState: { errors }, reset } = useForm({
  })


 return (
   <View style = { styles.container }>
    
    <View style = { styles.viewLogo }>
      <Image
        style = { styles.logo }
        source= { require('../../images/logo.png') }
      />
    </View>

    <View style = { styles.viewForm }>
      <View style = { styles.viewInput }>
        <Controller
          control={control}
          name='item1'
          render={( {field: { onChange, onBlur, value }} ) => (
            <TextInput 
                style = { styles.textInput }
                placeholder = 'Item 1'
                underlineColorAndroid = 'transparent'
                onChangeText = {onChange}
                onBlur = {onBlur}
                value = {value}
                autoCapitalize = 'none'
                keyboardType= 'numeric'
            />
          )}
        />
        
        <Controller
          control={control}
          name='item2'
          render={( {field: { onChange, onBlur, value }} ) => (
            <TextInput 
                style = { styles.textInput }
                placeholder = 'Item 2'
                underlineColorAndroid = 'transparent'
                onChangeText = {onChange}
                onBlur = {onBlur}
                value = {value}
                autoCapitalize = 'none'
                keyboardType= 'numeric'
            />
          )}
        />
      </View>
      <View style = { styles.viewInput }>
        <Controller
          control={control}
          name='item3'
          render={( {field: { onChange, onBlur, value }} ) => (
            <TextInput 
                style = { styles.textInput }
                placeholder = 'Item 3'
                underlineColorAndroid = 'transparent'
                onChangeText = {onChange}
                onBlur = {onBlur}
                value = {value}
                autoCapitalize = 'none'
                keyboardType= 'numeric'
            />
          )}
        />
        
        <Controller
          control={control}
          name='item4'
          render={( {field: { onChange, onBlur, value }} ) => (
            <TextInput 
                style = { styles.textInput }
                placeholder = 'Item 4'
                underlineColorAndroid = 'transparent'
                onChangeText = {onChange}
                onBlur = {onBlur}
                value = {value}
                autoCapitalize = 'none'
                keyboardType= 'numeric'
            />
          )}
        />
      </View>
      <View style = { styles.viewInput }>
        <Controller
          control={control}
          name='item5'
          render={( {field: { onChange, onBlur, value }} ) => (
            <TextInput 
                style = { styles.textInput }
                placeholder = 'Item 5'
                underlineColorAndroid = 'transparent'
                onChangeText = {onChange}
                onBlur = {onBlur}
                value = {value}
                autoCapitalize = 'none'
                keyboardType= 'numeric'
            />
          )}
        />
        
        <Controller
          control={control}
          name='item6'
          render={( {field: { onChange, onBlur, value }} ) => (
            <TextInput 
                style = { styles.textInput }
                placeholder = 'Item 6'
                underlineColorAndroid = 'transparent'
                onChangeText = {onChange}
                onBlur = {onBlur}
                value = {value}
                autoCapitalize = 'none'
                keyboardType= 'numeric'
            />
          )}
        />
      </View>
      <View style = { styles.viewInput }>
        <Controller
          control={control}
          name='item7'
          render={( {field: { onChange, onBlur, value }} ) => (
            <TextInput 
                style = { styles.textInput }
                placeholder = 'Item 7'
                underlineColorAndroid = 'transparent'
                onChangeText = {onChange}
                onBlur = {onBlur}
                value = {value}
                autoCapitalize = 'none'
                keyboardType= 'numeric'
            />
          )}
        />
        
        <Controller
          control={control}
          name='item8'
          render={( {field: { onChange, onBlur, value }} ) => (
            <TextInput 
                style = { styles.textInput }
                placeholder = 'Item 8'
                underlineColorAndroid = 'transparent'
                onChangeText = {onChange}
                onBlur = {onBlur}
                value = {value}
                autoCapitalize = 'none'
                keyboardType= 'numeric'
            />
          )}
        />
      </View>
      <View style = { styles.viewInput }>
        <Controller
          control={control}
          name='item9'
          render={( {field: { onChange, onBlur, value }} ) => (
            <TextInput 
                style = { styles.textInput }
                placeholder = 'Item 9'
                underlineColorAndroid = 'transparent'
                onChangeText = {onChange}
                onBlur = {onBlur}
                value = {value}
                autoCapitalize = 'none'
                keyboardType= 'numeric'
            />
          )}
        />
        
        <Controller
          control={control}
          name='item10'
          render={( {field: { onChange, onBlur, value }} ) => (
            <TextInput 
                style = { styles.textInput }
                placeholder = 'Item 10'
                underlineColorAndroid = 'transparent'
                onChangeText = {onChange}
                onBlur = {onBlur}
                value = {value}
                autoCapitalize = 'none'
                keyboardType= 'numeric'
            />
          )}
        />
      </View>
      <View style = { styles.viewInput }>
        <Controller
          control={control}
          name='item11'
          render={( {field: { onChange, onBlur, value }} ) => (
            <TextInput 
                style = { styles.textInput }
                placeholder = 'Item 11'
                underlineColorAndroid = 'transparent'
                onChangeText = {onChange}
                onBlur = {onBlur}
                value = {value}
                autoCapitalize = 'none'
                keyboardType= 'numeric'
            />
          )}
        />
        
        <Controller
          control={control}
          name='item12'
          render={( {field: { onChange, onBlur, value }} ) => (
            <TextInput 
                style = { styles.textInput }
                placeholder = 'Item 12'
                underlineColorAndroid = 'transparent'
                onChangeText = {onChange}
                onBlur = {onBlur}
                value = {value}
                autoCapitalize = 'none'
                keyboardType= 'numeric'
            />
          )}
        />
      </View>
      <View style = { styles.viewInput }>
        <Controller
          control={control}
          name='item13'
          render={( {field: { onChange, onBlur, value }} ) => (
            <TextInput 
                style = { styles.textInput }
                placeholder = 'Item 13'
                underlineColorAndroid = 'transparent'
                onChangeText = {onChange}
                onBlur = {onBlur}
                value = {value}
                autoCapitalize = 'none'
                keyboardType= 'numeric'
            />
          )}
        />
        
        <Controller
          control={control}
          name='item14'
          render={( {field: { onChange, onBlur, value }} ) => (
            <TextInput 
                style = { styles.textInput }
                placeholder = 'Item 14'
                underlineColorAndroid = 'transparent'
                onChangeText = {onChange}
                onBlur = {onBlur}
                value = {value}
                autoCapitalize = 'none'
                keyboardType= 'numeric'
            />
          )}
        />
      </View>

    </View>

    <TouchableOpacity style = { styles.Btn }>
      <Text style = { styles.BtnText }>
        Calcular
      </Text>
    </TouchableOpacity>
   </View>
  );
}