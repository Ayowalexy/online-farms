import { SearchContainer, SearchInput, SearchBtn } from './search.styles';


const Search = () => {
    return(
        <SearchContainer>
        <SearchInput
          type="search"
          placeholder="Search products, brands and categories">
        </SearchInput>
        <SearchBtn> SEARCH </SearchBtn>
        </SearchContainer>
    )
}
export default Search;