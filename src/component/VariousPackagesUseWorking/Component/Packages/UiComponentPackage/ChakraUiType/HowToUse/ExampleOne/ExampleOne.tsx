import { Badge, Button, CloseButton, Dialog, HStack, Portal, QrCode, SegmentGroup, Skeleton, SkeletonCircle, Stack, Text } from "@chakra-ui/react"
import { HiAtSymbol, HiStar } from "react-icons/hi"

export const ExampleOne = () => {
  return (
    <div className='vpu_ocoplmimotceic_list'>
      <ButtonsCU />
      <BadgeCU />
      <DialogueCU />
      <QrCodeCU />
      <SegmentCU />
      <SkeletonCU />
    </div>
  )
}

export const ButtonsCU = () => {
  const colorPalettes: any = ['red', 'green', 'blue', 'yellow']
  return (
    <>
      <div className="exampleCommon">
        <div className="exampleCommonPoints">
          <span>Buttons</span>
        </div>
        <div className="exampleCommonContent">
          <Stack gap="2" align="flex-start">
            {colorPalettes.map((colorPalette: any) => (
              <Stack align="center" key={colorPalette} direction="row" gap="10">
                <Text minW="8ch">{colorPalette}</Text>
                <Button colorPalette={colorPalette}>Button</Button>
                <Button colorPalette={colorPalette} variant="outline">Button</Button>
                <Button colorPalette={colorPalette} variant="surface">Button</Button>
                <Button colorPalette={colorPalette} variant="subtle">Button</Button>
              </Stack>
            ))}
          </Stack>
        </div>
      </div >
    </>
  )
}

export const BadgeCU = () => {
  return (
    <>
      <div className="exampleCommon">
        <div className="exampleCommonPoints">
          <span>Badge</span>
        </div>
        <div className="exampleCommonContent">
          <Stack align="flex-start">
            <Badge variant="solid" colorPalette="blue">
              <HiStar />
              New</Badge>
            <Badge variant="solid" colorPalette="green">
              New<HiAtSymbol />
            </Badge>
          </Stack>
        </div>
      </div >
    </>
  )
}

export const DialogueCU = () => {
  return (
    <>
      <div className="exampleCommon">
        <div className="exampleCommonPoints">
          <span>Dialogue</span>
        </div>
        <div className="exampleCommonContent">
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <Button variant="outline" size="sm">
                Open Dialog
              </Button>
            </Dialog.Trigger>
            <Portal>
              <Dialog.Backdrop />
              <Dialog.Positioner>
                <Dialog.Content>
                  <Dialog.Header>
                    <Dialog.Title>Dialog Title</Dialog.Title>
                  </Dialog.Header>
                  <Dialog.Body>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                      eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                  </Dialog.Body>
                  <Dialog.Footer>
                    <Dialog.ActionTrigger asChild>
                      <Button variant="outline">Cancel</Button>
                    </Dialog.ActionTrigger>
                    <Button>Save</Button>
                  </Dialog.Footer>
                  <Dialog.CloseTrigger asChild>
                    <CloseButton size="sm" />
                  </Dialog.CloseTrigger>
                </Dialog.Content>
              </Dialog.Positioner>
            </Portal>
          </Dialog.Root>
        </div>
      </div >
    </>
  )
}

export const QrCodeCU = () => {
  return (
    <>
      <div className="exampleCommon">
        <div className="exampleCommonPoints">
          <span>Dialogue</span>
        </div>
        <div className="exampleCommonContent">
          <QrCode.Root value="https://www.google.com">
            <QrCode.Frame>
              <QrCode.Pattern />
            </QrCode.Frame>
          </QrCode.Root>
        </div>
      </div >
    </>
  )
}

export const SegmentCU = () => {
  return (
    <>
      <div className="exampleCommon">
        <div className="exampleCommonPoints">
          <span>Dialogue</span>
        </div>
        <div className="exampleCommonContent">
          <SegmentGroup.Root defaultValue="React">
            <SegmentGroup.Indicator />
            <SegmentGroup.Items items={["React", "Vue", "Solid"]} />
          </SegmentGroup.Root>
        </div>
      </div >
    </>
  )
}

export const SkeletonCU = () => {
  return (
    <>
      <div className="exampleCommon">
        <div className="exampleCommonPoints">
          <span>Dialogue</span>
        </div>
        <div className="exampleCommonContent">
          <HStack gap="5">
            <SkeletonCircle size="12" />
            <Stack flex="1">
              <Skeleton height="5" />
              <Skeleton height="5" width="250px" />
            </Stack>
          </HStack>
          <br />
          <HStack gap="5">
            <SkeletonCircle size="12" />
            <Stack flex="1">
              <Skeleton height="5" />
              <Skeleton height="5" width="250px" />
            </Stack>
          </HStack>
        </div>
      </div >
    </>
  )
}