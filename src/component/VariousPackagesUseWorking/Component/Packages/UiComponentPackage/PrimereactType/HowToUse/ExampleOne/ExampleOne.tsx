import { Accordion, AccordionTab } from 'primereact/accordion';
import { PrimeReactProvider } from 'primereact/api';
import { BreadCrumb } from 'primereact/breadcrumb';
import { Button } from 'primereact/button';
import { Calendar } from 'primereact/calendar';
import { MultiSelect } from 'primereact/multiselect';
import { Rating } from 'primereact/rating';
import { useState } from 'react';

export const ExampleOne = () => {
  const objectPass = {
    unstyled: false
  }
  return (
    <div className='vpu_ocoplmimotceic_list'>
      <PrimeReactProvider value={objectPass}>
        <ButtonsPR />
        <BreadCrumbPR />
        <MultiSelectPR />
        <RatingPR />
        <DateTimePeckerPR />
        <AccordionPR />
      </PrimeReactProvider>
    </div>
  )
}

export const BreadCrumbPR = () => {
  const items = [{ label: 'Electronics' }, { label: 'Computer' }, { label: 'Accessories' }, { label: 'Keyboard' }, { label: 'Wireless' }];
  const home = { icon: 'pi pi-home', url: 'https://primereact.org' }
  return (
    <>
      <div className="exampleCommon">
        <div className="exampleCommonPoints">
          <span>Bread Crumb</span>
        </div>
        <div className="exampleCommonContent">
          <BreadCrumb model={items} home={home} />
        </div>
      </div>
    </>
  )
}

export const RatingPR = () => {
  const [value, setValue] = useState<number | undefined>(undefined);
  return (
    <>
      <div className="exampleCommon">
        <div className="exampleCommonPoints">
          <span>Multiselect</span>
        </div>
        <div className="exampleCommonContent">
          <Rating value={value} onChange={(e: any) => setValue(e.value)} stars={10} />
        </div>
      </div>
    </>
  )
}

export const MultiSelectPR = () => {
  const [selectedCities, setSelectedCities] = useState()
  const cities = [
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
  ]
  return (
    <>
      <div className="exampleCommon">
        <div className="exampleCommonPoints">
          <span>Multiselect</span>
        </div>
        <div className="exampleCommonContent">
          <MultiSelect value={selectedCities} onChange={(e) => setSelectedCities(e.value)} options={cities} optionLabel="name"
            filter placeholder="Select Cities" maxSelectedLabels={3} className="w-full md:w-20rem" />
        </div>
      </div>
    </>
  )
}

export const AccordionPR = () => {
  return (
    <>
      <div className="exampleCommon fullWidth">
        <div className="exampleCommonPoints">
          <span>Accordion</span>
        </div>
        <div className="exampleCommonContent">
          <Accordion activeIndex={0}>
            <AccordionTab header="Header I">
              <p className="m-0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </AccordionTab>
            <AccordionTab header="Header II">
              <p className="m-0">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas
                sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                Consectetur, adipisci velit, sed quia non numquam eius modi.
              </p>
            </AccordionTab>
            <AccordionTab header="Header III">
              <p className="m-0">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti
                quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt
                mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.
                Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
              </p>
            </AccordionTab>
          </Accordion>
        </div>
      </div>
    </>
  )
}

export const DateTimePeckerPR = () => {
  const [date, setDate] = useState()
  const [time, setTime] = useState()
  return (
    <>
      <div className="exampleCommon">
        <div className="exampleCommonPoints">
          <span>DateTime pecker</span>
        </div>
        <div className="exampleCommonContent">
          <Calendar value={date} onChange={(e: any) => setDate(e.value)} placeholder='Select date' />
          <Calendar value={time} onChange={(e: any) => setTime(e.value)} placeholder='Select time' timeOnly />
        </div>
      </div>
    </>
  )
}

export const ButtonsPR = () => {
  return (
    <>
      <div className="exampleCommon fullWidth">
        <div className="exampleCommonPoints">
          <span>Various types button</span>
        </div>
        <div className="exampleCommonContent">
          <Button label="Primary" />
          <Button label="Secondary" severity="secondary" />
          <Button label="Success" severity="success" />
          <Button label="Info" severity="info" />
          <Button label="Warning" severity="warning" />
          <Button label="Help" severity="help" />
          <Button label="Danger" severity="danger" />
        </div>
      </div>
    </>
  )
}