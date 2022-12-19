import { Icon, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-scroll";
import { AiOutlineMenu } from "react-icons/ai";
const Navmenu = () => {
  return (
    <Menu>
      <MenuButton>
        <Icon as={AiOutlineMenu} width="20px" h={"20px"} />
      </MenuButton>
      <MenuList>
        <MenuItem>
          <Link
            to="about"
            smooth={true}
            duration={1000}
            spy={true}
            hashSpy={true}
          >
            About
          </Link>
        </MenuItem>
        <MenuItem>
          <Link
            to="skills"
            smooth={true}
            duration={1000}
            spy={true}
            hashSpy={true}
          >
            Skills
          </Link>
        </MenuItem>
        <MenuItem>
          <Link
            to="projects"
            smooth={true}
            duration={1000}
            spy={true}
            hashSpy={true}
          >
            Projects
          </Link>
        </MenuItem>
        <MenuItem>
          <Link
            to="contact"
            smooth={true}
            duration={1000}
            spy={true}
            hashSpy={true}
          >
            Contact
          </Link>
        </MenuItem>
        <MenuItem>
          <a href="https://drive.google.com/uc?export=download&id=1eans4rcFvq5Ex5I6EhzqAKKDyMhiQ4pT">
            Resume
          </a>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default Navmenu;
