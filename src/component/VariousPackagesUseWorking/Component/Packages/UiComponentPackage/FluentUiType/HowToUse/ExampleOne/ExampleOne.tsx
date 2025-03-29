import { Button, Field, Link, makeStyles, Menu, MenuButton, MenuButtonProps, MenuItem, MenuList, MenuPopover, MenuTrigger, MessageBar, MessageBarActions, MessageBarBody, MessageBarIntent, MessageBarTitle, SplitButton } from "@fluentui/react-components";
import { bundleIcon, CalendarMonthFilled, CalendarMonthRegular, DismissRegular } from "@fluentui/react-icons";
import { DatePicker, DatePickerProps } from "@fluentui/react-datepicker-compat";
import { TimePicker } from "antd";

const CalendarMonth = bundleIcon(CalendarMonthFilled, CalendarMonthRegular);
const useStyles = makeStyles({
  wrapper: {
    columnGap: "15px",
    display: "flex",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  control: {
    maxWidth: "300px",
  },
  root: {
    maxWidth: "300px",
  }
});

export const ExampleOne = () => {
  return (
    <>
      <ButtonsFU />
      <DateTimePeckerFU />
      <MessageBarFU />
    </>
  )
}

export const ButtonsFU = () => {

  console.log(useStyles());

  const styles = useStyles();
  return (
    <>
      <div className="exampleCommon">
        <div className="exampleCommonPoints">
          <span>Buttons</span>
        </div>
        <div className={styles.wrapper + ' exampleCommonContent'}>
          <Button icon={<CalendarMonthRegular />}>Default</Button>
          <Button appearance="primary" icon={<CalendarMonthRegular />}>Primary</Button>
          <Button appearance="outline" icon={<CalendarMonth />}>Outline</Button>
          <Button appearance="subtle" icon={<CalendarMonth />}>Subtle</Button>
          <Button appearance="transparent" icon={<CalendarMonth />}>Transparent</Button>
        </div>
        <div className={styles.wrapper + ' exampleCommonContent'}>
          <Menu>
            <MenuTrigger disableButtonEnhancement>
              <MenuButton>Rounded</MenuButton>
            </MenuTrigger>

            <MenuPopover>
              <MenuList>
                <MenuItem>Item a</MenuItem>
                <MenuItem>Item b</MenuItem>
              </MenuList>
            </MenuPopover>
          </Menu>

          <Menu>
            <MenuTrigger disableButtonEnhancement>
              <MenuButton shape="circular">Circular</MenuButton>
            </MenuTrigger>

            <MenuPopover>
              <MenuList>
                <MenuItem>Item a</MenuItem>
                <MenuItem>Item b</MenuItem>
              </MenuList>
            </MenuPopover>
          </Menu>

          <Menu>
            <MenuTrigger disableButtonEnhancement>
              <MenuButton shape="square">Square</MenuButton>
            </MenuTrigger>

            <MenuPopover>
              <MenuList>
                <MenuItem>Item a</MenuItem>
                <MenuItem>Item b</MenuItem>
              </MenuList>
            </MenuPopover>
          </Menu>
        </div>
        <div className={styles.wrapper + ' exampleCommonContent'}>
          <Menu positioning="below-end">
            <MenuTrigger disableButtonEnhancement>
              {(triggerProps: MenuButtonProps) => (
                <SplitButton menuButton={triggerProps}>Rounded</SplitButton>
              )}
            </MenuTrigger>

            <MenuPopover>
              <MenuList>
                <MenuItem>Item a</MenuItem>
                <MenuItem>Item b</MenuItem>
              </MenuList>
            </MenuPopover>
          </Menu>

          <Menu positioning="below-end">
            <MenuTrigger disableButtonEnhancement>
              {(triggerProps: MenuButtonProps) => (
                <SplitButton menuButton={triggerProps} shape="circular">
                  Circular
                </SplitButton>
              )}
            </MenuTrigger>

            <MenuPopover>
              <MenuList>
                <MenuItem>Item a</MenuItem>
                <MenuItem>Item b</MenuItem>
              </MenuList>
            </MenuPopover>
          </Menu>

          <Menu positioning="below-end">
            <MenuTrigger disableButtonEnhancement>
              {(triggerProps: MenuButtonProps) => (
                <SplitButton menuButton={triggerProps} shape="square">
                  Square
                </SplitButton>
              )}
            </MenuTrigger>

            <MenuPopover>
              <MenuList>
                <MenuItem>Item a</MenuItem>
                <MenuItem>Item b</MenuItem>
              </MenuList>
            </MenuPopover>
          </Menu>
        </div>
      </div>
    </>
  )
}

export const DateTimePeckerFU = (props: Partial<DatePickerProps>) => {
  const styles = useStyles();
  return (
    <>
      <div className="exampleCommon">
        <div className="exampleCommonPoints">
          <span>Message Bar</span>
        </div>
        <div className={styles.control + ' exampleCommonContent'}>
          <Field label="Select a date">
            <DatePicker
              className={styles.control}
              placeholder="Select a date..."
              {...props}
            />
          </Field>
        </div>
        <div className={styles.container + ' exampleCommonContent'}>
          <Field label="Coffee time" className={styles.root}>
            <TimePicker />
          </Field>
        </div>
      </div>
    </>
  )
}

export const MessageBarFU = () => {
  const intents: MessageBarIntent[] = ["info", "warning", "error", "success"];
  const styles = useStyles();
  return (
    <>
      <div className="exampleCommon">
        <div className="exampleCommonPoints">
          <span>Message Bar</span>
        </div>
        <div className={styles.container + ' exampleCommonContent'}>
          <MessageBar>
            <MessageBarBody>
              <MessageBarTitle>Descriptive title</MessageBarTitle>
              Message providing information to the user with actionable insights.{" "}
              <Link>Link</Link>
            </MessageBarBody>
            <MessageBarActions
              containerAction={
                <Button
                  aria-label="dismiss"
                  appearance="transparent"
                  icon={<DismissRegular />}
                />
              }
            >
              <Button>Action</Button>
              <Button>Action</Button>
            </MessageBarActions>
          </MessageBar>
        </div>
        <div className={styles.container + ' exampleCommonContent'}>
          {intents.map((intent) => (
            <MessageBar key={intent} intent={intent}>
              <MessageBarBody>
                <MessageBarTitle>Intent {intent}</MessageBarTitle>
                Message providing information to the user with actionable insights.{" "}
                <Link>Link</Link>
              </MessageBarBody>
            </MessageBar>
          ))}
        </div>
      </div>
    </>
  )
}