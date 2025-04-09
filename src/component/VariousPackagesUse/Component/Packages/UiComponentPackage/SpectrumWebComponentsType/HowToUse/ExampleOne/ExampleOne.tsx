import { Button, Flex, ProgressBar, Text } from "@adobe/react-spectrum"
import Bell from '@spectrum-icons/workflow/Bell';

export const ExampleOne = () => {
  return (
    <div className='vpu_ocoplmimotceic_list'>
      <ButtonsAS />
      <ProgressBarAS />
    </div>
  )
}

export const ButtonsAS = () => {
  return (
    <div className='vpu_ocoplmimotceic_item'>
      <div className="vpu_ocoplmimotceici_top">
        <span>Buttons</span>
      </div>
      <div className="vpu_ocoplmimotceici_middle">
        <Flex direction="row" gap={8}>
          <Button variant="accent" style="fill">Save</Button>
          <Button variant="accent">
            <Bell />
            <Text>Icon + Label</Text>
          </Button>
          <Button variant="accent" style="outline" aria-label="Ring for service">
            <Bell />
          </Button>
        </Flex>
      </div>
      <div className="vpu_ocoplmimotceici_middle">
        <Flex direction="row" gap={8}>
          <Button variant="primary">Save</Button>
          <Button variant="primary">
            <Bell />
            <Text>Icon + Label</Text>
          </Button>
          <Button variant="primary" aria-label="Ring for service">
            <Bell />
          </Button>
        </Flex>
      </div>
      <div className="vpu_ocoplmimotceici_middle">
        <Flex direction="row" gap={8}>
          <Button variant="secondary">Save</Button>
          <Button variant="secondary">
            <Bell />
            <Text>Icon + Label</Text>
          </Button>
          <Button variant="secondary" aria-label="Ring for service">
            <Bell />
          </Button>
        </Flex>
      </div>
      <div className="vpu_ocoplmimotceici_middle">
        <Flex direction="row" gap={8}>
          <Button variant="negative">Save</Button>
          <Button variant="negative">
            <Bell />
            <Text>Icon + Label</Text>
          </Button>
          <Button variant="negative" aria-label="Ring for service">
            <Bell />
          </Button>
        </Flex>
      </div>
    </div>
  )
}

export const ProgressBarAS = () => {
  return (
    <div className='vpu_ocoplmimotceic_item'>
      <div className="vpu_ocoplmimotceici_top">
        <span>ProgressBar</span>
      </div>
      <div className="vpu_ocoplmimotceici_middle">
        <Flex
          direction="column"
          maxWidth="size-3000"
          gap="size-300"
        >
          <ProgressBar
            label="Loading…"
            showValueLabel={false}
            value={30}
          />
          <ProgressBar
            label="Loading…"
            valueLabel="30 of 60 dogs"
            value={30}
          />
          <ProgressBar
            label="Loading…"
            formatOptions={{
              style: 'percent',
              minimumFractionDigits: 2
            }}
            value={30.123}
          />
        </Flex>
      </div>
    </div>
  )
}