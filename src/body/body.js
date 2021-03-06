import React from "react";

import { TodaysWeatherCard } from "../todays-weather-card/todays-weather-card";
import CurrentWeatherCard from "../current-weather-card/current-weather-card";
import { DailyWeatherCard } from "../daily-weather-card/daily-weather-card";
import { PrecipProbability } from "../precip-probability/precip-probability";
import { WeekWeather } from "../week-weather/week-weather";

import { Container } from "./body-styles";

export const Body = () => {
    return (
        <Container>
            <TodaysWeatherCard />
            <CurrentWeatherCard />
            <DailyWeatherCard />
            <PrecipProbability />
            <WeekWeather />
            <TodaysWeatherCard />
            <TodaysWeatherCard />
            <TodaysWeatherCard />
            <TodaysWeatherCard />
            <TodaysWeatherCard />
            <TodaysWeatherCard />
            <TodaysWeatherCard />
            <TodaysWeatherCard />
        </Container>
    );
};
