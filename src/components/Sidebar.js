import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { FaHammer } from "react-icons/fa";
import { AiOutlineCloseCircle } from "react-icons/ai";

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

const Sidebar = () => {
  //const { loggedIn, firstName } = useSelector((state) => state.auth);
  const links = [
    { name: "a", path: "/a", icon: <FaHammer /> },
    { name: "bdddddddddd", path: "/b", icon: <FaHammer /> },
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
    { name: "c", path: "/c" },
    { name: "c", path: "/c" },
    { name: "c", path: "/c" },
    { name: "c", path: "/c" },
    { name: "c", path: "/c" },
    { name: "c", path: "/c" },
  ];

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
