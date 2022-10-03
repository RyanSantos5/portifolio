import React , { Component, useEffect, useState } from 'react';
import './style.scss';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {Chart} from 'react-google-charts';
import _ from 'lodash';




const WeatherPage = () => {
    const [weather,setWeather] = useState(null);
    const [coord,setCoord] = useState(null);
    const [weatherPollution,setWeatherPollution] = useState(null);
      
    const options = {
        chart: {
          title: "Air Pollution",
          subtitle: "Apresenta os niveis de poluição",
        },
      };

    
    const loadData = async (coord) => {

        try {
            const response = await fetch(`http://api.openweathermap.org/data/2.5/air_pollution?lat=${coord.lat}&lon=${coord.long}&exclude=hourly,daily&appid=3dded86c5c9551231b319afe631a2088`);
            console.log(response);
            const data = await response.json();
            console.log(data)
            const pollution = data.list[0].components;
            const dataAux = [
                pollution.co,
                pollution.nh3,
                pollution.no,
                pollution.no2,
                pollution.o3,
                pollution.pm2_5,
                pollution.pm10,
                pollution.so2
            ]

            const head = ["co", "nh3", "no", "no2", "o3","pm2_5","pm10", "so2"];

            const chart = [
                head,
                dataAux
            ]

            setWeatherPollution(chart);
            setWeather(data);
        } catch (error) {
            console.log("Ocorreu um erro ao buscar")
        }
    }

    const searchData = () => {
        let lat = document.getElementById("input-coord-lat").value;
        let long = document.getElementById("input-coord-long").value;

        loadData({
            lat,
            long
        })
    }

    // const loadChart = (data) => {
    //     const values = _.groupBy(data, ()=>{
    //         retur value.
    //     })
    // }
    
    useEffect(() => {
        console.log(weather?.list[0].components)
    });

    return (
        <div className="weather"
         >
            <Header />
            <div className='container weather-container'>
                <div className='inputs'>
                    <div>
                        <p>Latitude</p>
                        <input id='input-coord-lat'/>
                    </div>
                    <div>
                        <p>Longitude</p>
                        <input id='input-coord-long'/>
                    </div>
                    <button onClick={searchData}>Pesquisar</button>
                </div>
                {
                    weather ? 
                    <Chart
                        chartType="Bar"
                        width="100%"
                        height="400px"
                        data={weatherPollution}
                        options={options}
                        />
                    :
                    <></>
                }
            </div>
            <Footer />
        </div>
    )
}

export default WeatherPage;