import { Breadcrumb, Button, ColorPicker, ConfigProvider, Flex, Pagination, Space, Tooltip } from 'antd';
import { useResponsive } from 'antd-style';
import { SearchOutlined } from '@ant-design/icons';

export const ExampleOne = () => {
  return (
    <>
      <ButtonsMU />
      <BreadcrumbMU />
      <PaginationMU />
      <ColourPeakerMU />
    </>
  )
}

export const ButtonsMU = () => {
  const { xxl } = useResponsive();
  return (
    <>
      <div className='vpu_ocoplmimotceic_list'>
        <div className="vpu_ocoplmimotceici_top">
          <span>Various Types Of Buttons</span>
        </div>
        <div className="vpu_ocoplmimotceici_middle">
          <ConfigProvider componentSize={xxl ? 'middle' : 'small'}>
            <Flex vertical gap="small">
              <Flex gap="small" wrap>
                <Button color="default" variant="solid">
                  Solid
                </Button>
                <Button color="default" variant="outlined">
                  Outlined
                </Button>
                <Button color="default" variant="dashed">
                  Dashed
                </Button>
                <Button color="default" variant="filled">
                  Filled
                </Button>
                <Button color="default" variant="text">
                  Text
                </Button>
                <Button color="default" variant="link">
                  Link
                </Button>
              </Flex>
              <Flex gap="small" wrap>
                <Button color="primary" variant="solid">
                  Solid
                </Button>
                <Button color="primary" variant="outlined">
                  Outlined
                </Button>
                <Button color="primary" variant="dashed">
                  Dashed
                </Button>
                <Button color="primary" variant="filled">
                  Filled
                </Button>
                <Button color="primary" variant="text">
                  Text
                </Button>
                <Button color="primary" variant="link">
                  Link
                </Button>
              </Flex>
              <Flex gap="small" wrap>
                <Button color="danger" variant="solid">
                  Solid
                </Button>
                <Button color="danger" variant="outlined">
                  Outlined
                </Button>
                <Button color="danger" variant="dashed">
                  Dashed
                </Button>
                <Button color="danger" variant="filled">
                  Filled
                </Button>
                <Button color="danger" variant="text">
                  Text
                </Button>
                <Button color="danger" variant="link">
                  Link
                </Button>
              </Flex>
              <Flex gap="small" wrap>
                <Button color="pink" variant="solid">
                  Solid
                </Button>
                <Button color="pink" variant="outlined">
                  Outlined
                </Button>
                <Button color="pink" variant="dashed">
                  Dashed
                </Button>
                <Button color="pink" variant="filled">
                  Filled
                </Button>
                <Button color="pink" variant="text">
                  Text
                </Button>
                <Button color="pink" variant="link">
                  Link
                </Button>
              </Flex>
              <Flex gap="small" wrap>
                <Button color="purple" variant="solid">
                  Solid
                </Button>
                <Button color="purple" variant="outlined">
                  Outlined
                </Button>
                <Button color="purple" variant="dashed">
                  Dashed
                </Button>
                <Button color="purple" variant="filled">
                  Filled
                </Button>
                <Button color="purple" variant="text">
                  Text
                </Button>
                <Button color="purple" variant="link">
                  Link
                </Button>
              </Flex>
              <Flex gap="small" wrap>
                <Button color="cyan" variant="solid">
                  Solid
                </Button>
                <Button color="cyan" variant="outlined">
                  Outlined
                </Button>
                <Button color="cyan" variant="dashed">
                  Dashed
                </Button>
                <Button color="cyan" variant="filled">
                  Filled
                </Button>
                <Button color="cyan" variant="text">
                  Text
                </Button>
                <Button color="cyan" variant="link">
                  Link
                </Button>
              </Flex>
            </Flex>
          </ConfigProvider>
        </div>
      </div>
      <div className='vpu_ocoplmimotceic_list'>
        <div className="vpu_ocoplmimotceici_top">
          <span>Various Types Of Buttons</span>
        </div>
        <div className="vpu_ocoplmimotceici_middle">
          <Flex gap="small" vertical>
            <Flex wrap gap="small">
              <Tooltip title="search">
                <Button type="primary" shape="circle" icon={<SearchOutlined />} />
              </Tooltip>
              <Button type="primary" shape="circle">
                A
              </Button>
              <Button type="primary" icon={<SearchOutlined />}>
                Search
              </Button>
              <Tooltip title="search">
                <Button shape="circle" icon={<SearchOutlined />} />
              </Tooltip>
              <Button icon={<SearchOutlined />}>Search</Button>
            </Flex>
            <Flex wrap gap="small">
              <Tooltip title="search">
                <Button shape="circle" icon={<SearchOutlined />} />
              </Tooltip>
              <Button icon={<SearchOutlined />}>Search</Button>
              <Tooltip title="search">
                <Button type="dashed" shape="circle" icon={<SearchOutlined />} />
              </Tooltip>
              <Button type="dashed" icon={<SearchOutlined />}>
                Search
              </Button>
              <Button icon={<SearchOutlined />} href="https://www.google.com" target="_blank" />
            </Flex>
          </Flex>
        </div>
      </div>
    </>
  )
}

export const BreadcrumbMU = () => {
  return (
    <div className='vpu_ocoplmimotceic_item'>
      <div className="vpu_ocoplmimotceici_top">
        <span>Breadcrumb</span>
      </div>
      <div className="vpu_ocoplmimotceici_middle">
        <Breadcrumb
          items={[
            {
              title: 'Home',
            },
            {
              title: <a href="">Application Center</a>,
            },
            {
              title: <a href="">Application List</a>,
            },
            {
              title: 'An Application',
            },
          ]}
        />
      </div>
    </div>
  )
}

export const PaginationMU = () => {
  return (
    <div className='vpu_ocoplmimotceic_item'>
      <div className="vpu_ocoplmimotceici_top">
        <span>Pagination</span>
      </div>
      <div className="vpu_ocoplmimotceici_middle">
        <Pagination defaultCurrent={6} total={500} />
      </div>
    </div>
  )
}

export const ColourPeakerMU = () => {
  return (
    <div className='vpu_ocoplmimotceic_item'>
      <div className="vpu_ocoplmimotceici_top">
        <span>Pagination</span>
      </div>
      <div className="vpu_ocoplmimotceici_middle">
        <Space>
          <Space direction="vertical">
            <ColorPicker defaultValue="#1677ff" size="small" />
          </Space>
          <Space direction="vertical">
            <ColorPicker defaultValue="#1677ff" size="small" showText />
          </Space>
        </Space>
      </div>
    </div>
  )
}