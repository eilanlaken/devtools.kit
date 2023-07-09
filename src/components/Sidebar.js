import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { FaHammer } from "react-icons/fa";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { AiOutlineFieldString } from "react-icons/ai";
import { BsRegex } from "react-icons/bs";
import { TbBinary } from "react-icons/tb";
import { BsFiletypeYml } from "react-icons/bs";
import { BsFiletypeJson } from "react-icons/bs";
import { AiOutlineFileGif } from "react-icons/ai";

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  color: #e2e2e2;
  gap: 20px;
`;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 20px;
  padding: 10px;
  color: #e2e2e2;

  & input {
    color: white;
    flex-grow: 1;
    padding: 5px;
    border-radius: 15px;
    background-color: transparent;
    outline: blue;
    margin-top: 20px;

    &:focus {
    }
  }
`;

const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #e2e2e2;
  text-decoration: none;
  background-color: #111;
  padding: 4px 17px;
  margin: 10px 10px;
  border-radius: 4px;
  width: 75%;

  &:hover {
    background-color: #222;
  }

  &.active {
    background-color: #301934;
  }
`;

const ScrollableDiv = styled.div`
  overflow-x: hidden;
  overflow-y: auto;
  height: 100%;
  width: 100%;
`;

const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  overflow: hidden;
`;

const links = [
  { name: "a", path: "/a", icon: <FaHammer /> },
  { name: "bdddddddddd", path: "/b", icon: <FaHammer /> },
  {
    name: "Strings Case Transforms",
    path: "/strings-case-transform",
    icon: <AiOutlineFieldString style={{ color: "#4536ff" }} />,
  },
  {
    name: "RegEx Tester",
    path: "/regex-tester",
    icon: <BsRegex style={{ color: "yellow" }} />,
  },
  {
    name: "Number Base Transforms",
    path: "/number-base-transforms",
    icon: <TbBinary style={{ color: "#f1f1f1" }} />,
  },
  {
    name: ".yml to .json",
    path: "/yml-to-json",
    icon: <BsFiletypeYml style={{ color: "#ee22aa" }} />,
  },
  {
    name: ".json to .yml",
    path: "/json-to-yml",
    icon: <BsFiletypeJson style={{ color: "#22eeaa" }} />,
  },
  {
    name: ".gif to .png(s)",
    path: "/gif-to-pngs",
    icon: <AiOutlineFileGif style={{ color: "#ee1100" }} />,
  },
  { name: "c", path: "/c" },
  { name: "c", path: "/c" },
  { name: "c", path: "/c" },
  { name: "c", path: "/c" },
  { name: "c", path: "/c" },
  { name: "c", path: "/c" },
  { name: "c", path: "/c" },
  { name: "c", path: "/c" },
  { name: "c", path: "/c" },
  { name: "c", path: "/c" },
  { name: "c", path: "/c" },
  { name: "c", path: "/c" },
  { name: "c", path: "/c" },
  { name: "c", path: "/c" },
  { name: "c", path: "/c" },
  { name: "c", path: "/c" },
];

const Sidebar = () => {
  //const { loggedIn, firstName } = useSelector((state) => state.auth);

  return (
    <div>
      <div className="sidebar">
        <HeaderContainer>
          <h2>Tools</h2>
          <FaHammer />
        </HeaderContainer>

        <SearchContainer>
          <label htmlFor="filter">Filter:</label>
          <input type="text" id="filter" />
          <AiOutlineCloseCircle
            size={60}
            style={{ marginBottom: 0, cursor: "pointer" }}
          />
        </SearchContainer>
        <LinksContainer>
          <ScrollableDiv>
            {links.map((link, index) => (
              <StyledNavLink to={link.path} key={index}>
                {link.name} {link.icon}
              </StyledNavLink>
            ))}
          </ScrollableDiv>
        </LinksContainer>
      </div>
    </div>
  );
};

export default Sidebar;
