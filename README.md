# Esse repositório possui componentes React de formulário para você utilizar

## `Table`

 ***dados***: Array que contém todos os dados do componente `Table`.
 
 ***dados[0]***: Cada item dentro desse array representa um dado da Thead (th).
 
 ***dados[1]***: Cada objeto dentro desse array representa uma linha do Tbody (tr), assim, suas propriedades são os dados da linha (td).

  ***dados[2]***: Cada item dentro desse array representa um dado do Tfoot (td).



##
## `Input`
 
 ***additionalClass:*** Classe adicional para estilização no `CSS`.

 ***required:*** Só definir como `True` ou `False` ao utilizar.

 ***manipulationFunction:*** Define a função que será chamada quando o valor do campo de entrada mudar.


 ##
 ## `Select`


***required:*** Só definir como `True` ou `False` ao utilizar.

***manipulationFunction:*** Define a função que será chamada quando o valor do campo de entrada mudar.
 

 ***Options:*** Array que contém objetos com as propriedades `Value` e  `Text`.
 
 Ao utilizar, usar uma função 'de para', "traduzindo" as propriedades do seu array para ficarem com o mesmo nome.

 ##
 
 function fromToEventType(arrEvents) {


    if (arrEvents.length === 0) return [];

    const arrayAuxiliar = [];

    arrEvents.forEach((event) => {
      arrayAuxiliar.push({ value: event.idTipoEvento, text: event.titulo });
    });

    return arrayAuxiliar;
  }


## `Button`

***manipulationFunction:*** Define a função que será chamada ao clicar no botão.

***textButton:*** Define qual será o conteúdo do botão.


##
## `Label`

***htmlFor:*** Define o ID do elemento de entrada ao qual este rótulo está associado.

***children:*** Conteúdo que irá dentro da `Label`