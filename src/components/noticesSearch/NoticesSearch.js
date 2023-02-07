import { useDispatch } from "react-redux";
import { useState } from "react";

import {setFilterNotices} from '../../redux/notices/filterSlice';
import {
	SearchForm,
	SearchInput,
	IconSearch,
	IconCross,
	BtnSearch 
} from "./NoticesSearch.styled";

export const NoticesSearch = () => {
	const [query, setQuery] = useState("");
	const [isSearch, setIsSearch] = useState(true);

	const dispatch = useDispatch();

	const handleSubmit = () => {
		setIsSearch(prevState => !prevState);
		dispatch(setFilterNotices(query));
	};

	const handleChange = e => {
		e.preventDefault();
		setQuery(e.target.value);
	};

	return <SearchForm onSubmit={handleSubmit}>
		<SearchInput type="text" placeholder='Search'
		name='value' onChange={handleChange}/>
		<BtnSearch >
			{isSearch ? <IconSearch /> : <IconCross/>}
		</BtnSearch>
	</SearchForm>
};