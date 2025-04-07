import Select, { StylesConfig } from 'react-select'
import makeAnimated from 'react-select/animated';
import chroma from 'chroma-js';

export const ExampleTwo = () => {
  return (
    <div className='vpu_ocoplmimotceic_list'>
      <MultiSelect />
      <MultiSelectAnimated />
      <MultiSelectCustomStyle />
    </div>
  )
}

export const MultiSelect = () => {
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
    { value: 'rahul', label: 'Rahul' },
  ]
  return (
    <>
      <div className="exampleCommon triennialWidth">
        <div className="exampleCommonPoints">
          <span>Multi Select</span>
        </div>
        <div className="exampleCommonContent">
          <Select
            defaultValue={[options[2], options[3]]}
            isMulti
            name="colors"
            options={options}
            className="basic-multi-select"
            classNamePrefix="select"
          />
        </div>
      </div>
    </>
  )
}

export const MultiSelectAnimated = () => {
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
    { value: 'rahul', label: 'Rahul' },
  ]
  const animatedComponents = makeAnimated();
  return (
    <>
      <div className="exampleCommon triennialWidth">
        <div className="exampleCommonPoints">
          <span>Multi Select Animated</span>
        </div>
        <div className="exampleCommonContent">
          <Select
            defaultValue={[options[2], options[3]]}
            isMulti
            name="colors"
            components={animatedComponents}
            options={options}
            className="basic-multi-select"
            classNamePrefix="select"
          />
        </div>
      </div>
    </>
  )
}

export const MultiSelectCustomStyle = () => {
  interface ColourOption {
    readonly value: string;
    readonly label: string;
    readonly color: string;
    readonly isFixed?: boolean;
    readonly isDisabled?: boolean;
  }

  const colourOptions: readonly ColourOption[] = [
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

  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
    { value: 'rahul', label: 'Rahul' },
  ]

  const animatedComponents = makeAnimated();

  const colourStyles: StylesConfig<ColourOption, true> = {
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
    multiValue: (styles, { data }) => {
      const color = chroma(data.color);
      return {
        ...styles,
        backgroundColor: color.alpha(0.1).css(),
      };
    },
    multiValueLabel: (styles, { data }) => ({
      ...styles,
      color: data.color,
    }),
    multiValueRemove: (styles, { data }) => ({
      ...styles,
      color: data.color,
      ':hover': {
        backgroundColor: data.color,
        color: 'white',
      },
    }),
  };
  return (
    <>
      <div className="exampleCommon triennialWidth">
        <div className="exampleCommonPoints">
          <span>Multi Select Custom Style</span>
        </div>
        <div className="exampleCommonContent">
          <Select
            closeMenuOnSelect={false}
            defaultValue={[colourOptions[0], colourOptions[1]]}
            isMulti
            options={colourOptions}
            styles={colourStyles}
          />
        </div>
      </div>
    </>
  )
}