import React, {useState} from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';

import styles from './styles';

import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

export default function Home() {
  const [margem, setMargem] = useState(2.4);
  const [resultado, setresultado] = useState('');


  const { control, handleSubmit, formState: { errors }, reset } = useForm({
  })

  const calcularValorFinal = (data) => {
  const i1 = parseFloat(data.item1)
  const i2 = parseFloat(data.item2)
  const i3 = parseFloat(data.item3)
  const i4 = parseFloat(data.item4)
  const i5 = parseFloat(data.item5)
  const i6 = parseFloat(data.item6)
  const i7 = parseFloat(data.item7)
  const i8 = parseFloat(data.item8)
  const i9 = parseFloat(data.item9)
  const i10 = parseFloat(data.item10)
  const i11 = parseFloat(data.item11)
  const i12 = parseFloat(data.item12)
  const i13 = parseFloat(data.item13)
  const i14 = parseFloat(data.item14)

  const itensString = [data.item1, data.item2, data.item3, data.item4, data.item5, data.item6,
                        data.item7, data.item8, data.item9, data.item10, data.item11, data.item12,data.item13, data.item14];
  
  var soma = 0
  for (let index = 0; index < itensString.length; index++) {
    if (itensString[index] == '') {
      soma += 0;
    } else {
      soma += parseFloat(itensString[index])
    }
  }

  var result = (soma * margem).toFixed(2)
  //var resultString = result

  setresultado(result)
  }


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

    <TouchableOpacity style = { styles.Btn } onPress = {handleSubmit(calcularValorFinal)}>
      <Text style = { styles.BtnText }>
        Calcular
      </Text>
    </TouchableOpacity>

    <View style = {  styles.viewAlteraMargem }>
      <Text style = { styles.querAlterarText }>Quer alterar a Margem de Lucro? </Text>
      <TouchableOpacity>
      <Text style = { styles.cliqueAquiText }>
        Clique aqui
      </Text>
    </TouchableOpacity>
   </View>

    <View style = { styles.viewResultado }>
      <Text style = { styles.textoValorFinal }>
        O valor final é: R$ 
      </Text>
      <Text style = { styles.textoResultado }>
        {resultado}
      </Text>
    </View>


   </View>
  );
}