import { WrapperSearch, SearchInput, IconSearch, BtnSearch } from "./NoticesSearch.styled";
import search from '../../images/svg/search.svg';

export const NoticesSearch = () => {
	return <WrapperSearch>
		<SearchInput placeholder='Search'/>
		<BtnSearch type="submit">
			<IconSearch src={search} alt='' />
		</BtnSearch>
	</WrapperSearch>
};