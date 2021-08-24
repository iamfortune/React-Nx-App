import styled from 'styled-components';

/* eslint-disable-next-line */
export interface NavbarProps {
  showForm: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ showForm }) => {
  return (
    <StyledNavbar>
      <h1>Nx Notes</h1>
      <button onClick={showForm} type="button">
        Add Note
      </button>
    </StyledNavbar>
  );
};

const StyledNavbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;

  h1 {
    font-size: 1.4rem;
    font-style: oblique;
  }

  button {
    border: none;
    outline: none;
    background: #143157;
    color: #fff;
    font-size: 1rem;
    height: 2.5rem;
    width: 7rem;
    border-radius: 5px;
    transition: opacity 0.7s;
    &:hover {
      opacity: 0.8;
    }
  }
`;

export default Navbar;
