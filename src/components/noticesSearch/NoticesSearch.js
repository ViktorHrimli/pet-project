// import { useSelector } from "react-redux";
import { useState } from "react";
import {
	WrapperSearch,
	SearchInput,
	IconSearch,
	IconCross,
	BtnSearch 
} from "./NoticesSearch.styled";

export const NoticesSearch = () => {
	const [isSearch, setIsSearch] = useState(true)
	// const isSearch = useSelector()
	
	return <WrapperSearch>
		<SearchInput placeholder='Search'/>
		<BtnSearch onClick={() => setIsSearch(prevState => !prevState)} >
			{isSearch ? <IconSearch /> : <IconCross/>}
		</BtnSearch>
	</WrapperSearch>
};