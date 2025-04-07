import Select, { StylesConfig } from 'react-select'
import chroma from 'chroma-js'

export const ExampleOne = () => {
  return (
    <div className='vpu_ocoplmimotceic_list'>
      <BasicImplement />
      <SingleSelect />
      <SingleSelectCustomStyle />
    </div>
  )
}

export const BasicImplement = () => {
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]
  return (
    <div className='vpu_ocoplmimotceic_item'>
      <div className="exampleCommon triennialWidth">
        <div className="exampleCommonPoints">
          <span>Basic implementation</span>
        </div>
        <div className="exampleCommonContent">
          <Select options={options} />
        </div>
      </div>
    </div>
  )
}

export const SingleSelect = () => {
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]
  return (
    <div className='vpu_ocoplmimotceic_item'>
      <div className="exampleCommon triennialWidth">
        <div className="exampleCommonPoints">
          <span>Single Select</span>
        </div>
        <div className="exampleCommonContent">
          <Select
            className="basic-single"
            classNamePrefix="select"
            defaultValue={options[0]}
            isDisabled={false}
            isLoading={false}
            isClearable={false}
            isRtl={false}
            isSearchable={false}
            name="color"
            options={options}
          />
        </div>
      </div>
    </div>
  )
}

export const SingleSelectCustomStyle = () => {
  const dot = (color = 'transparent') => ({
    alignItems: 'center',
    display: 'flex',

    ':before': {
      backgroundColor: color,
      borderRadius: 10,
      content: '" "',
      display: 'block',
      marginRight: 8,
      height: 10,
      width: 10,
    },
  })

  interface ColourOption {
    readonly value: string;
    readonly label: string;
    readonly color: string;
    readonly isFixed?: boolean;
    readonly isDisabled?: boolean;
  }

  const options: readonly ColourOption[] = [
    { value: 'ocean', label: 'Ocean', color: '#00B8D9', isFixed: true },
    { value: 'blue', label: 'Blue', color: '#0052CC', isDisabled: true },
    { value: 'purple', label: 'Purple', color: '#5243AA' },
    { value: 'red', label: 'Red', color: '#FF5630', isFixed: true },
    { value: 'orange', label: 'Orange', color: '#FF8B00' },
    { value: 'yellow', label: 'Yellow', color: '#FFC400' },
    { value: 'green', label: 'Green', color: '#36B37E' },
    { value: 'forest', label: 'Forest', color: '#00875A' },
    { value: 'slate', label: 'Slate', color: '#253858' },
    { value: 'silver', label: 'Silver', color: '#666666' },
  ];
  const colourStyles: StylesConfig<ColourOption> = {
    control: (styles) => ({ ...styles, backgroundColor: 'white' }),

    option: (styles, { data, isDisabled, isFocused, isSelected }) => {
      const color = chroma(data.color);
      return {
        ...styles,
        backgroundColor: isDisabled
          ? undefined
          : isSelected
            ? data.color
            : isFocused
              ? color.alpha(0.1).css()
              : undefined,
        color: isDisabled
          ? '#ccc'
          : isSelected
            ? chroma.contrast(color, 'white') > 2
              ? 'white'
              : 'black'
            : data.color,
        cursor: isDisabled ? 'not-allowed' : 'default',

        ':active': {
          ...styles[':active'],
          backgroundColor: !isDisabled
            ? isSelected
              ? data.color
              : color.alpha(0.3).css()
            : undefined,
        },
      };
    },

    input: (styles) => ({ ...styles, ...dot() }),
    placeholder: (styles) => ({ ...styles, ...dot('#ccc') }),
    singleValue: (styles, { data }) => ({ ...styles, ...dot(data.color) }),
  }
  return (
    <div className='vpu_ocoplmimotceic_item'>
      <div className="exampleCommon triennialWidth">
        <div className="exampleCommonPoints">
          <span>Single Select Custom Style</span>
        </div>
        <div className="exampleCommonContent">
          <Select
            defaultValue={options[2]}
            options={options}
            styles={colourStyles}
          />
        </div>
      </div>
    </div>
  )
}