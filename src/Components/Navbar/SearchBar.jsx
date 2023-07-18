import { InputGroup, InputLeftElement, Input } from "@chakra-ui/react";
import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Search2Icon } from "@chakra-ui/icons";
import { debounce } from "lodash";
import { SearchContext } from "../../Context/SearchContext";

const initial = { search: "" };
const SearchBar = () => {
  const [input, setInput] = useState(initial);
  const { inputQuery } = useContext(SearchContext);

  const navigate = useNavigate();
  const { value } = input.search;
  const debouncedInputChange = debounce((value) => {
    inputQuery(value);
    navigate("/searchPage");
  }, 800);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
    debouncedInputChange(value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      navigate("/searchPage");
    }
  };
  return (
    <>
      <InputGroup w="35%" variant="filled" size={"md"} color={"gray.600"}>
        <InputLeftElement
          pl={5}
          pointerEvents="change"
          children={<Search2Icon color="gray.600" />}
        />
        <Input
          ml={2}
          px={9}
          type="text"
          name="search"
          value={value}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          focusBorderColor="lightcoral"
          placeholder="Search here"
          color={"gray.600"}
          fontWeight={400}
        />
      </InputGroup>
    </>
  );
};

export default SearchBar;
