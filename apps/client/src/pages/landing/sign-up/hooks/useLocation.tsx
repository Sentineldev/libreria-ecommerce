import { Country, State, City, IState, ICountry, ICity } from "country-state-city"
import { useState, useEffect } from "react";

export function useLocation(){
    const countryData = Country.getAllCountries();
	const [stateData, setStateData] = useState<IState[]>([]);
	const [cityData, setCityData] = useState<ICity[]>([]);
	const [country, setCountry] = useState<ICountry>(countryData[0])
	const [state, setState] = useState<IState>();
	const [city, setCity] = useState<ICity>();

	useEffect(()=>{
		setStateData(State.getStatesOfCountry(country?.isoCode))
	},[country])

	useEffect(()=>{
		if(country && state){
			setCityData(City.getCitiesOfState(country.isoCode, state?.isoCode))
		}
	},[state, country])

	useEffect(()=>{
		stateData && setState(stateData[0])
	},[stateData]);

	useEffect(()=>{
		cityData && setCity(cityData[0])
	},[cityData])

	function handleCountryChange(e: React.ChangeEvent<HTMLSelectElement>){
		const selectedCountry = countryData.find(country => country.name === e.target.value);
		if (selectedCountry) setCountry(selectedCountry);
	}

	function handleStateChange(e: React.ChangeEvent<HTMLSelectElement>){
		const selectedState = stateData.find(state => state.name === e.target.value);
		if (selectedState) setState(selectedState);
	}

	function handleCityChange (e: React.ChangeEvent<HTMLSelectElement>){
		const selectedCity = cityData.find(city => city.name === e.target.value);
		if(selectedCity) setCity(selectedCity);
	}

    return {country, state, city, countryData, stateData, cityData, handleCountryChange, handleStateChange, handleCityChange}


}