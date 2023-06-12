
import dayjs from 'dayjs';
import type { Dayjs } from 'dayjs';
import dayLocaleData from 'dayjs/plugin/localeData';
import { Calendar as CalendarUI, Row, Col, Select } from "antd";

dayjs.extend(dayLocaleData);

export const Calendar = () => {

    const renderHeader = ({ value, onChange }: {value: Dayjs, onChange(date: Dayjs): void}): JSX.Element => {
        const current = value.clone();
        const localeData = value.localeData();
        const currentYear = value.year();
        const month = value.month();
        const startYear = currentYear - 10;
    
        const monthOptions = Array.from({length: 12}, (_, index) => (
            <Select.Option key={index} value={index} className="month-item">
                {localeData.months(current.month(index))}
            </Select.Option>
        ));
          
        const options = Array.from({length: 20}, (_, index) => (
            <Select.Option key={index} value={index} className="year-item">
                {startYear + index}
            </Select.Option>
        ));

        return (
        <div style={{ padding: 8 }}>
            <Row gutter={8}>
                <Col>
                    <Select
                        size="small"
                        className="my-year-select"
                        value={currentYear}
                        onChange={(newYear) => {
                            const now = value.clone().year(newYear);
                            onChange(now);
                        }}
                        >
                        {options}
                    </Select>
                </Col>
                <Col>
                    <Select
                        size="small"
                        value={month}
                        onChange={(newMonth) => {
                            const now = value.clone().month(newMonth);
                            onChange(now);
                        }}
                        >
                        {monthOptions}
                    </Select>
                </Col>
            </Row>
        </div>
        )
    }

    return (
        <CalendarUI headerRender={renderHeader} />
    )
}