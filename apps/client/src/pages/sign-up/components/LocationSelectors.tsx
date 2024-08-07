import { useLocation } from "../hooks/useLocation";

export const LocationSelector = () =>{
	const { countryData, state, stateData,city,cityData, handleCountryChange, handleStateChange } =	useLocation()
    return(
		<div className="col-span-full grid grid-cols-[1fr_1fr_1fr] pl-2 pr-2 gap-2 place-items-center">
			<select className="select select-primary w-full max-w-xs h-14" onChange={handleCountryChange} name="country">
				{countryData.map(country => 
					<option key={country.name} value={country.name}>{country.name}</option>
				)}
			</select>

		{state && (
			<select className="select select-primary w-full max-w-xs h-14" onChange={handleStateChange} name="state">
			{stateData.map(state => 
				<option key={state.name} value={state.name}>{state.name}</option>
			)}
			</select>
		)}

		{city && (
			<select className="select select-primary w-full max-w-xs h-14" name="city">
			{cityData.map(city => 
				<option key={city.name} value={city.name}>{city.name}</option>
			)}
			</select>
		)

		}

		</div>
    )
}
