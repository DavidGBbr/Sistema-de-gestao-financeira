import React from 'react'
import * as C from './styles'

export const Form  = () => {
  return (
    <C.Container>
      <C.InputContent>
        <C.LabelInput>Descrição</C.LabelInput>
        <input type="text" />
      </C.InputContent>
      <C.InputContent>
      <C.LabelInput>Valor</C.LabelInput>
      <input type="number" />
      </C.InputContent>
     
      <C.RadioContent>
        <C.InputRadio defaultChecked name="type-transition" type="radio" />
        <C.LabelRadio>Entrada</C.LabelRadio>
        
        <C.InputRadio name="type-transition" type="radio" />
        <C.LabelRadio>Saída</C.LabelRadio>
      </C.RadioContent>
     
      <C.Button>Adicionar</C.Button>
    
    </C.Container>
  )
}


