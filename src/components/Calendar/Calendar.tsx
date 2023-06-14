import React from 'react';
import dayjs from 'dayjs';
import type { Dayjs } from 'dayjs';
import dayLocaleData from 'dayjs/plugin/localeData';
import { Calendar as CalendarUI, Row, Col, Select as SelectUI } from "antd";
import { SelectWithArrows } from '../SelectWithArrows';
import { EventModal } from '../EventModal';
import './Calendar.css'

dayjs.extend(dayLocaleData);

export const Calendar = () => {
    const [showModal, setShowModal] = React.useState(false);
    const [selectedDate, setSelectedDate] = React.useState<Dayjs>(dayjs);
    const currentYear = dayjs().clone().year();

    const handleCellClick = (date: Dayjs, info?: any): void => {
        setSelectedDate(date);
        setShowModal(true);
    };

    const handleSubmit = () => {
        setShowModal(false);
    }

    const fullCellRender = (date: Dayjs): JSX.Element => {
        return (
            <div className="cell">
                <div className="day">{date.date()}</div>
                <div>Tags</div>
            </div>
        )
    }

    const renderHeader = ({ value, onChange }: {value: Dayjs, onChange(date: Dayjs): void}): JSX.Element => {
        const current = value.clone();
        const localeData = value.localeData();
        const month = value.month();
        const startYear = currentYear - 10;
    
        const monthOptions = Array.from({length: 12}, (_, index) => ({
            label: localeData.months(current.month(index)),
            value: index,
        }));
          
        const yearOptions = Array.from({length: 20}, (_, index) => {
            const calcYear = startYear + index;
            
            return {
                label: calcYear,
                value: calcYear,
            }
        })
    

        return (
            <div>
                <Row gutter={6} justify="center">
                    <Col>
                        <SelectWithArrows 
                            value={month}
                            onChange={(passedValue) => {
                                const now = value.clone().month(passedValue);
                                onChange(now)
                            }}
                            defaultValue={current.month()}
                            options={monthOptions}
                            showArrow={false}
                            bordered={false}
                            open={false}
                        />
                    </Col>
                    <Col>
                        <SelectWithArrows 
                            value={value.clone().year()}
                            defaultValue={current.year()}
                            onChange={(passedValue) => {
                                const now = value.clone().year(passedValue);
                                onChange(now)
                            }}
                            options={yearOptions}
                            showArrow={false}
                            bordered={false}
                            open={false}
                        />
                    </Col>
                </Row>
            </div>
        )
    }

    return (
        <>
            <CalendarUI 
                className="calendar"
                headerRender={renderHeader} 
                fullCellRender={fullCellRender}
                onSelect={(date, { source }) => {
                    if (source === 'date') {
                      handleCellClick(date)
                    }
                }}
            />
            <EventModal 
                open={showModal}
                date={selectedDate}
                onCancel={() => setShowModal(false)} 
                onSumbit={handleSubmit} 
            />
        </>
        
    )
}