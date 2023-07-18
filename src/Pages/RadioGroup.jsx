
import { useRadio,Box,useRadioGroup,HStack } from '@chakra-ui/react'

function RadioCard(props) {
    const { getInputProps, getCheckboxProps } = useRadio(props)
  
    const input = getInputProps()
    const checkbox = getCheckboxProps()
  
    return (
      <Box as='label'>
        <input {...input} />
        <Box
          {...checkbox}
          onClick={()=>props.handleSize(props.children)}
          cursor='pointer'
          borderWidth='1px'
          borderRadius='md'
          boxShadow='md'
          _checked={{
            bg: 'lightcoral',
            color: 'white',
            borderColor: 'lightcoral',
          }}
          _focus={{
            boxShadow: 'outline',
          }}
          px={5}
          py={3}
        >
          {props.children}
        </Box>
      </Box>
    )
  }
  
  // Step 2: Use the `useRadioGroup` hook to control a group of custom radios.
  export default function Example({handleSize}) {
    const options = ['S', 'M', 'L','XL','2XL']
  
    const { getRootProps, getRadioProps } = useRadioGroup({
      name: 'framework',
      // onChange:console.log,
    })
    const group = getRootProps();
   


    return (
      <HStack {...group}>
        {options.map((value) => {
          const radio = getRadioProps({ value })
          return (
            <RadioCard handleSize={handleSize} key={value} {...radio}>
              {value}
            </RadioCard>
          )
        })}
      </HStack>
    )
  }
  
  