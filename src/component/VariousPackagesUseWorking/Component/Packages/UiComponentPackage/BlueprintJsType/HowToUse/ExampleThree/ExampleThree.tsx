import { DateInput3 } from "@blueprintjs/datetime2";
import { useCallback, useState } from "react";

export const ExampleThree = () => {
  const [dateValue, setDateValue] = useState<string>("");
  const handleChange = useCallback((newDate: string | null, _isUserChange: boolean) => {
    if (newDate !== null) {
      setDateValue(newDate);
    }
  }, []);
  const formatDate = useCallback((date: Date) => date.toLocaleString(), []);
  const parseDate = useCallback((str: string) => new Date(str), []);
  return (
    <div className='vpu_ocoplmimotceic_list'>
      <div className="exampleCommon">
        <div className="exampleCommonContent">
          <DateInput3
            formatDate={formatDate}
            onChange={handleChange}
            parseDate={parseDate}
            placeholder="M/D/YYYY"
            value={dateValue}
          />
        </div>
      </div>
    </div>
  )
}