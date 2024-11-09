import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                color: '#3b3b3b',
                margin: "0 30px",
                width: '147px',
                '& .MuiSlider-thumb': {
                    borderRadius: '100%',
                    backgroundColor: '#fff',
                    border: '1px solid #0c2',

                    '&::before': {
                        backgroundColor: '#0c2',
                        width: '10px',
                        height: '10px',
                    }
                },
                '& .MuiSlider-track': {
                    backgroundColor: '#0c2',
                    border: '1px solid #0c2',
                }

            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
