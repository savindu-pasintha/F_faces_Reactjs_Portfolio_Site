import React, { useEffect, useState } from 'react'

export default function ListOfProfilesSection(props) {
    const [imageUrl, setImageUrl] = useState("");
    const [data, setData] = useState(props.data);
    const filteredData = props.data;

    const style = {
        root: {
            margin: 0, padding: 0
        },
        card: {
            width: '144px', height: "140px",
            padding: '2px 0px', margin: '0px'
        }
    }

    const Card = ({ user, id }) => {
        return (
            <div className="col" style={style.card}>
                <a
                    //href={`user/${id}/name=${user?.name?.title + ". " + user?.name?.first + " " + user?.name?.last}&email=${user?.email}&address=${''}&phone=${user?.cell}`}
                    onClick={() => { props.handleClickUser(`${user?.name?.title + ". " + user?.name?.first + " " + user?.name?.last}`, `${user?.cell}`, `${user?.location?.country}`, `${user?.picture?.large}`, `${user?.email}`); }}>
                    <img src={user?.picture?.large} alt={user?.name?.title?.first} style={style.card} loading="lazy" />
                </a>
            </div>
        );
    }

    useEffect(() => {
        if (props.data.length > 0) {
            setData(props.data)
        }
    }, []);

    return (
        <div className="">
            <div className="row">
                {
                    filteredData.length > 0 ?
                        filteredData.map((item, ind) => (item ? < Card user={item} key={ind} id={ind} /> : ""))
                        : ""
                }
            </div>
        </div >
    )
}
