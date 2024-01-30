import React from "react";
import "./Search.css";
import SearchIcon from '@mui/icons-material/Search';

function SearchInput(){
return(

    <div className="header__search">
               <SearchIcon />
                <input 
                    id="search-input" 
                    maxLength="800" 
                    autoCorrect="off" 
                    autoCapitalize="off" 
                    spellCheck="false"
                    placeholder="Qual vídeo está procurando?"
                />
            </div>
);
}

export default SearchInput;