import { Select } from '@cogoport/components';
import React from 'react';

import countries from '../../../constants/countries.json';

interface SelectCountryCodeProps {
	optionValueKey?: string;
}

function SelectCountryCode({ optionValueKey = 'mobile_country_code', ...props }:SelectCountryCodeProps) {
	const formattedList = countries.reduce((result: any, country: any) => {
		const obj = {
			value: country[optionValueKey],
			label:
        optionValueKey === 'mobile_country_code' ? `${country.mobile_country_code}: ${country.name}` : country.name,
		};

		if (country.country_code === 'IN') {
			result.unshift(obj);
		} else {
			result.push(obj);
		}

		return result;
	}, []);
	return (
		<div style={{ margin: '20px' }}>

			<Select
				{...props}
				options={formattedList}
				style={{ width: '300px' }}
			/>
		</div>

	);
}
export default SelectCountryCode;
