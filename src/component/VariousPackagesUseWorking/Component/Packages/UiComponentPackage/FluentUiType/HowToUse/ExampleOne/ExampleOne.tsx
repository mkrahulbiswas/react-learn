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
    <div className='vpu_ocoplmimotceic_list'>
      <ButtonsFU />
      <DateTimePeckerFU />
      <MessageBarFU />
    </div>
  )
}

export const ButtonsFU = () => {

  console.log(useStyles());

  const styles = useStyles();
  return (
    <div className='vpu_ocoplmimotceic_item'>
      <div className="vpu_ocoplmimotceici_top">
        <span>Buttons</span>
      </div>
      <div className={styles.wrapper + ' vpu_ocoplmimotceici_middle'}>
        <Button icon={<CalendarMonthRegular />}>Default</Button>
        <Button appearance="primary" icon={<CalendarMonthRegular />}>Primary</Button>
        <Button appearance="outline" icon={<CalendarMonth />}>Outline</Button>
        <Button appearance="subtle" icon={<CalendarMonth />}>Subtle</Button>
        <Button appearance="transparent" icon={<CalendarMonth />}>Transparent</Button>
      </div>
      <div className={styles.wrapper + ' vpu_ocoplmimotceici_middle'}>
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
      <div className={styles.wrapper + ' vpu_ocoplmimotceici_middle'}>
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
  )
}

export const DateTimePeckerFU = (props: Partial<DatePickerProps>) => {
  const styles = useStyles();
  return (
    <div className='vpu_ocoplmimotceic_item'>
      <div className="vpu_ocoplmimotceici_top">
        <span>Message Bar</span>
      </div>
      <div className={styles.control + ' vpu_ocoplmimotceici_middle'}>
        <Field label="Select a date">
          <DatePicker
            className={styles.control}
            placeholder="Select a date..."
            {...props}
          />
        </Field>
      </div>
      <div className={styles.container + ' vpu_ocoplmimotceici_middle'}>
        <Field label="Coffee time" className={styles.root}>
          <TimePicker />
        </Field>
      </div>
    </div>
  )
}

export const MessageBarFU = () => {
  const intents: MessageBarIntent[] = ["info", "warning", "error", "success"];
  const styles = useStyles();
  return (
    <div className='vpu_ocoplmimotceic_item'>
      <div className="vpu_ocoplmimotceici_top">
        <span>Message Bar</span>
      </div>
      <div className={styles.container + ' vpu_ocoplmimotceici_middle'}>
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
      <div className={styles.container + ' vpu_ocoplmimotceici_middle'}>
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
  )
}