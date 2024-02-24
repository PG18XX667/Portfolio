import React from "react";
import {Navbar, NavbarContent, NavbarItem, Link} from "@nextui-org/react";

export default function AppNavbar(): React.ReactElement {
  return (
    <Navbar isBordered>
        {/* <NavbarBrand>
        <p className="font-bold text-inherit">Qingwei Liu</p>
      </NavbarBrand> */}
      <NavbarContent justify="end">
        <NavbarItem>
          <Link color="foreground" href="#">
            About
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Resume
          </Link>
        </NavbarItem>
        {/* <NavbarItem>
          <Link color="foreground" href="#">
            Contact
          </Link>
        </NavbarItem> */}
        {/* <NavbarItem>
          <Link color="foreground" href="#">
            Projects
          </Link>
        </NavbarItem> */}
      </NavbarContent>
    </Navbar>
  );
}
