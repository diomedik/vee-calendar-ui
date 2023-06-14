import React from 'react';
import { Select, SelectProps, Dropdown } from 'antd';
import './SelectWithArrows.css'

interface IProps {
    onChange(date: number): void;
}

export const SelectWithArrows = (props: IProps & SelectProps): JSX.Element => {
    const [index, setIndex] = React.useState<number>(() => props.options?.findIndex((option) => option.value === props.defaultValue) || 0);

    React.useEffect(() => {
        props.onChange(props.options[index].value as number);
    }, [index]);

    const handleUpArrow = () => {
        setIndex((prevState) => prevState + 1)
    };
    const handleDownArrow = () => {
        setIndex((prevState) => prevState - 1)
    };

    return (
        <div>
            <Select
                className="select"
                {...props} 
            />
            <button className='arrow' onClick={handleUpArrow} />
            <button className='arrow arrow-down' onClick={handleDownArrow} />
        </div>

    )
}