import * as React from 'react'
import * as dateFormat from 'date-fns/format'
import './Header.sass'

const Header: React.SFC<{}> = () => {
    const [date, setDate] = React.useState(Date.now())

    React.useEffect(
        () => {
            const dateInterval = setInterval(() => {
                setDate(Date.now())
            },
            1000)
            return () => {
                clearInterval(dateInterval)
            }
        },
        []
    )

    return (
        <header>
            <div className="w-20 f-left"><h1 className="text-white">My tasks</h1></div>
            <div className="d-flex w-80 date-container">
                <div className="text-white font-xl font-bold">{dateFormat(date, 'dddd')}</div>
                <div className="text-white font-xl font-bold">{dateFormat(date, 'Do MMMM YYYY')}</div>
                <div className="text-white font-xl font-bold">{dateFormat(date, 'HH:mm')}</div>
            </div>
        </header>
    )
}

export default Header