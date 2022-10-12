import axios from 'axios';
import React, { useEffect, useState } from 'react'
import BottomHeaderSection from '../../components/bottomHeaderSection/BottomHeaderSection'
import HeaderSection from '../../components/headerSection/HeaderSection'
import ListOfProfilesSection from '../../components/listOfProfilesSection/ListOfProfilesSection'
import ProfileSection from '../../components/profileSection/ProfileSection'

export default function Home() {
    const [data, setData] = useState([]);
    const [dataFilter, setDataFilter] = useState([]);
    const [isChange, setIsChange] = useState(false);
    const [userData, setUserData] = useState({ name: "", address: "", image_url: "", cell: '', email: "" });
    const [btnName, setBtnName] = useState("GENERATE NEW USERS");
    const [type, setType] = useState("all");
    const [isChangeData, setIsChangeData] = useState(10);

    const getData = (FILTER_TYPE) => {

        var URL = "";
        if (FILTER_TYPE != "male" && FILTER_TYPE != "female") {
            URL = "https://randomuser.me/api?results=100";
        }

        if (FILTER_TYPE == "male") {
            URL = "https://randomuser.me/api/?gender=male&&results=200";
        }

        if (FILTER_TYPE == "female") {
            URL = "https://randomuser.me/api/?gender=female&&results=200";
        }
        axios.get(URL, {})
            .then((res) => {
                if (res) {
                    if (res?.data) {
                        if (res.data.results) {
                            setData(res.data.results);
                            //setDataFilter(res.data.results);

                        }
                    }
                }
                console.log(FILTER_TYPE, res.data.results);
            }).catch((err) => { console.log(err); });

    }

    //filtering
    const handleClick = (FILTER_TYPE) => {
        var filter_data = [];
        if (FILTER_TYPE != "male" && FILTER_TYPE != "female") {
            setDataFilter(dataFilter)
        }

        if (FILTER_TYPE == "male") {
            filter_data = dataFilter.filter((item) => item.gender == 'male')
            setDataFilter(filter_data)
        }

        if (FILTER_TYPE == "female") {
            filter_data = dataFilter.filter((item) => item.gender == 'female')
            setDataFilter(filter_data)
        }

        console.log(dataFilter)

        setType(FILTER_TYPE)
        setIsChangeData(Math.random(1000) * 1000);
        setIsChange(false);
    }

    const handleClickUser = (user_name, user_mobile, user_address, user_avatar, user_email) => {
        setUserData({ name: user_name, cell: user_mobile, address: user_address, image_url: user_avatar, email: user_email });
        setBtnName("⬅ BACK")
        setIsChange(true);
    }

    const handleHeaderButton = (button_name) => {
        console.log(button_name)
        if (button_name == "GENERATE NEW USERS") {
            getData(type);
            var arr = data;
            var preArr = dataFilter;
            const combineArr = arr.concat(preArr);
            setDataFilter(combineArr)
            setData([]);
            console.log(dataFilter)

        } else {
            setBtnName("GENERATE NEW USERS")
            setIsChange(false);
        }
    }

    useEffect(() => {
        getData("all");
    }, []);
    // useEffect(() => { console.log("referesh") }, [isChangeData]);

    return (
        <>
            {btnName ?
                <HeaderSection button_name={btnName} handleHeaderButton={(type) => handleHeaderButton(type)} />
                :
                ""}
            {isChange == true ?
                <ProfileSection user={userData} />
                :
                (dataFilter.length > 0) ?
                    <BottomHeaderSection
                        count={dataFilter.length}
                        handleClick={(FILTER_TYPE) => handleClick(FILTER_TYPE)}
                        dataFiltered={dataFilter}
                        handleClickUser={(user_name, user_mobile, user_address, user_avatar, user_email) => handleClickUser(user_name, user_mobile, user_address, user_avatar, user_email)}
                    /> :
                    <BottomHeaderSection
                        count={data.length}
                        handleClick={(FILTER_TYPE) => handleClick(FILTER_TYPE)}
                        dataFiltered={data}
                        handleClickUser={(user_name, user_mobile, user_address, user_avatar, user_email) => handleClickUser(user_name, user_mobile, user_address, user_avatar, user_email)}
                    />}


        </>
    )
}
