import React from "react";
function SearchInput(){
return(

    <div className="header__search">
                <img src="" alt="Buscar"/>
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