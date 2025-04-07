import { useContext } from "react";
import styled, { ThemeContext, ThemeProvider, useTheme } from "styled-components";

export const ExampleTwo = () => {
  return (
    <div className='vpu_ocoplmimotceic_list'>
      <NormalTheming />
      <FunctionThemes />
      <UseThemeContext />
      {/* <UsingUseTheme /> */}
      {/* <RefsUse /> */}
    </div>
  )
}

export const NormalTheming = () => {
  const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;

  /* Color the border and text with theme.main */
  color: ${props => props.theme.main};
  border: 2px solid ${props => props.theme.main};
`;

  // We are passing a default theme for Buttons that arent wrapped in the ThemeProvider
  Button.defaultProps = {
    theme: {
      main: "#BF4F74"
    }
  }

  // Define what props.theme will look like
  const theme = {
    main: "mediumseagreen"
  };

  return (
    <div className='vpu_ocoplmimotceic_item'>
      <div className="exampleCommon">
        {/* <div className="exampleCommonPoints">
          <span>Making <b>different position</b> of pagination</span>
        </div> */}
        <div className="exampleCommonContent exampleCommonContentFloat">
          <Button>Normal</Button>
        </div>
        <div className="exampleCommonContent exampleCommonContentFloat">
          <ThemeProvider theme={theme}>
            <Button>Themed</Button>
          </ThemeProvider>
        </div>
      </div>
    </div>
  )
}

export const FunctionThemes = () => {
  const Button = styled.button`
    color: ${props => props.theme.fg};
    border: 2px solid ${props => props.theme.fg};
    background: ${props => props.theme.bg};

    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border-radius: 3px;
  `;

  // Define our `fg` and `bg` on the theme
  const theme = {
    fg: "#BF4F74",
    bg: "white"
  };

  // This theme swaps `fg` and `bg`
  const invertTheme = ({ fg, bg }: any) => ({
    fg: bg,
    bg: fg
  });


  return (
    <div className='vpu_ocoplmimotceic_item'>
      <div className="exampleCommon">
        {/* <div className="exampleCommonPoints">
          <span>Making <b>different position</b> of pagination</span>
        </div> */}
        <ThemeProvider theme={theme}>
          <div className="exampleCommonContent exampleCommonContentFloat">
            <Button>Default Theme</Button>
          </div>
          <div className="exampleCommonContent exampleCommonContentFloat">
            <ThemeProvider theme={invertTheme}>
              <Button>Inverted Theme</Button>
            </ThemeProvider>
          </div>
        </ThemeProvider>
      </div>
    </div>
  )
}

export const UseThemeContext = () => {
  const themeContext = useContext(ThemeContext)
  console.log('Current theme (UseThemeContext): ', themeContext)
  return (
    <>
    </>
  )
}

export const UsingUseTheme = () => {
  const theme = useTheme()
  console.log('Current theme (UsingUseTheme): ', theme)
  return (
    <>
    </>
  )
}

export const RefsUse = () => {
  return (
    <>
    </>
  )
}