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
            <div className="text-white font-xl font-bold">{dateFormat(date, 'dddd')}</div>
            <div className="text-white font-xl font-bold">{dateFormat(date, 'Do MMMM YYYY')}</div>
            <div className="text-white font-xl font-bold">{dateFormat(date, 'HH:mm')}</div>
        </header>
    )
}

export default Header